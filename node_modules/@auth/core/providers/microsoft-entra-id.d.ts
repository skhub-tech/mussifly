import type { OIDCConfig, OIDCUserConfig } from "./index.js";
export interface MicrosoftEntraIDProfile extends Record<string, any> {
    sub: string;
    nickname: string;
    email: string;
    picture: string;
}
/**
 *
 * Add Microsoft Entra ID login to your page.
 *
 * ## Setup
 *
 * ### Callback URL
 * ```
 * https://example.com/auth/callback/microsoft-entra-id
 * ```
 *
 * ### Configuration
 *
 * @example
 *
 * ```ts
 * import MicrosoftEntraID from "@auth/core/providers/microsoft-entra-id"
 * ...
 * providers: [
 *   MicrosoftEntraID({
 *     clientId: env.AUTH_MICROSOFT_ENTRA_ID_ID,
 *     clientSecret: env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
 *   }),
 * ]
 * ...
 * ```
 *
 * ### Resources
 *
 *  - [Microsoft Entra OAuth documentation](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow)
 *  - [Microsoft Entra OAuth apps](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app)
 *
 * ### To allow specific Active Directory users access:
 *
 * By default, the Entra ID provider lets the users to log in with any Microsoft account (either Personal, School or Work).
 *
 * To only allow your organization's users to log in, you'll need to set the `issuer`, in addition to the client id and secret.
 *
 * @example
 * ```ts
 * import MicrosoftEntraID from "@auth/core/providers/microsoft-entra-id"
 *
 * providers: [
 *   MicrosoftEntraID({
 *     clientId: env.AUTH_MICROSOFT_ENTRA_ID_ID,
 *     clientSecret: env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
 *     issuer: env.AUTH_MICROSOFT_ENTRA_ID_TENANT_ID,
 *   }),
 * ]
 * ```
 *
 * ### Notes
 *
 * Microsoft Entra ID returns the profile picture in an ArrayBuffer, instead of just a URL to the image, so our provider converts it to a base64 encoded image string and returns that instead. See: https://learn.microsoft.com/en-us/graph/api/profilephoto-get?view=graph-rest-1.0&tabs=http#examples. The default image size is 48x48 to avoid [running out of space](https://next-auth.js.org/faq#:~:text=What%20are%20the%20disadvantages%20of%20JSON%20Web%20Tokens%3F) in case the session is saved as a JWT.
 *
 * By default, Auth.js assumes that the Microsoft Entra ID provider is
 * based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.
 *
 * :::tip
 *
 * The Microsoft Entra ID provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/microsoft-entra-id.ts).
 * To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).
 *
 * :::
 *
 * :::info **Disclaimer**
 *
 * If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).
 *
 * Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from
 * the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec,
 * we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).
 *
 * :::
 */
export default function MicrosoftEntraID(config: OIDCUserConfig<MicrosoftEntraIDProfile> & {
    /**
     * https://learn.microsoft.com/en-us/graph/api/profilephoto-get?view=graph-rest-1.0&tabs=http#examples
     *
     * @default 48
     */
    profilePhotoSize?: 48 | 64 | 96 | 120 | 240 | 360 | 432 | 504 | 648;
}): OIDCConfig<MicrosoftEntraIDProfile>;
//# sourceMappingURL=microsoft-entra-id.d.ts.map