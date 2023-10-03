import { createContext, useContext, useState } from "react";

const SidebarContext = createContext([]);

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
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

    const value = {
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
