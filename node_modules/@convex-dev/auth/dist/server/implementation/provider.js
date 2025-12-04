export async function hash(provider, secret) {
    if (provider.type !== "credentials") {
        throw new Error(`Provider ${provider.id} is not a credentials provider`);
    }
    const hashSecretFn = provider.crypto?.hashSecret;
    if (hashSecretFn === undefined) {
        throw new Error(`Provider ${provider.id} does not have a \`crypto.hashSecret\` function`);
    }
    return await hashSecretFn(secret);
}
export async function verify(provider, secret, hash) {
    if (provider.type !== "credentials") {
        throw new Error(`Provider ${provider.id} is not a credentials provider`);
    }
    const verifySecretFn = provider.crypto?.verifySecret;
    if (verifySecretFn === undefined) {
        throw new Error(`Provider ${provider.id} does not have a \`crypto.verifySecret\` function`);
    }
    return await verifySecretFn(secret, hash);
}
//# sourceMappingURL=provider.js.map