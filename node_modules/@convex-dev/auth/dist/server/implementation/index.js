import { actionGeneric, queryGeneric, httpActionGeneric, internalMutationGeneric, } from "convex/server";
import { ConvexError, v } from "convex/values";
import { parse as parseCookies, serialize as serializeCookie } from "cookie";
import { redirectToParamCookie, useRedirectToParam } from "../cookies.js";
import { configDefaults, listAvailableProviders, materializeProvider, } from "../provider_utils.js";
import { requireEnv } from "../utils.js";
export { authTables } from "./types.js";
import { LOG_LEVELS, TOKEN_SUB_CLAIM_DIVIDER, logError, logWithLevel, } from "./utils.js";
import { callCreateAccountFromCredentials, callInvalidateSessions, callModifyAccount, callRetreiveAccountWithCredentials, callSignOut, callUserOAuth, callVerifierSignature, storeArgs, storeImpl, } from "./mutations/index.js";
import { signInImpl } from "./signIn.js";
import { redirectAbsoluteUrl, setURLSearchParam } from "./redirects.js";
import { getAuthorizationUrl } from "../oauth/authorizationUrl.js";
import { defaultCookiesOptions, oAuthConfigToInternalProvider, } from "../oauth/convexAuth.js";
import { handleOAuth } from "../oauth/callback.js";
export { getAuthSessionId } from "./sessions.js";
/**
 * Configure the Convex Auth library. Returns an object with
 * functions and `auth` helper. You must export the functions
 * from `convex/auth.ts` to make them callable:
 *
 * ```ts filename="convex/auth.ts"
 * import { convexAuth } from "@convex-dev/auth/server";
 *
 * export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
 *   providers: [],
 * });
 * ```
 *
 * @returns An object with fields you should reexport from your
 *          `convex/auth.ts` file.
 */
