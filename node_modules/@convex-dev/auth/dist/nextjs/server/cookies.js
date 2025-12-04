import { cookies as nextCookies, headers as nextHeaders } from "next/headers";
import * as utils from "../../server/utils.js";
const cookies = nextCookies;
const headers = nextHeaders;
export async function getRequestCookies() {
    // maxAge doesn't matter for request cookies since they're only relevant for the
    // length of the request
    return getCookieStore(await headers(), await cookies(), {
        maxAge: null,
    });
}
export async function getRequestCookiesInMiddleware(request) {
    // maxAge doesn't matter for request cookies since they're only relevant for the
    // length of the request
    return getCookieStore(await headers(), request.cookies, { maxAge: null });
}
export async function getResponseCookies(response, cookieConfig) {
    return getCookieStore(await headers(), response.cookies, cookieConfig);
}
function getCookieStore(requestHeaders, responseCookies, cookieConfig) {
    const isLocalhost = utils.isLocalHost(requestHeaders.get("Host") ?? "");
    const prefix = isLocalhost ? "" : "__Host-";
    const tokenName = prefix + "__convexAuthJWT";
    const refreshTokenName = prefix + "__convexAuthRefreshToken";
    const verifierName = prefix + "__convexAuthOAuthVerifier";
    function getValue(name) {
        return responseCookies.get(name)?.value ?? null;
    }
    const cookieOptions = getCookieOptions(isLocalhost, cookieConfig);
    function setValue(name, value) {
        if (value === null) {
            // Only request cookies have a `size` property
            if ("size" in responseCookies) {
                responseCookies.delete(name);
            }
            else {
                // See https://github.com/vercel/next.js/issues/56632
                // for why .delete({}) doesn't work:
                responseCookies.set(name, "", {
                    ...cookieOptions,
                    maxAge: undefined,
                    expires: 0,
                });
            }
        }
        else {
            responseCookies.set(name, value, cookieOptions);
        }
    }
    return {
        get token() {
            return getValue(tokenName);
        },
        set token(value) {
            setValue(tokenName, value);
        },
        get refreshToken() {
            return getValue(refreshTokenName);
        },
        set refreshToken(value) {
            setValue(refreshTokenName, value);
        },
        get verifier() {
            return getValue(verifierName);
        },
        set verifier(value) {
            setValue(verifierName, value);
        },
    };
}
function getCookieOptions(isLocalhost, cookieConfig) {
    // Safari does not send headers with `secure: true` on http:// domains including localhost,
    // so set `secure: false` (https://codedamn.com/news/web-development/safari-cookie-is-not-being-set)
    return {
        secure: isLocalhost ? false : true,
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: cookieConfig.maxAge ?? undefined,
    };
}
//# sourceMappingURL=cookies.js.map