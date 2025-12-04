/**
 * Configure {@link Password} provider given a {@link PasswordConfig}.
 *
 * The `Password` provider supports the following flows, determined
 * by the `flow` parameter:
 *
 * - `"signUp"`: Create a new account with a password.
 * - `"signIn"`: Sign in with an existing account and password.
 * - `"reset"`: Request a password reset.
 * - `"reset-verification"`: Verify a password reset code and change password.
 * - `"email-verification"`: If email verification is enabled and `code` is
 *    included in params, verify an OTP.
 *
 * ```ts
 * import Password from "@convex-dev/auth/providers/Password";
 * import { convexAuth } from "@convex-dev/auth/server";
 *
 * export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
 *   providers: [Password],
 * });
 * ```
 *
 * @module
 */
import { ConvexCredentialsUserConfig } from "@convex-dev/auth/providers/ConvexCredentials";
import { EmailConfig, GenericActionCtxWithAuthConfig } from "@convex-dev/auth/server";
import { DocumentByName, GenericDataModel, WithoutSystemFields } from "convex/server";
import { Value } from "convex/values";
/**
 * The available options to a {@link Password} provider for Convex Auth.
 */
export interface PasswordConfig<DataModel extends GenericDataModel> {
    /**
     * Uniquely identifies the provider, allowing to use
     * multiple different {@link Password} providers.
     */
    id?: string;
    /**
     * Perform checks on provided params and customize the user
     * information stored after sign up, including email normalization.
     *
     * Called for every flow ("signUp", "signIn", "reset",
     * "reset-verification" and "email-verification").
     */
    profile?: (
    /**
     * The values passed to the `signIn` function.
     */
    params: Record<string, Value | undefined>, 
    /**
     * Convex ActionCtx in case you want to read from or write to
     * the database.
     */
    ctx: GenericActionCtxWithAuthConfig<DataModel>) => WithoutSystemFields<DocumentByName<DataModel, "users">> & {
        email: string;
    };
    /**
     * Performs custom validation on password provided during sign up or reset.
     *
     * Otherwise the default validation is used (password is not empty and
     * at least 8 characters in length).
     *
     * If the provided password is invalid, implementations must throw an Error.
     *
     * @param password the password supplied during "signUp" or
     *                 "reset-verification" flows.
     */
    validatePasswordRequirements?: (password: string) => void;
    /**
     * Provide hashing and verification functions if you want to control
     * how passwords are hashed.
     */
    crypto?: ConvexCredentialsUserConfig["crypto"];
    /**
     * An Auth.js email provider used to require verification
     * before password reset.
     */
    reset?: EmailConfig | ((...args: any) => EmailConfig);
    /**
     * An Auth.js email provider used to require verification
     * before sign up / sign in.
     */
    verify?: EmailConfig | ((...args: any) => EmailConfig);
}
/**
 * Email and password authentication provider.
 *
 * Passwords are by default hashed using Scrypt from Lucia.
 * You can customize the hashing via the `crypto` option.
 *
 * Email verification is not required unless you pass
 * an email provider to the `verify` option.
 */
export declare function Password<DataModel extends GenericDataModel>(config?: PasswordConfig<DataModel>): import("@convex-dev/auth/server").ConvexCredentialsConfig;
//# sourceMappingURL=Password.d.ts.map