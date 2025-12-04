import type Link from "next/link";
import type { NextRequest } from "next/server";
type WithPathPatternWildcard<T> = `${T & string}(.*)`;
type NextTypedRoute<T = Parameters<typeof Link>["0"]["href"]> = T extends string ? T : never;
type Autocomplete<U extends T, T = string> = U | (T & Record<never, never>);
type RouteMatcherWithNextTypedRoutes = Autocomplete<WithPathPatternWildcard<NextTypedRoute> | NextTypedRoute>;
/**
 * See {@link createRouteMatcher} for more information.
 */
export type RouteMatcherParam = Array<RegExp | RouteMatcherWithNextTypedRoutes> | RegExp | RouteMatcherWithNextTypedRoutes | ((req: NextRequest) => boolean);
/**
 * Returns a function that accepts a `Request` object and returns whether the request matches the list of
 * predefined routes that can be passed in as the first argument.
 *
 * You can use glob patterns to match multiple routes or a function to match against the request object.
 * Path patterns and limited regular expressions are supported.
 * For more information, see: https://www.npmjs.com/package/path-to-regexp/v/6.3.0
 */
export declare const createRouteMatcher: (routes: RouteMatcherParam) => (req: NextRequest) => boolean;
export {};
//# sourceMappingURL=routeMatcher.d.ts.map