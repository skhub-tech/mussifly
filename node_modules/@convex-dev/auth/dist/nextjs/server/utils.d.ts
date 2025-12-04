import { NextRequest, NextResponse } from "next/server";
import { NextjsOptions } from "convex/nextjs";
export declare function jsonResponse(body: any, status?: number): NextResponse<unknown>;
export declare function setAuthCookies(response: NextResponse, tokens: {
    token: string;
    refreshToken: string;
} | null, cookieConfig: {
    maxAge: number | null;
}): Promise<void>;
/**
 * Forward on any auth cookies in the request to the next handler.
 *
 * @param request
 * @param tokens
 */
export declare function setAuthCookiesInMiddleware(request: NextRequest, tokens: {
    token: string;
    refreshToken: string;
} | null): Promise<void>;
export declare function isCorsRequest(request: NextRequest): boolean;
export declare function logVerbose(message: string, verbose: boolean): void;
export declare function getRedactedMessage(value: string): string;
/**
 * @param options - a subset of ConvexAuthNextjsMiddlewareOptions
 * @returns NextjsOptions
 */
export declare function getConvexNextjsOptions(options: {
    convexUrl?: string;
}): NextjsOptions;
//# sourceMappingURL=utils.d.ts.map