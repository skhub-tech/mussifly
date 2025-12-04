import "server-only";
import { NextRequest } from "next/server";
export declare function proxyAuthActionToConvex(request: NextRequest, options: {
    convexUrl?: string;
    verbose?: boolean;
    cookieConfig?: {
        maxAge: number | null;
    };
}): Promise<Response>;
export declare function shouldProxyAuthAction(request: NextRequest, apiRoute: string): boolean;
//# sourceMappingURL=proxy.d.ts.map