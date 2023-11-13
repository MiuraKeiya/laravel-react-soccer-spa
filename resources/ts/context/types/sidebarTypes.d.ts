import { ReactNode } from "react";

type SidebarContextType = {
    isSidebarOpen: boolean;
    openFavoriteModal: boolean;
    toggleSidebar: () => void;
    handleOpenFavoriteModal: () => void;
    handleCloseFavoriteModal: () => void;
};

type SidebarProviderProps = {
    children: ReactNode;
};
