"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { ConvexProviderWithAuth } from "convex/react";
import { useAuth } from "../react/client.js";
/**
 * Replace your `ConvexProvider` in a Client Component with this component
 * to enable authentication in your Next.js app.
 *
 * ```tsx
 * "use client";
 *
 * import { ConvexAuthNextjsProvider } from "@convex-dev/auth/nextjs";
 * import { ConvexReactClient } from "convex/react";
 * import { ReactNode } from "react";
 *
 * const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
 *
 * export default function ConvexClientProvider({
 *   children,
 * }: {
 *   children: ReactNode;
 * }) {
 *   return (
 *     <ConvexAuthNextjsProvider client={convex}>
 *       {children}
 *     </ConvexAuthNextjsProvider>
 *   );
 * }
 * ```
 */
export function ConvexAuthNextjsProvider(props) {
    const { client, children } = props;
    return (_jsx(ConvexProviderWithAuth, { client: client, useAuth: useAuth, children: children }));
}
//# sourceMappingURL=index.js.map