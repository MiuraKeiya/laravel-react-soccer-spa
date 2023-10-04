import { useSidebarContext } from "../../../context/SidebarContext";
import { SideBarMenu } from "./SideBarMenu";
import { ModalFavorite } from "../Modal/ModalFavorite";
import config from "../../../config";
import { findMaxSeason } from "../../../functions/Utils";
import Drawer from "@mui/material/Drawer";
import Modal from "@mui/material/Modal";
export const SideBar = () => {
    // サイドバーとお気に入りモーダルの開閉状態を管理
    const {
        isSidebarOpen,
        toggleSidebar,
        handleOpenFavoriteModal,
        handleCloseFavoriteModal,
        openFavoriteModal,
    } = useSidebarContext();

    // 最大のシーズンを取得
    const maxSeason = findMaxSeason(config);

    return (
        <>
            <Drawer
                sx={{
                    width: 250,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: 260,
                        backgroundColor: "#111931",
                    },
                }}
                onClose={toggleSidebar}
                anchor="left"
                open={isSidebarOpen}
            >
                <SideBarMenu
                    toggleSidebar={toggleSidebar}
                    handleOpenFavoriteModal={handleOpenFavoriteModal}
                    maxSeason={maxSeason}
                />
            </Drawer>

            {/** お気に入り追加モーダル */}
            <Modal
                open={openFavoriteModal}
                onClose={handleCloseFavoriteModal}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="border-2 border-[#111931] bg-[#010A0F] h-[33rem] sm:h-[34rem] md:h-[35rem] lg:h-[35rem] w-[20rem] sm:w-[33rem] md:w-[34rem] lg:w-[34rem] overflow-y-scroll">
                    <ModalFavorite onClick={handleCloseFavoriteModal} />
                </div>
            </Modal>
        </>
    );
};
