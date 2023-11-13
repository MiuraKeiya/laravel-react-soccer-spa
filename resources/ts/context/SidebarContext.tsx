import { createContext, useContext, useState } from "react";
import { SidebarContextType, SidebarProviderProps } from "./types/sidebarTypes";

const SidebarContext = createContext<SidebarContextType | null>(null);

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [openFavoriteModal, setOpenFavoriteModal] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // お気に入り追加のモーダルを開く
    const handleOpenFavoriteModal = () => {
        toggleSidebar();
        setOpenFavoriteModal(true);
    };

    // お気に入り追加モーダルを閉じるハンドラー
    const handleCloseFavoriteModal = () => {
        setOpenFavoriteModal(false);
    };

    const value: SidebarContextType = {
        isSidebarOpen,
        toggleSidebar,
        handleOpenFavoriteModal,
        handleCloseFavoriteModal,
        openFavoriteModal,
    };

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
};
