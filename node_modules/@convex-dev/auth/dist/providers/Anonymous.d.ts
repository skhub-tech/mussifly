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
import { GenericActionCtxWithAuthConfig } from "@convex-dev/auth/server";
import { DocumentByName, GenericDataModel, WithoutSystemFields } from "convex/server";
import { Value } from "convex/values";
/**
 * The available options to an {@link Anonymous} provider for Convex Auth.
 */
export interface AnonymousConfig<DataModel extends GenericDataModel> {
    /**
     * Uniquely identifies the provider, allowing to use
     * multiple different {@link Anonymous} providers.
     */
    id?: string;
    /**
     * Perform checks on provided params and customize the user
     * information stored after sign in.
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
        isAnonymous: true;
    };
}
/**
 * An anonymous authentication provider.
 *
 * This provider doesn't require any user-provided information.
 */
export declare function Anonymous<DataModel extends GenericDataModel>(config?: AnonymousConfig<DataModel>): import("@convex-dev/auth/server").ConvexCredentialsConfig;
//# sourceMappingURL=Anonymous.d.ts.map