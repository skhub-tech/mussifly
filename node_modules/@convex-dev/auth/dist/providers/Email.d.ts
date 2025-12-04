/**
 * Simplifies creating custom email providers, such as for sending OTPs.
 *
 * @module
 */
import { GenericDataModel } from "convex/server";
import { EmailConfig, EmailUserConfig } from "../server/types.js";
/**
 * Email providers send a token to the user's email address
 * for sign-in.
 *
 * When you use this function to create your config, by default it
 * checks that there is an `email` field during token verification
 * that matches the `email` used during the initial `signIn` call.
 *
 * If you want the "magic link behavior", where only the token is needed,
 * you can override the `authorize` method to skip the check:
 *
 * ```ts
 * import Email from "@convex-dev/auth/providers/Email";
 * import { convexAuth } from "@convex-dev/auth/server";
 *
 * export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
 *   providers: [
 *     Email({ authorize: undefined }),
 *   ],
 * });
 * ```
 *
 * Make sure the token has high enough entropy to be secure.
 */
export declare function Email<DataModel extends GenericDataModel>(config: EmailUserConfig<DataModel> & Pick<EmailConfig, "sendVerificationRequest">): EmailConfig<DataModel>;
//# sourceMappingURL=Email.d.ts.map