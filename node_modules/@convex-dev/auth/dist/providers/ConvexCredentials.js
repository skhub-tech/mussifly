/**
 * Configure {@link ConvexCredentials} provider given a {@link ConvexCredentialsUserConfig}.
 *
 * This is for a very custom authentication implementation, often you can
 * use the [`Password`](https://labs.convex.dev/auth/api_reference/providers/Password) provider instead.
 *
 * ```ts
 * import ConvexCredentials from "@convex-dev/auth/providers/ConvexCredentials";
 * import { convexAuth } from "@convex-dev/auth/server";
 *
 * export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
 *   providers: [
 *     ConvexCredentials({
 *       authorize: async (credentials, ctx) => {
 *         // Your custom logic here...
 *       },
 *     }),
 *   ],
 * });
 * ```
 *
 * @module
 */
/**
 * The Credentials provider allows you to handle signing in with arbitrary credentials,
 * such as a username and password, domain, or two factor authentication or hardware device (e.g. YubiKey U2F / FIDO).
 */
export function ConvexCredentials(config) {
    return {
        id: "credentials",
        type: "credentials",
        authorize: async () => null,
        // @ts-expect-error Internal
        options: config,
    };
}
//# sourceMappingURL=ConvexCredentials.js.map