import { NextRequest, NextResponse } from "next/server";
import type { ConvexAuthNextjsMiddlewareOptions } from "./index.js";
export declare function handleAuthenticationInRequest(request: NextRequest, options: ConvexAuthNextjsMiddlewareOptions): Promise<{
    kind: "redirect";
    response: NextResponse;
} | {
    kind: "refreshTokens";
    refreshTokens: {
        token: string;
        refreshToken: string;
    } | null | undefined;
}>;
//# sourceMappingURL=request.d.ts.map