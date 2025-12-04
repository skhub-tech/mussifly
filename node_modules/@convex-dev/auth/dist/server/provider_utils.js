// Some code adapted from Auth.js. Original license:
//
// ISC License
//
// Copyright (c) 2022-2024, Balázs Orbán
//
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
import { setEnvDefaults } from "@auth/core";
/**
 * @internal
 */
export function configDefaults(config_) {
    const config = materializeAndDefaultProviders(config_);
    // Collect extra providers
    const extraProviders = config.providers
        .filter((p) => p.type === "credentials")
        .map((p) => p.extraProviders)
        .flat()
        .filter((p) => p !== undefined);
    return {
        ...config,
        extraProviders: materializeProviders(extraProviders),
        theme: config.theme ?? {
            colorScheme: "auto",
            logo: "",
            brandColor: "",
            buttonText: "",
        },
    };
}
/**
 * @internal
 */
export function materializeProvider(provider) {
    const config = { providers: [provider] };
    materializeAndDefaultProviders(config);
    return config.providers[0];
}
function materializeProviders(providers) {
    const config = { providers };
    materializeAndDefaultProviders(config);
    return config.providers;
}
function materializeAndDefaultProviders(config_) {
    // Have to materialize first so that the correct env variables are used
    const providers = config_.providers.map((provider) => providerDefaults(typeof provider === "function" ? provider() : provider));
    const config = { ...config_, providers };
    // Unfortunately mutates its argument
    setEnvDefaults(process.env, config);
    // Manually do this for new provider type
    config.providers.forEach((provider) => {
        if (provider.type === "phone") {
            const ID = provider.id.toUpperCase().replace(/-/g, "_");
            // Should not require this env var at push time, as the provider's
            // implementation might not use it
            provider.apiKey ??= process.env[`AUTH_${ID}_KEY`];
        }
    });
    return config;
}
function providerDefaults(provider) {
    // TODO: Add `redirectProxyUrl` to oauth providers
    const merged = merge(provider, provider.options);
    return merged.type === "oauth" || merged.type === "oidc"
        ? normalizeOAuth(merged)
        : merged;
}
const defaultProfile = (profile) => {
    return stripUndefined({
        id: profile.sub ?? profile.id ?? crypto.randomUUID(),
        name: profile.name ?? profile.nickname ?? profile.preferred_username,
        email: profile.email ?? undefined,
        image: profile.picture ?? undefined,
    });
};
const defaultAccount = (account) => {
    return stripUndefined({
        access_token: account.access_token,
        id_token: account.id_token,
        refresh_token: account.refresh_token,
        expires_at: account.expires_at,
        scope: account.scope,
        token_type: account.token_type,
        session_state: account.session_state,
    });
};
function stripUndefined(o) {
    const result = {};
    for (const [k, v] of Object.entries(o))
        v !== undefined && (result[k] = v);
    return result;
}
function normalizeOAuth(c) {
    if (c.issuer)
        c.wellKnown ??= `${c.issuer}/.well-known/openid-configuration`;
    const checks = c.checks ?? ["pkce"];
    if (c.redirectProxyUrl) {
        if (!checks.includes("state"))
            checks.push("state");
        c.redirectProxyUrl = `${c.redirectProxyUrl}/callback/${c.id}`;
    }
    return {
        ...c,
        checks,
        profile: c.profile ?? defaultProfile,
        account: c.account ?? defaultAccount,
    };
}
export const PLACEHOLDER_URL_HOST = "convexauth.mumbojumbo";
const PLACEHOLDER_URL = `https://${PLACEHOLDER_URL_HOST}`;
export function normalizeEndpoint(e, issuer) {
    if (!e && issuer)
        return undefined;
    if (typeof e === "string") {
        return { url: new URL(e) };
    }
    // Placeholder URL is used to pass around the URL object
    // even if the URL hasn't been specified: the `issuer`
    // is used instead.
    const url = new URL(e?.url ?? PLACEHOLDER_URL);
    if (e?.params != null) {
        for (const [key, value] of Object.entries(e.params)) {
            url.searchParams.set(key, String(key === "claims" ? JSON.stringify(value) : value));
        }
    }
    return { url, request: e?.request, conform: e?.conform };
}
// Source: https://stackoverflow.com/a/34749873/5364135
/**
 * Deep merge two objects
 *
 * @internal
 */
export function merge(target, ...sources) {
    if (!sources.length)
        return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key])
                    Object.assign(target, { [key]: {} });
                merge(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return merge(target, ...sources);
}
/** Simple object check */
function isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
}
/**
 * @internal
 */
export function listAvailableProviders(config, allowExtraProviders) {
    const availableProviders = config.providers
        .concat(allowExtraProviders ? config.extraProviders : [])
        .map((provider) => `\`${provider.id}\``);
    return availableProviders.length > 0
        ? availableProviders.join(", ")
        : "no providers have been configured";
}
//# sourceMappingURL=provider_utils.js.map