import { v } from "convex/values";
import { deleteSession } from "../sessions.js";
import { LOG_LEVELS, logWithLevel } from "../utils.js";
export const invalidateSessionsArgs = v.object({
    userId: v.id("users"),
    except: v.optional(v.array(v.id("authSessions"))),
});
export const callInvalidateSessions = async (ctx, args) => {
    return ctx.runMutation("auth:store", {
        args: {
            type: "invalidateSessions",
            ...args,
        },
    });
};
export const invalidateSessionsImpl = async (ctx, args) => {
    logWithLevel(LOG_LEVELS.DEBUG, "invalidateSessionsImpl args:", args);
    const { userId, except } = args;
    const exceptSet = new Set(except ?? []);
    const sessions = await ctx.db
        .query("authSessions")
        .withIndex("userId", (q) => q.eq("userId", userId))
        .collect();
    for (const session of sessions) {
        if (!exceptSet.has(session._id)) {
            await deleteSession(ctx, session);
        }
    }
    return;
};
//# sourceMappingURL=invalidateSessions.js.map