import { v } from "convex/values";
import { hash } from "../provider.js";
import { LOG_LEVELS, logWithLevel, maybeRedact } from "../utils.js";
export const modifyAccountArgs = v.object({
    provider: v.string(),
    account: v.object({ id: v.string(), secret: v.string() }),
});
export async function modifyAccountImpl(ctx, args, getProviderOrThrow) {
    const { provider, account } = args;
    logWithLevel(LOG_LEVELS.DEBUG, "retrieveAccountWithCredentialsImpl args:", {
        provider: provider,
        account: {
            id: account.id,
            secret: maybeRedact(account.secret ?? ""),
        },
    });
    const existingAccount = await ctx.db
        .query("authAccounts")
        .withIndex("providerAndAccountId", (q) => q.eq("provider", provider).eq("providerAccountId", account.id))
        .unique();
    if (existingAccount === null) {
        throw new Error(`Cannot modify account with ID ${account.id} because it does not exist`);
    }
    await ctx.db.patch(existingAccount._id, {
        secret: await hash(getProviderOrThrow(provider), account.secret),
    });
    return;
}
export const callModifyAccount = async (ctx, args) => {
    return ctx.runMutation("auth:store", {
        args: {
            type: "modifyAccount",
            ...args,
        },
    });
};
//# sourceMappingURL=modifyAccount.js.map