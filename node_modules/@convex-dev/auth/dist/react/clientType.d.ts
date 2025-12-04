import { ConvexReactClient } from "convex/react";
import { FunctionReference, OptionalRestArgs } from "convex/server";
export type AuthClient = {
    authenticatedCall<Action extends FunctionReference<"action", "public">>(action: Action, ...args: OptionalRestArgs<Action>): Promise<Action["_returnType"]>;
    unauthenticatedCall<Action extends FunctionReference<"action", "public">>(action: Action, ...args: OptionalRestArgs<Action>): Promise<Action["_returnType"]>;
    verbose: boolean | undefined;
    logger?: ConvexReactClient["logger"];
};
//# sourceMappingURL=clientType.d.ts.map