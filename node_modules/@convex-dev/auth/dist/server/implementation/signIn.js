import { callCreateVerificationCode, callRefreshSession, callSignIn, callVerifier, callVerifyCodeAndSignIn, } from "./mutations/index.js";
import { redirectAbsoluteUrl, setURLSearchParam } from "./redirects.js";
import { requireEnv } from "../utils.js";
import { generateRandomString } from "./utils.js";
const DEFAULT_EMAIL_VERIFICATION_CODE_DURATION_S = 60 * 60 * 24; // 24 hours
export async function signInImpl(ctx, provider, args, options) {
    if (provider === null && args.refreshToken) {
        const tokens = (await callRefreshSession(ctx, {
            refreshToken: args.refreshToken,
        }));
        return { kind: "refreshTokens", signedIn: { tokens } };
    }
    if (provider === null && args.params?.code !== undefined) {
        const result = await callVerifyCodeAndSignIn(ctx, {
            params: args.params,
            verifier: args.verifier,
            generateTokens: true,
            allowExtraProviders: options.allowExtraProviders,
        });
        return {
            kind: "signedIn",
            signedIn: result,
        };
    }
    if (provider === null) {
        throw new Error("Cannot sign in: Missing `provider`, `params.code` or `refreshToken`");
    }
    if (provider.type === "email" || provider.type === "phone") {
        return handleEmailAndPhoneProvider(ctx, provider, args, options);
    }
    if (provider.type === "credentials") {
        return handleCredentials(ctx, provider, args, options);
    }
    if (provider.type === "oauth" || provider.type === "oidc") {
        return handleOAuthProvider(ctx, provider, args, options);
    }
    const _typecheck = provider;
    throw new Error(`Provider type ${provider.type} is not supported yet`);
}
async function handleEmailAndPhoneProvider(ctx, provider, args, options) {
    if (args.params?.code !== undefined) {
        const result = await callVerifyCodeAndSignIn(ctx, {
            params: args.params,
            provider: provider.id,
            generateTokens: options.generateTokens,
            allowExtraProviders: options.allowExtraProviders,
        });
        if (result === null) {
            throw new Error("Could not verify code");
        }
        return {
            kind: "signedIn",
            signedIn: result,
        };
    }
    const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const code = provider.generateVerificationToken
        ? await provider.generateVerificationToken()
        : generateRandomString(32, alphabet);
    const expirationTime = Date.now() +
        (provider.maxAge ?? DEFAULT_EMAIL_VERIFICATION_CODE_DURATION_S) * 1000;
    const identifier = await callCreateVerificationCode(ctx, {
        provider: provider.id,
        accountId: args.accountId,
        email: args.params?.email,
        phone: args.params?.phone,
        code,
        expirationTime,
        allowExtraProviders: options.allowExtraProviders,
    });
    const destination = await redirectAbsoluteUrl(ctx.auth.config, (args.params ?? {}));
    const verificationArgs = {
        identifier,
        url: setURLSearchParam(destination, "code", code),
        token: code,
        expires: new Date(expirationTime),
    };
    if (provider.type === "email") {
        await provider.sendVerificationRequest({
            ...verificationArgs,
            provider: {
                ...provider,
                from: 
                // Simplifies demo configuration of Resend
                provider.from === "Auth.js <no-reply@authjs.dev>" &&
                    provider.id === "resend"
                    ? "My App <onboarding@resend.dev>"
                    : provider.from,
            },
            request: new Request("http://localhost"), // TODO: Document
            theme: ctx.auth.config.theme,
        }, 
        // @ts-expect-error Figure out typing for email providers so they can
        // access ctx.
        ctx);
    }
    else if (provider.type === "phone") {
        await provider.sendVerificationRequest({ ...verificationArgs, provider }, ctx);
    }
    return { kind: "started", started: true };
}
async function handleCredentials(ctx, provider, args, options) {
    const result = await provider.authorize(args.params ?? {}, ctx);
    if (result === null) {
        return { kind: "signedIn", signedIn: null };
    }
    const idsAndTokens = await callSignIn(ctx, {
        userId: result.userId,
        sessionId: result.sessionId,
        generateTokens: options.generateTokens,
    });
    return {
        kind: "signedIn",
        signedIn: idsAndTokens,
    };
}
async function handleOAuthProvider(ctx, provider, args, options) {
    // We have this action because:
    // 1. We remember the current sessionId if any, so we can link accounts
    // 2. The client doesn't need to know the HTTP Actions URL
    //    of the backend (this simplifies using local backend)
    // 3. The client doesn't need to know which provider is of which type,
    //    and hence which provider requires client-side redirect
    // 4. On mobile the client can complete the flow manually
    if (args.params?.code !== undefined) {
        const result = await callVerifyCodeAndSignIn(ctx, {
            params: args.params,
            verifier: args.verifier,
            generateTokens: true,
            allowExtraProviders: options.allowExtraProviders,
        });
        return {
            kind: "signedIn",
            signedIn: result,
        };
    }
    const redirect = new URL((process.env.CUSTOM_AUTH_SITE_URL ?? requireEnv("CONVEX_SITE_URL")) + `/api/auth/signin/${provider.id}`);
    const verifier = await callVerifier(ctx);
    redirect.searchParams.set("code", verifier);
    if (args.params?.redirectTo !== undefined) {
        if (typeof args.params.redirectTo !== "string") {
            throw new Error(`Expected \`redirectTo\` to be a string, got ${args.params.redirectTo}`);
        }
        redirect.searchParams.set("redirectTo", args.params.redirectTo);
    }
    return { kind: "redirect", redirect: redirect.toString(), verifier };
}
//# sourceMappingURL=signIn.js.map