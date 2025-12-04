import { v } from "convex/values";
import { getAccountOrThrow, upsertUserAndAccount } from "../users.js";
import { getAuthSessionId } from "../sessions.js";
import { LOG_LEVELS, logWithLevel, sha256 } from "../utils.js";
export const createVerificationCodeArgs = v.object({
    accountId: v.optional(v.id("authAccounts")),
    provider: v.string(),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
    code: v.string(),
    expirationTime: v.number(),
    allowExtraProviders: v.boolean(),
});
export async function createVerificationCodeImpl(ctx, args, getProviderOrThrow, config) {
    logWithLevel(LOG_LEVELS.DEBUG, "createVerificationCodeImpl args:", args);
    const { email, phone, code, expirationTime, provider: providerId, accountId: existingAccountId, allowExtraProviders, } = args;
    const existingAccount = existingAccountId !== undefined
        ? await getAccountOrThrow(ctx, existingAccountId)
        : await ctx.db
            .query("authAccounts")
            .withIndex("providerAndAccountId", (q) => q
            .eq("provider", providerId)
            .eq("providerAccountId", email ?? phone))
            .unique();
    const provider = getProviderOrThrow(providerId, allowExtraProviders);
    const { accountId } = await upsertUserAndAccount(ctx, await getAuthSessionId(ctx), existingAccount !== null
        ? { existingAccount }
        : { providerAccountId: email ?? phone }, provider.type === "email"
        ? { type: "email", provider, profile: { email: email } }
        : { type: "phone", provider, profile: { phone: phone } }, config);
    await generateUniqueVerificationCode(ctx, accountId, providerId, code, expirationTime, { email, phone });
    return email ?? phone;
}
export const callCreateVerificationCode = async (ctx, args) => {
    return ctx.runMutation("auth:store", {
        args: {
            type: "createVerificationCode",
            ...args,
        },
    });
};
async function generateUniqueVerificationCode(ctx, accountId, provider, code, expirationTime, { email, phone }) {
    const existingCode = await ctx.db
        .query("authVerificationCodes")
        .withIndex("accountId", (q) => q.eq("accountId", accountId))
        .unique();
    if (existingCode !== null) {
        await ctx.db.delete(existingCode._id);
    }
    await ctx.db.insert("authVerificationCodes", {
        accountId,
        provider,
        code: await sha256(code),
        expirationTime,
        emailVerified: email,
        phoneVerified: phone,
    });
}
//# sourceMappingURL=createVerificationCode.js.map