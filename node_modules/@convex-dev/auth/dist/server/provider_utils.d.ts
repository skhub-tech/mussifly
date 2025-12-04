import { OAuthConfig, OAuthEndpointType } from "@auth/core/providers";
export declare const PLACEHOLDER_URL_HOST = "convexauth.mumbojumbo";
export declare function normalizeEndpoint(e?: OAuthConfig<any>[OAuthEndpointType], issuer?: string): {
    url: URL;
    request?: undefined;
    conform?: undefined;
} | {
    url: URL;
    request: any;
    conform: any;
} | undefined;
//# sourceMappingURL=provider_utils.d.ts.map