import * as AuthCoreJwt from "@auth/core/jwt";
import { OAuthConfigInternal, OIDCConfigInternal } from "./providers/oauth.js";
import { ProviderType } from "@auth/core/providers/index.js";
import * as o from "oauth4webapi";
export type ConvexAuthProviderType = "oauth" | "oidc";
export type ConfigSource = "discovered" | "provided";
export type InternalProvider<T = ProviderType> = (T extends "oauth" ? OAuthConfigInternal<any> : T extends "oidc" ? OIDCConfigInternal<any> : never) & {
    as: o.AuthorizationServer;
    configSource: ConfigSource;
};
export type JWTOptions = AuthCoreJwt.JWTOptions & {
    secret: string | string[];
};
//# sourceMappingURL=types.d.ts.map