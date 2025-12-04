import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
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
export declare function ConvexAuthNextjsProvider(props: {
    /**
     * Your [`ConvexReactClient`](https://docs.convex.dev/api/classes/react.ConvexReactClient).
     */
    client: ConvexReactClient;
    /**
     * Children components can call Convex hooks
     * and [useAuthActions](https://labs.convex.dev/auth/api_reference/react#useauthactions).
     */
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map