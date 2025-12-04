"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMatchersToTimeZone = convertMatchersToTimeZone;
const toTimeZone_js_1 = require("./toTimeZone.js");
const typeguards_js_1 = require("./typeguards.js");
function convertMatcher(matcher, timeZone) {
    if (typeof matcher === "boolean" || typeof matcher === "function") {
        return matcher;
    }
    if (matcher instanceof Date) {
        return (0, toTimeZone_js_1.toTimeZone)(matcher, timeZone);
    }
    if (Array.isArray(matcher)) {
        return matcher.map((value) => value instanceof Date ? (0, toTimeZone_js_1.toTimeZone)(value, timeZone) : value);
    }
    if ((0, typeguards_js_1.isDateRange)(matcher)) {
        return {
            ...matcher,
            from: matcher.from ? (0, toTimeZone_js_1.toTimeZone)(matcher.from, timeZone) : matcher.from,
            to: matcher.to ? (0, toTimeZone_js_1.toTimeZone)(matcher.to, timeZone) : matcher.to,
        };
    }
    if ((0, typeguards_js_1.isDateInterval)(matcher)) {
        return {
            before: (0, toTimeZone_js_1.toTimeZone)(matcher.before, timeZone),
            after: (0, toTimeZone_js_1.toTimeZone)(matcher.after, timeZone),
        };
    }
    if ((0, typeguards_js_1.isDateAfterType)(matcher)) {
        return {
            after: (0, toTimeZone_js_1.toTimeZone)(matcher.after, timeZone),
        };
    }
    if ((0, typeguards_js_1.isDateBeforeType)(matcher)) {
        return {
            before: (0, toTimeZone_js_1.toTimeZone)(matcher.before, timeZone),
        };
    }
    return matcher;
}
/**
 * Convert any {@link Matcher} or array of matchers to the specified time zone.
 *
 * @param matchers - The matcher or matchers to convert.
 * @param timeZone - The target IANA time zone.
 * @returns The converted matcher(s).
 * @group Utilities
 */
function convertMatchersToTimeZone(matchers, timeZone) {
    if (!matchers) {
        return matchers;
    }
    if (Array.isArray(matchers)) {
        return matchers.map((matcher) => convertMatcher(matcher, timeZone));
    }
    return convertMatcher(matchers, timeZone);
}
