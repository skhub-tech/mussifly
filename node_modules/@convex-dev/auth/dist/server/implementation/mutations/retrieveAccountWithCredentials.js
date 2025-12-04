import { v } from "convex/values";
import { isSignInRateLimited, recordFailedSignIn, resetSignInRateLimit, } from "../rateLimit.js";
import * as Provider from "../provider.js";
import { LOG_LEVELS, logWithLevel, maybeRedact } from "../utils.js";
export const retrieveAccountWithCredentialsArgs = v.object({
    provider: v.string(),
    account: v.object({ id: v.string(), secret: v.optional(v.string()) }),
});
export async function retrieveAccountWithCredentialsImpl(ctx, args, getProviderOrThrow, config) {
    const { provider: providerId, account } = args;
    logWithLevel(LOG_LEVELS.DEBUG, "retrieveAccountWithCredentialsImpl args:", {
        provider: providerId,
        account: {
            id: account.id,
            secret: maybeRedact(account.secret ?? ""),
        },
    });
    const existingAccount = await ctx.db
        .query("authAccounts")
        .withIndex("providerAndAccountId", (q) => q.eq("provider", providerId).eq("providerAccountId", account.id))
        .unique();
    if (existingAccount === null) {
        return "InvalidAccountId";
    }
    if (account.secret !== undefined) {
        if (await isSignInRateLimited(ctx, existingAccount._id, config)) {
            return "TooManyFailedAttempts";
        }
        if (!(await Provider.verify(getProviderOrThrow(providerId), account.secret, existingAccount.secret ?? ""))) {
            await recordFailedSignIn(ctx, existingAccount._id, config);
            return "InvalidSecret";
        }
        await resetSignInRateLimit(ctx, existingAccount._id);
    }
    return {
        account: existingAccount,
        // TODO: Ian removed this
        user: (await ctx.db.get(existingAccount.userId)),
    };
}
export const callRetreiveAccountWithCredentials = async (ctx, args) => {
    return ctx.runMutation("auth:store", {
        args: {
            type: "retrieveAccountWithCredentials",
            ...args,
        },
    });
};
//# sourceMappingURL=retrieveAccountWithCredentials.js.map