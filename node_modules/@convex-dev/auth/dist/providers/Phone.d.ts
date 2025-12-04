/**
 * Configure {@link Phone} provider given a {@link PhoneUserConfig}.
 *
 * Simplifies creating phone providers.
 *
 * By default checks that there is an `phone` field during token verification
 * that matches the `phone` used during the initial `signIn` call.
 *
 * @module
 */
import { GenericDataModel } from "convex/server";
import { PhoneConfig, PhoneUserConfig } from "../server/types.js";
/**
 * Phone providers send a token to the user's phone number
 * for sign-in.
 *
 * When you use this function to create your config, it
 * checks that there is a `phone` field during token verification
 * that matches the `phone` used during the initial `signIn` call.
 */
export declare function Phone<DataModel extends GenericDataModel>(config: PhoneUserConfig & Pick<PhoneConfig, "sendVerificationRequest">): PhoneConfig<DataModel>;
//# sourceMappingURL=Phone.d.ts.map