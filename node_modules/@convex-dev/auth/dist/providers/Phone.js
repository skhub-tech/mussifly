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
/**
 * Phone providers send a token to the user's phone number
 * for sign-in.
 *
 * When you use this function to create your config, it
 * checks that there is a `phone` field during token verification
 * that matches the `phone` used during the initial `signIn` call.
 */
export function Phone(config) {
    return {
        id: "phone",
        type: "phone",
        maxAge: 60 * 20, // 20 minutes
        authorize: async (params, account) => {
            if (typeof params.phone !== "string") {
                throw new Error("Token verification requires an `phone` in params of `signIn`.");
            }
            if (account.providerAccountId !== params.phone) {
                throw new Error("Short verification code requires a matching `phone` " +
                    "in params of `signIn`.");
            }
        },
        sendVerificationRequest: config.sendVerificationRequest,
        options: config,
    };
}
//# sourceMappingURL=Phone.js.map