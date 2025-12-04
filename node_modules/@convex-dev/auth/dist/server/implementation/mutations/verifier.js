import { getAuthSessionId } from "../sessions.js";
export async function verifierImpl(ctx) {
    return await ctx.db.insert("authVerifiers", {
        sessionId: (await getAuthSessionId(ctx)) ?? undefined,
    });
}
export const callVerifier = async (ctx) => {
    return ctx.runMutation("auth:store", {
        args: {
            type: "verifier",
        },
    });
};
//# sourceMappingURL=verifier.js.map