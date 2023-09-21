import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddPlusIcon } from "../../atoms/AddIPlusIcon";
import { useSidebarContext } from "../../../context/SidebarContext";
import { HeaderLogo } from "../../molecules/HeaderLogo";
import { ModalFavorite } from "../Modal/ModalFavorite";
import { FavoriteTeams } from "./FavoriteTeams";
import { FavoriteLeagues } from "./FavoriteLeagues";
import { useLeagueAPI } from "../../../hooks/useLeagueApi";
import { StandingLeagues } from "./StandingLeagues";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { ListItemIcon } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import PortraitIcon from "@mui/icons-material/Portrait";
import LockIcon from "@mui/icons-material/Lock";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import Modal from "@mui/material/Modal";
import { useUserApi } from "../../../hooks/useUserApi";
import { ModalAccount } from "../Modal/ModalAccount";
import { ModalLogout } from "../Modal/ModalLogout";
import { ModalDeleteAccount } from "../Modal/ModalDeleteAccount";

export const SideBar = () => {
    const { isSidebarOpen, toggleSidebar } = useSidebarContext();

    const { leagues } = useLeagueAPI();

    const { user } = useUserApi();

    const [openFavoriteTeam, setOpenFavoriteTeam] = useState(true);

    const [openFavoriteLeague, setOpenFavoriteLeague] = useState(true);

    const [openStandings, setOpenStandings] = useState(false);

    const [openAccount, setOpenAccount] = useState(false);

    // お気に入り追加モーダルの状態を管理
    const [openFavoriteModal, setOpenFavoriteModal] = useState(false);

    // アカウント情報モーダルの状態を管理
    const [openAccountModal, setOpenAccountModal] = useState(false);

    // パスワード変更モーダルの状態を管理
    const [openPasswordChangeModal, setOpenPasswordChangeModal] =
        useState(false);

    // アカウント削除モーダルの状態を管理
    const [openAccountDeletionModal, setOpenAccountDeletionModal] =
        useState(false);

    // ログアウトモーダルの状態を管理
    const [openLogoutModal, setOpenLogoutModal] = useState(false);

    const handleOpenFavoriteTeamClick = () => {
        setOpenFavoriteTeam(!openFavoriteTeam);
    };

    const handleOpenFavoriteLeagueClick = () => {
        setOpenFavoriteLeague(!openFavoriteLeague);
    };

    const handleOpenStandingsClick = () => {
        setOpenStandings(!openStandings);
    };

    const handleOpenAccountClick = () => {
        setOpenAccount(!openAccount);
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

    // アカウント情報モーダルを開くハンドラー
    const handleOpenAccountModal = () => {
        setOpenAccountModal(true);
    };

    // アカウント情報モーダルを閉じるハンドラー
    const handleCloseAccountModal = () => {
        setOpenAccountModal(false);
    };

    // パスワード変更モーダルを開くハンドラー
    const handleOpenPasswordChangeModal = () => {
        setOpenPasswordChangeModal(true);
    };

    // パスワード変更モーダルを閉じるハンドラー
    const handleClosePasswordChangeModal = () => {
        setOpenPasswordChangeModal(false);
    };

    // アカウント削除モーダルを開くハンドラー
    const handleOpenAccountDeletionModal = () => {
        setOpenAccountDeletionModal(true);
    };

    // アカウント削除モーダルを閉じるハンドラー
    const handleCloseAccountDeletionModal = () => {
        setOpenAccountDeletionModal(false);
    };

    // ログアウトモーダルを開くハンドラー
    const handleOpenLogoutModal = () => {
        setOpenLogoutModal(true);
    };

    // ログアウトモーダルを閉じるハンドラー
    const handleCloseLogoutModal = () => {
        setOpenLogoutModal(false);
    };

    const navigate = useNavigate();

    const handleHomeClick = () => {
        toggleSidebar();
        navigate("/home");
    };

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
                <div className="flex items-center mt-2 ml-4">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, color: "#EEEEEE" }}
                        onClick={toggleSidebar}
                    >
                        <MenuIcon />
                    </IconButton>
                    <HeaderLogo />
                </div>
                <div className="ml-4 mr-4 mt-2 border-b border-[#1d2233]"></div>
                <Box sx={{ overflow: "auto" }}>
                    <List className="text-[#EEEEEE]">
                        <ListItemButton onClick={handleOpenFavoriteModal}>
                            <ListItemIcon>
                                <AddPlusIcon style={"text-[#EEEEEE]"} />
                            </ListItemIcon>
                            <span>お気に入り追加</span>
                        </ListItemButton>
                        <ListItemButton onClick={handleOpenFavoriteTeamClick}>
                            <ListItemIcon>
                                <SportsSoccerIcon className="text-[#EEEEEE]" />
                            </ListItemIcon>
                            <ListItemText primary="マイチーム" />
                            {openFavoriteTeam ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse
                            in={openFavoriteTeam}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List
                                component="div"
                                sx={{ pl: 3, pr: 2 }}
                                disablePadding
                            >
                                <FavoriteTeams />
                            </List>
                        </Collapse>
                        <ListItemButton onClick={handleOpenFavoriteLeagueClick}>
                            <ListItemIcon>
                                <SportsSoccerIcon className="text-[#EEEEEE]" />
                            </ListItemIcon>
                            <ListItemText primary="マイリーグ" />
                            {openFavoriteLeague ? (
                                <ExpandLess />
                            ) : (
                                <ExpandMore />
                            )}
                        </ListItemButton>
                        <Collapse
                            in={openFavoriteLeague}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List
                                component="div"
                                sx={{ pl: 3, pr: 2 }}
                                disablePadding
                            >
                                <FavoriteLeagues />
                            </List>
                        </Collapse>
                        <ListItemButton onClick={handleOpenStandingsClick}>
                            <ListItemIcon>
                                <EmojiEventsIcon className="text-[#EEEEEE]" />
                            </ListItemIcon>
                            <ListItemText primary="順位表一覧" />
                            {openStandings ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse
                            in={openStandings}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List
                                component="div"
                                sx={{ pl: 3, pr: 2 }}
                                disablePadding
                            >
                                <StandingLeagues leagues={leagues} />
                            </List>
                        </Collapse>
                        <div className="ml-4 mr-4 mt-2 mb-2 border-b border-[#1d2233]"></div>
                        <ListItemButton onClick={handleHomeClick}>
                            <ListItemIcon>
                                <HomeIcon className="text-[#EEEEEE]" />
                            </ListItemIcon>
                            <ListItemText primary="ホーム" />
                        </ListItemButton>
                        <ListItemButton onClick={handleOpenAccountClick}>
                            <ListItemIcon>
                                <ManageAccountsIcon className="text-[#EEEEEE]" />
                            </ListItemIcon>
                            <ListItemText primary="アカウント" />
                            {openAccount ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openAccount} timeout="auto" unmountOnExit>
                            <List
                                component="div"
                                sx={{ pl: 3, pr: 2 }}
                                disablePadding
                            >
                                <ListItemButton
                                    onClick={handleOpenAccountModal}
                                >
                                    <ListItemIcon>
                                        <PortraitIcon className="text-[#EEEEEE]" />
                                    </ListItemIcon>
                                    <ListItemText primary="アカウント情報" />
                                </ListItemButton>
                                <ListItemButton
                                    onClick={handleOpenPasswordChangeModal}
                                >
                                    <ListItemIcon>
                                        <LockIcon className="text-[#EEEEEE]" />
                                    </ListItemIcon>
                                    <ListItemText primary="パスワード変更" />
                                </ListItemButton>
                                <ListItemButton
                                    onClick={handleOpenAccountDeletionModal}
                                >
                                    <ListItemIcon>
                                        <PersonOffIcon className="text-[#EEEEEE]" />
                                    </ListItemIcon>
                                    <ListItemText primary="アカウント削除" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton onClick={handleOpenLogoutModal}>
                            <ListItemIcon>
                                <LogoutIcon className="text-red-600" />
                            </ListItemIcon>
                            <ListItemText
                                primary="ログアウト"
                                className="text-red-600"
                            />
                        </ListItemButton>
                    </List>
                </Box>
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
            {/* アカウント情報モーダル */}
            <Modal
                open={openAccountModal}
                onClose={handleCloseAccountModal}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="border-2 border-[#111931] bg-[#010A0F] h-[16rem] sm:h-[16rem] md:h-[16rem] lg:h-[16rem] w-[21rem] sm:w-[33rem] md:w-[34rem] lg:w-[34rem]">
                    <ModalAccount user={user} close={handleCloseAccountModal} />
                </div>
            </Modal>
            {/* パスワード変更モーダル */}
            <Modal
                open={openPasswordChangeModal}
                onClose={handleClosePasswordChangeModal}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="border-2 border-[#111931] bg-[#010A0F] h-[16rem] sm:h-[16rem] md:h-[16rem] lg:h-[16rem] w-[21rem] sm:w-[33rem] md:w-[34rem] lg:w-[34rem]">
                    <button
                        onClick={handleClosePasswordChangeModal}
                        className="text-white"
                    >
                        閉じる
                    </button>
                </div>
            </Modal>
            {/* アカウント削除モーダル */}
            <Modal
                open={openAccountDeletionModal}
                onClose={handleCloseAccountDeletionModal}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="border-2 border-[#111931] bg-[#010A0F] h-[16rem] sm:h-[16rem] md:h-[16rem] lg:h-[16rem] w-[21rem] sm:w-[33rem] md:w-[34rem] lg:w-[34rem] flex justify-center items-center">
                    <ModalDeleteAccount
                        close={handleCloseAccountDeletionModal}
                        user={user}
                    />
                </div>
            </Modal>
            {/* ログアウトモーダル */}
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