export function convexAuth(config_) {
    const config = configDefaults(config_);
    const hasOAuth = config.providers.some((provider) => provider.type === "oauth" || provider.type === "oidc");
    const getProvider = (id, allowExtraProviders = false) => {
        return (config.providers.find((provider) => provider.id === id) ??
            (allowExtraProviders
                ? config.extraProviders.find((provider) => provider.id === id)
                : undefined));
    };
    const getProviderOrThrow = (id, allowExtraProviders = false) => {
        const provider = getProvider(id, allowExtraProviders);
        if (provider === undefined) {
            const message = `Provider \`${id}\` is not configured, ` +
                `available providers are ${listAvailableProviders(config, allowExtraProviders)}.`;
            logWithLevel(LOG_LEVELS.ERROR, message);
            throw new Error(message);
        }
        return provider;
    };
    const enrichCtx = (ctx) => ({ ...ctx, auth: { ...ctx.auth, config } });
    const auth = {
        /**
         * @deprecated - Use `getAuthUserId` from "@convex-dev/auth/server":
         *
         * ```ts
         * import { getAuthUserId } from "@convex-dev/auth/server";
         * ```
         *
         * @hidden
         */
        getUserId: async (ctx) => {
            const identity = await ctx.auth.getUserIdentity();
            if (identity === null) {
                return null;
            }
            const [userId] = identity.subject.split(TOKEN_SUB_CLAIM_DIVIDER);
            return userId;
        },
        /**
         * @deprecated - Use `getAuthSessionId` from "@convex-dev/auth/server":
         *
         * ```
         * import { getAuthSessionId } from "@convex-dev/auth/server";
         * ```
         *
         * @hidden
         */
        getSessionId: async (ctx) => {
            const identity = await ctx.auth.getUserIdentity();
            if (identity === null) {
                return null;
            }
            const [, sessionId] = identity.subject.split(TOKEN_SUB_CLAIM_DIVIDER);
            return sessionId;
        },
        /**
         * Add HTTP actions for JWT verification and OAuth sign-in.
         *
         * ```ts
         * import { httpRouter } from "convex/server";
         * import { auth } from "./auth.js";
         *
         * const http = httpRouter();
         *
         * auth.addHttpRoutes(http);
         *
         * export default http;
         * ```
         *
         * The following routes are handled always:
         *
         * - `/.well-known/openid-configuration`
         * - `/.well-known/jwks.json`
         *
         * The following routes are handled if OAuth is configured:
         *
         * - `/api/auth/signin/*`
         * - `/api/auth/callback/*`
         *
         * @param http your HTTP router
         */
        addHttpRoutes: (http) => {
            http.route({
                path: "/.well-known/openid-configuration",
                method: "GET",
                handler: httpActionGeneric(async () => {
                    return new Response(JSON.stringify({
                        issuer: requireEnv("CONVEX_SITE_URL"),
                        jwks_uri: requireEnv("CONVEX_SITE_URL") + "/.well-known/jwks.json",
                        authorization_endpoint: requireEnv("CONVEX_SITE_URL") + "/oauth/authorize",
                    }), {
                        status: 200,
                        headers: {
                            "Content-Type": "application/json",
                            "Cache-Control": "public, max-age=15, stale-while-revalidate=15, stale-if-error=86400",
                        },
                    });
                }),
            });
            http.route({
                path: "/.well-known/jwks.json",
                method: "GET",
                handler: httpActionGeneric(async () => {
                    return new Response(requireEnv("JWKS"), {
                        status: 200,
                        headers: {
                            "Content-Type": "application/json",
                            "Cache-Control": "public, max-age=15, stale-while-revalidate=15, stale-if-error=86400",
                        },
                    });
                }),
            });
            if (hasOAuth) {
                http.route({
                    pathPrefix: "/api/auth/signin/",
                    method: "GET",
                    handler: httpActionGeneric(convertErrorsToResponse(400, async (ctx, request) => {
                        const url = new URL(request.url);
                        const pathParts = url.pathname.split("/");
                        const providerId = pathParts.at(-1);
                        if (providerId === null) {
                            throw new Error("Missing provider id");
                        }
                        const verifier = url.searchParams.get("code");
                        if (verifier === null) {
                            throw new Error("Missing sign-in verifier");
                        }
                        const provider = getProviderOrThrow(providerId);
                        const { redirect, cookies, signature } = await getAuthorizationUrl({
                            provider: await oAuthConfigToInternalProvider(provider),
                            cookies: defaultCookiesOptions(providerId),
                        });
                        await callVerifierSignature(ctx, {
                            verifier,
                            signature,
                        });
                        const redirectTo = url.searchParams.get("redirectTo");
                        if (redirectTo !== null) {
                            cookies.push(redirectToParamCookie(providerId, redirectTo));
                        }
                        const headers = new Headers({ Location: redirect });
                        for (const { name, value, options } of cookies) {
                            headers.append("Set-Cookie", serializeCookie(name, value, options));
                        }
                        return new Response(null, { status: 302, headers });
                    })),
                });
                const callbackAction = httpActionGeneric(async (genericCtx, request) => {
                    const ctx = genericCtx;
                    const url = new URL(request.url);
                    const pathParts = url.pathname.split("/");
                    const providerId = pathParts.at(-1);
                    logWithLevel(LOG_LEVELS.DEBUG, "Handling OAuth callback for provider:", providerId);
                    const provider = getProviderOrThrow(providerId);
                    const cookies = getCookies(request);
                    const maybeRedirectTo = useRedirectToParam(provider.id, cookies);
                    const destinationUrl = await redirectAbsoluteUrl(config, {
                        redirectTo: maybeRedirectTo?.redirectTo,
                    });
                    const params = url.searchParams;
                    // Handle OAuth providers that use formData (such as Apple)
                    if (request.headers.get("Content-Type") ===
                        "application/x-www-form-urlencoded") {
                        const formData = await request.formData();
                        for (const [key, value] of formData.entries()) {
                            if (typeof value === "string") {
                                params.append(key, value);
                            }
                        }
                    }
                    try {
                        const { profile, tokens, signature } = await handleOAuth(Object.fromEntries(params.entries()), cookies, {
                            provider: await oAuthConfigToInternalProvider(provider),
                            cookies: defaultCookiesOptions(provider.id),
                        });
                        const { id, ...profileFromCallback } = await provider.profile(profile, tokens);
                        if (typeof id !== "string") {
                            throw new Error(`The profile method of the ${providerId} config must return a string ID`);
                        }
                        const verificationCode = await callUserOAuth(ctx, {
                            provider: providerId,
                            providerAccountId: id,
                            profile: profileFromCallback,
                            signature,
                        });
                        return new Response(null, {
                            status: 302,
                            headers: {
                                Location: setURLSearchParam(destinationUrl, "code", verificationCode),
                                "Cache-Control": "must-revalidate",
                            },
                        });
                    }
                    catch (error) {
                        logError(error);
                        return Response.redirect(destinationUrl);
                    }
                });
                http.route({
                    pathPrefix: "/api/auth/callback/",
                    method: "GET",
                    handler: callbackAction,
                });
                http.route({
                    pathPrefix: "/api/auth/callback/",
                    method: "POST",
                    handler: callbackAction,
                });
            }
        },
    };
    return {
        /**
         * Helper for configuring HTTP actions.
         */
        auth,
        /**
         * Action called by the client to sign the user in.
         *
         * Also used for refreshing the session.
         */
        signIn: actionGeneric({
            args: {
                provider: v.optional(v.string()),
                params: v.optional(v.any()),
                verifier: v.optional(v.string()),
                refreshToken: v.optional(v.string()),
                calledBy: v.optional(v.string()),
            },
            handler: async (ctx, args) => {
                if (args.calledBy !== undefined) {
                    logWithLevel("INFO", `\`auth:signIn\` called by ${args.calledBy}`);
                }
                const provider = args.provider !== undefined
                    ? getProviderOrThrow(args.provider)
                    : null;
                const result = await signInImpl(enrichCtx(ctx), provider, args, {
                    generateTokens: true,
                    allowExtraProviders: false,
                });
                switch (result.kind) {
                    case "redirect":
                        return { redirect: result.redirect, verifier: result.verifier };
                    case "signedIn":
                    case "refreshTokens":
                        return { tokens: result.signedIn?.tokens ?? null };
                    case "started":
                        return { started: true };
                    default: {
                        const _typecheck = result;
                        throw new Error(`Unexpected result from signIn, ${result}`);
                    }
                }
            },
        }),
        /**
         * Action called by the client to invalidate the current session.
         */
        signOut: actionGeneric({
            args: {},
            handler: async (ctx) => {
                await callSignOut(ctx);
            },
        }),
        /**
         * Internal mutation used by the library to read and write
         * to the database during signin and signout.
         */
        store: internalMutationGeneric({
            args: storeArgs,
            handler: async (ctx, args) => {
                return storeImpl(ctx, args, getProviderOrThrow, config);
            },
        }),
        /**
         * Utility function for frameworks to use to get the current auth state
         * based on credentials that they've supplied separately.
         */
        isAuthenticated: queryGeneric({
            args: {},
            handler: async (ctx, _args) => {
                const ident = await ctx.auth.getUserIdentity();
                return ident !== null;
            },
        }),
    };
}
/**
 * Return the currently signed-in user's ID.
 *
 * ```ts filename="convex/myFunctions.tsx"
 * import { mutation } from "./_generated/server";
 * import { getAuthUserId } from "@convex-dev/auth/server";
 *
 * export const doSomething = mutation({
 *   args: {/* ... *\/},
 *   handler: async (ctx, args) => {
 *     const userId = await getAuthUserId(ctx);
 *     if (userId === null) {
 *       throw new Error("Client is not authenticated!")
 *     }
 *     const user = await ctx.db.get(userId);
 *     // ...
 *   },
 * });
 * ```
 *
 * @param ctx query, mutation or action `ctx`
 * @returns the user ID or `null` if the client isn't authenticated
 */
