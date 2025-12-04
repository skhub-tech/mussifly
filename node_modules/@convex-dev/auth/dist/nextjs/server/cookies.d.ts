import { NextRequest, NextResponse } from "next/server";
export declare function getRequestCookies(): Promise<{
    readonly token: string | null;
    readonly refreshToken: string | null;
    readonly verifier: string | null;
}>;
export declare function getRequestCookiesInMiddleware(request: NextRequest): Promise<{
    token: string | null;
    refreshToken: string | null;
    verifier: string | null;
}>;
export declare function getResponseCookies(response: NextResponse, cookieConfig: {
    maxAge: number | null;
}): Promise<{
    token: string | null;
    refreshToken: string | null;
    verifier: string | null;
}>;
//# sourceMappingURL=cookies.d.ts.map