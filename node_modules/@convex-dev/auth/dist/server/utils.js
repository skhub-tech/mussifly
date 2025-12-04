export function requireEnv(name) {
    const value = process.env[name];
    if (value === undefined) {
        throw new Error(`Missing environment variable \`${name}\``);
    }
    return value;
}
export function isLocalHost(host) {
    return /(localhost|127\.0\.0\.1):\d+/.test(host ?? "");
}
//# sourceMappingURL=utils.js.map