/**
 * Configure {@link Anonymous} provider given an {@link AnonymousConfig}.
 *
 * ```ts
 * import { Anonymous } from "@convex-dev/auth/providers/Anonymous";
 * import { convexAuth } from "@convex-dev/auth/server";
 *
 * export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
 *   providers: [Anonymous],
 * });
 * ```
 *
 * @module
 */
import { ConvexCredentials } from "@convex-dev/auth/providers/ConvexCredentials";
import { createAccount, } from "@convex-dev/auth/server";
/**
 * An anonymous authentication provider.
 *
 * This provider doesn't require any user-provided information.
 */
export function Anonymous(config = {}) {
    const provider = config.id ?? "anonymous";
    return ConvexCredentials({
        id: "anonymous",
        authorize: async (params, ctx) => {
            const profile = config.profile?.(params, ctx) ?? { isAnonymous: true };
            const { user } = await createAccount(ctx, {
                provider,
                account: { id: crypto.randomUUID() },
                profile: profile,
            });
            // END
            return { userId: user._id };
        },
        ...config,
    });
}
//# sourceMappingURL=Anonymous.js.map