export async function getAuthUserId(ctx) {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
        return null;
    }
    const [userId] = identity.subject.split(TOKEN_SUB_CLAIM_DIVIDER);
    return userId;
}
/**
 * Use this function from a
 * [`ConvexCredentials`](https://labs.convex.dev/auth/api_reference/providers/ConvexCredentials)
 * provider to create an account and a user with a unique account "id" (OAuth
 * provider ID, email address, phone number, username etc.).
 *
 * @returns user ID if it successfully creates the account
 * or throws an error.
 */
export async function createAccount(ctx, args) {
    const actionCtx = ctx;
    return await callCreateAccountFromCredentials(actionCtx, args);
}
/**
 * Use this function from a
 * [`ConvexCredentials`](https://labs.convex.dev/auth/api_reference/providers/ConvexCredentials)
 * provider to retrieve a user given the account provider ID and
 * the provider-specific account ID.
 *
 * @returns the retrieved user document, or `null` if there is no account
 * for given account ID or throws if the provided
 * secret does not match.
 */
export async function retrieveAccount(ctx, args) {
    const actionCtx = ctx;
    const result = await callRetreiveAccountWithCredentials(actionCtx, args);
    if (typeof result === "string") {
        throw new Error(result);
    }
    return result;
}
/**
 * Use this function to modify the account credentials
 * from a [`ConvexCredentials`](https://labs.convex.dev/auth/api_reference/providers/ConvexCredentials)
 * provider.
 */
export async function modifyAccountCredentials(ctx, args) {
    const actionCtx = ctx;
    return await callModifyAccount(actionCtx, args);
}
/**
 * Use this function to invalidate existing sessions.
 */
export async function invalidateSessions(ctx, args) {
    const actionCtx = ctx;
    return await callInvalidateSessions(actionCtx, args);
}
/**
 * Use this function from a
 * [`ConvexCredentials`](https://labs.convex.dev/auth/api_reference/providers/ConvexCredentials)
 * provider to sign in the user via another provider (usually
 * for email verification on sign up or password reset).
 *
 * Returns the user ID if the sign can proceed,
 * or `null`.
 */
export async function signInViaProvider(ctx, provider, args) {
    const result = await signInImpl(ctx, materializeProvider(provider), args, {
        generateTokens: false,
        allowExtraProviders: true,
    });
    return result.kind === "signedIn"
        ? result.signedIn !== null
            ? { userId: result.signedIn.userId, sessionId: result.signedIn.sessionId }
            : null
        : null;
}
function convertErrorsToResponse(errorStatusCode, action) {
    return async (ctx, request) => {
        try {
            return await action(ctx, request);
        }
        catch (error) {
            if (error instanceof ConvexError) {
                return new Response(null, {
                    status: errorStatusCode,
                    statusText: error.data,
                });
            }
            else {
                logError(error);
                return new Response(null, {
                    status: 500,
                    statusText: "Internal Server Error",
                });
            }
        }
    };
}
function getCookies(request) {
    return parseCookies(request.headers.get("Cookie") ?? "");
}
//# sourceMappingURL=index.js.map