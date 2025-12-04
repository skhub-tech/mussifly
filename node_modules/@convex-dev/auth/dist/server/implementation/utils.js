import { sha256 as rawSha256 } from "@oslojs/crypto/sha2";
import { encodeHexLowerCase } from "@oslojs/encoding";
import { generateRandomString as osloGenerateRandomString, } from "@oslojs/crypto/random";
export const TOKEN_SUB_CLAIM_DIVIDER = "|";
export const REFRESH_TOKEN_DIVIDER = "|";
export function stringToNumber(value) {
    return value !== undefined ? Number(value) : undefined;
}
export async function sha256(input) {
    return encodeHexLowerCase(rawSha256(new TextEncoder().encode(input)));
}
export function generateRandomString(length, alphabet) {
    const random = {
        read(bytes) {
            crypto.getRandomValues(bytes);
        },
    };
    return osloGenerateRandomString(random, alphabet, length);
}
export function logError(error) {
    logWithLevel(LOG_LEVELS.ERROR, error instanceof Error
        ? error.message + "\n" + error.stack?.replace("\\n", "\n")
        : error);
}
export const LOG_LEVELS = {
    ERROR: "ERROR",
    WARN: "WARN",
    INFO: "INFO",
    DEBUG: "DEBUG",
};
export function logWithLevel(level, ...args) {
    const configuredLogLevel = LOG_LEVELS[process.env.AUTH_LOG_LEVEL ?? "INFO"] ?? "INFO";
    switch (level) {
        case "ERROR":
            console.error(...args);
            break;
        case "WARN":
            if (configuredLogLevel !== "ERROR") {
                console.warn(...args);
            }
            break;
        case "INFO":
            if (configuredLogLevel === "INFO" || configuredLogLevel === "DEBUG") {
                console.info(...args);
            }
            break;
        case "DEBUG":
            if (configuredLogLevel === "DEBUG") {
                console.debug(...args);
            }
            break;
    }
}
const UNREDACTED_LENGTH = 5;
export function maybeRedact(value) {
    if (value === "") {
        return "";
    }
    const shouldRedact = process.env.AUTH_LOG_SECRETS !== "true";
    if (shouldRedact) {
        if (value.length < UNREDACTED_LENGTH * 2) {
            return "<redacted>";
        }
        return (value.substring(0, UNREDACTED_LENGTH) +
            "<redacted>" +
            value.substring(value.length - UNREDACTED_LENGTH));
    }
    else {
        return value;
    }
}
//# sourceMappingURL=utils.js.map