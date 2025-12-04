import { v } from "convex/values";
import { createNewAndDeleteExistingSession, maybeGenerateTokensForSession, } from "../sessions.js";
import { LOG_LEVELS, logWithLevel } from "../utils.js";
export const signInArgs = v.object({
    userId: v.id("users"),
    sessionId: v.optional(v.id("authSessions")),
    generateTokens: v.boolean(),
});
export async function signInImpl(ctx, args, config) {
    logWithLevel(LOG_LEVELS.DEBUG, "signInImpl args:", args);
    const { userId, sessionId: existingSessionId, generateTokens } = args;
    const sessionId = existingSessionId ??
        (await createNewAndDeleteExistingSession(ctx, config, userId));
    return await maybeGenerateTokensForSession(ctx, config, userId, sessionId, generateTokens);
}
export const callSignIn = async (ctx, args) => {
    return ctx.runMutation("auth:store", {
        args: {
            type: "signIn",
            ...args,
        },
    });
};
//# sourceMappingURL=signIn.js.map