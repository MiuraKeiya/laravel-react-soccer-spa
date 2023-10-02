import { useState } from "react";
import { HeaderLogo } from "../molecules/HeaderLogo";
import { ModalFavorite } from "./Modal/ModalFavorite";
import { useSidebarContext } from "../../context/SidebarContext";
import { ModalLogout } from "./Modal/ModalLogout";
import Modal from "@mui/material/Modal";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
    const { toggleSidebar } = useSidebarContext();

    // お気に入り追加モーダルの状態を管理
    const [openFavoriteModal, setOpenFavoriteModal] = useState(false);

    // ログアウトモーダルの状態を管理
    const [openLogoutModal, setOpenLogoutModal] = useState(false);

    // お気に入り追加のモーダルを開くハンドラー
    const handleOpenFavoriteModal = () => {
        setOpenFavoriteModal(true);
    };

    // お気に入り追加モーダルを閉じるハンドラー
    const handleCloseFavoriteModal = () => {
        setOpenFavoriteModal(false);
    };

    // ログアウトモーダルを開くハンドラー
    const handleOpenLogoutModal = () => {
        setOpenLogoutModal(true);
    };

    // ログアウトモーダルを閉じるハンドラー
    const handleCloseLogoutModal = () => {
        setOpenLogoutModal(false);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    sx={{
                        backgroundColor: "#111931",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{
                                mr: 2,
                                "&:hover": {
                                    backgroundColor: "#3d4e81",
                                },
                            }}
                            onClick={toggleSidebar}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            <HeaderLogo />
                        </Typography>
                        <Button
                            onClick={handleOpenFavoriteModal}
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#3d4e81",
                                },
                            }}
                        >
                            <SearchIcon className="text-white" />
                        </Button>
                        <Button
                            onClick={handleOpenLogoutModal}
                            sx={{
                                ml: "3px",
                                "&:hover": {
                                    backgroundColor: "#3d4e81",
                                },
                            }}
                        >
                            <span className="text-white">ログアウト</span>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Modal
                open={openFavoriteModal}
                onClose={handleCloseFavoriteModal}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="rounded-md border-2 border-[#111931] bg-[#010A0F] h-[33rem] sm:h-[34rem] md:h-[35rem] lg:h-[35rem] w-[20rem] sm:w-[33rem] md:w-[34rem] lg:w-[34rem] overflow-auto">
                    <ModalFavorite onClick={handleCloseFavoriteModal} />
                </div>
            </Modal>
            <Modal
                open={openLogoutModal}
                onClose={handleCloseLogoutModal}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="border-2 border-[#111931] bg-[#010A0F] h-[16rem] sm:h-[16rem] md:h-[16rem] lg:h-[16rem] w-[21rem] sm:w-[33rem] md:w-[34rem] lg:w-[34rem] flex justify-center items-center">
                    <ModalLogout close={handleCloseLogoutModal} />
                </div>
            </Modal>
        </>
    );
};
