import { ReactNode } from "react";
import { AuthClient } from "./clientType.js";
import type { ConvexAuthActionsContext as ConvexAuthActionsContextType, TokenStorage } from "./index.js";
export declare const ConvexAuthActionsContext: import("react").Context<ConvexAuthActionsContextType>;
export declare function useAuth(): {
    isLoading: boolean;
    isAuthenticated: boolean;
    fetchAccessToken: ({ forceRefreshToken, }: {
        forceRefreshToken: boolean;
    }) => Promise<string | null>;
};
export declare const ConvexAuthTokenContext: import("react").Context<string | null>;
export declare function AuthProvider({ client, serverState, onChange, shouldHandleCode, storage, storageNamespace, replaceURL, children, }: {
    client: AuthClient;
    serverState?: {
        _state: {
            token: string | null;
            refreshToken: string | null;
        };
        _timeFetched: number;
    };
    onChange?: () => Promise<unknown>;
    shouldHandleCode?: (() => boolean) | boolean;
    storage: TokenStorage | null;
    storageNamespace: string;
    replaceURL: (relativeUrl: string) => void | Promise<void>;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=client.d.ts.map