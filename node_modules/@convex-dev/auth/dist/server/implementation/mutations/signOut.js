import { deleteSession, getAuthSessionId } from "../sessions.js";
export async function signOutImpl(ctx) {
    const sessionId = await getAuthSessionId(ctx);
    if (sessionId !== null) {
        const session = await ctx.db.get(sessionId);
        if (session !== null) {
            await deleteSession(ctx, session);
            return { userId: session.userId, sessionId: session._id };
        }
    }
    return null;
}
export const callSignOut = async (ctx) => {
    return ctx.runMutation("auth:store", {
        args: {
            type: "signOut",
        },
    });
};
//# sourceMappingURL=signOut.js.map