import { v } from "convex/values";
export const verifierSignatureArgs = v.object({
    verifier: v.string(),
    signature: v.string(),
});
export async function verifierSignatureImpl(ctx, args) {
    const { verifier, signature } = args;
    const verifierDoc = await ctx.db.get(verifier);
    if (verifierDoc === null) {
        throw new Error("Invalid verifier");
    }
    return await ctx.db.patch(verifierDoc._id, { signature });
}
export const callVerifierSignature = async (ctx, args) => {
    return ctx.runMutation("auth:store", {
        args: {
            type: "verifierSignature",
            ...args,
        },
    });
};
//# sourceMappingURL=verifierSignature.js.map