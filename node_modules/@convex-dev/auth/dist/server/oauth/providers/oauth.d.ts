import { OIDCConfig } from "@auth/core/providers/index.js";
export type OIDCConfigInternal<Profile> = OAuthConfigInternal<Profile> & {
    checks: OIDCConfig<Profile>["checks"];
    idToken: OIDCConfig<Profile>["idToken"];
};
//# sourceMappingURL=oauth.d.ts.map