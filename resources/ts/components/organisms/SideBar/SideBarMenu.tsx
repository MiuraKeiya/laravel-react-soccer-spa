import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderLogo } from "../../molecules/HeaderLogo";
import { AddPlusIcon } from "../../atoms/AddIPlusIcon";
import { FavoriteTeams } from "./FavoriteTeams";
import { FavoriteLeagues } from "./FavoriteLeagues";
import { StandingLeagues } from "./StandingLeagues";
import { useGetFavoriteApi } from "../../../hooks/useGetFavoriteApi";
import { useLeagueAPI } from "../../../hooks/useLeagueApi";
import { ModalAccount } from "../Modal/ModalAccount";
import { ModalLogout } from "../Modal/ModalLogout";
import { ModalDeleteAccount } from "../Modal/ModalDeleteAccount";
import { ModalPassword } from "../Modal/ModalPassword";
import { useFavoriteApi } from "../../../hooks/useFavoriteApi";
import { useErrors } from "../../../hooks/useErrors";
import { Page } from "../../../Page";
import { useGetAuthUserApi } from "../../../hooks/useGetAuthUserApi";
import { ListItemIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PortraitIcon from "@mui/icons-material/Portrait";
import LockIcon from "@mui/icons-material/Lock";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

export const SideBarMenu = ({
    toggleSidebar,
    handleOpenFavoriteModal,
    maxSeason,
}) => {
    // 選択したリーグをお気に入りから削除
    const [addLeagueFavorite, deleteLeagueFavorite, deleteLeagueError] =
        useFavoriteApi("leagues");

    // 選択したチームをお気に入りから削除
    const [addTeamFavorite, deleteTeamFavorite, deleteTeamError] =
        useFavoriteApi("teams");

    // お気に入りリーグ一覧
    const [
        favoriteLeague,
        favoriteLeagueLoading,
        favoriteLeagueError,
        setFavoritesLeague,
    ] = useGetFavoriteApi("leagues");

    // お気に入りチーム一覧
    const [
        favoriteTeam,
        favoriteTeamLoading,
        favoriteTeamError,
        setFavoritesTeam,
    ] = useGetFavoriteApi("teams");

    // リーグ一覧
    const [leagues, leaguesLoading, leaguesError] = useLeagueAPI();

    // 認証ユーザー情報
    const [user, userLoading, userError] = useGetAuthUserApi();

    const [openFavoriteTeam, setOpenFavoriteTeam] = useState(true);

    const [openFavoriteLeague, setOpenFavoriteLeague] = useState(true);

    const [openStandings, setOpenStandings] = useState(false);

    const [openAccount, setOpenAccount] = useState(false);

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

    const navigate = useNavigate();

    const handleHomeClick = () => {
        toggleSidebar();
        navigate("/home");
    };

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

    // エラーをまとめる
    const errors = useErrors(
        deleteLeagueError,
        deleteTeamError,
        favoriteLeagueError,
        favoriteTeamError,
        leaguesError,
        userError
    );

    return (
        <Page error={errors}>
            <div className="flex items-center mt-2 ml-4">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{
                        mr: 2,
                        color: "#EEEEEE",
                        "&:hover": {
                            backgroundColor: "#3d4e81",
                        },
                    }}
                    onClick={toggleSidebar}
                >
                    <MenuIcon />
                </IconButton>
                <HeaderLogo />
            </div>
            <div className="ml-4 mr-4 mt-2 border-b border-[#1d2233]"></div>
            <Box sx={{ overflow: "auto" }}>
                <List className="text-[#EEEEEE]">
                    <ListItemButton
                        onClick={handleOpenFavoriteModal}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#3d4e81",
                            },
                        }}
                    >
                        <ListItemIcon>
                            <AddPlusIcon style={"text-[#EEEEEE]"} />
                        </ListItemIcon>
                        <ListItemText primary="お気に入り追加" />
                    </ListItemButton>
                    <ListItemButton
                        onClick={handleOpenFavoriteTeamClick}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#3d4e81",
                            },
                        }}
                    >
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
                            <FavoriteTeams
                                favorites={favoriteTeam}
                                loading={favoriteTeamLoading}
                                deleteFavorite={deleteTeamFavorite}
                                setFavoritesTeam={setFavoritesTeam}
                                maxSeason={maxSeason}
                                toggleSidebar={toggleSidebar}
                            />
                        </List>
                    </Collapse>
                    <ListItemButton
                        onClick={handleOpenFavoriteLeagueClick}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#3d4e81",
                            },
                        }}
                    >
                        <ListItemIcon>
                            <SportsSoccerIcon className="text-[#EEEEEE]" />
                        </ListItemIcon>
                        <ListItemText primary="マイリーグ" />
                        {openFavoriteLeague ? <ExpandLess /> : <ExpandMore />}
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
                            <FavoriteLeagues
                                favorites={favoriteLeague}
                                loading={favoriteLeagueLoading}
                                deleteFavorite={deleteLeagueFavorite}
                                setFavoritesLeague={setFavoritesLeague}
                                maxSeason={maxSeason}
                                toggleSidebar={toggleSidebar}
                            />
                        </List>
                    </Collapse>
                    <ListItemButton
                        onClick={handleOpenStandingsClick}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#3d4e81",
                            },
                        }}
                    >
                        <ListItemIcon>
                            <EmojiEventsIcon className="text-[#EEEEEE]" />
                        </ListItemIcon>
                        <ListItemText primary="順位表一覧" />
                        {openStandings ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openStandings} timeout="auto" unmountOnExit>
                        <List
                            component="div"
                            sx={{ pl: 3, pr: 2 }}
                            disablePadding
                        >
                            <StandingLeagues
                                leagues={leagues}
                                loading={leaguesLoading}
                                maxSeason={maxSeason}
                                toggleSidebar={toggleSidebar}
                            />
                        </List>
                    </Collapse>
                    <div className="ml-4 mr-4 mt-2 mb-2 border-b border-[#1d2233]"></div>
                    <ListItemButton
                        onClick={handleHomeClick}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#3d4e81",
                            },
                        }}
                    >
                        <ListItemIcon>
                            <HomeIcon className="text-[#EEEEEE]" />
                        </ListItemIcon>
                        <ListItemText primary="ホーム" />
                    </ListItemButton>
                    <ListItemButton
                        onClick={handleOpenAccountClick}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#3d4e81",
                            },
                        }}
                    >
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
                                sx={{
                                    "&:hover": {
                                        backgroundColor: "#3d4e81",
                                    },
                                }}
                            >
                                <ListItemIcon>
                                    <PortraitIcon className="text-[#EEEEEE]" />
                                </ListItemIcon>
                                <ListItemText primary="アカウント情報" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={handleOpenPasswordChangeModal}
                                sx={{
                                    "&:hover": {
                                        backgroundColor: "#3d4e81",
                                    },
                                }}
                            >
                                <ListItemIcon>
                                    <LockIcon className="text-[#EEEEEE]" />
                                </ListItemIcon>
                                <ListItemText primary="パスワード変更" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={handleOpenAccountDeletionModal}
                                sx={{
                                    "&:hover": {
                                        backgroundColor: "#3d4e81",
                                    },
                                }}
                            >
                                <ListItemIcon>
                                    <PersonOffIcon className="text-[#EEEEEE]" />
                                </ListItemIcon>
                                <ListItemText primary="アカウント削除" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton
                        onClick={handleOpenLogoutModal}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#3d4e81",
                            },
                        }}
                    >
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
                    <ModalAccount
                        close={handleCloseAccountModal}
                        user={user}
                        loading={userLoading}
                    />
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
                <div className="border-2 border-[#111931] bg-[#010A0F] w-[20rem] sm:w-[28rem] md:w-[28rem] lg:w-[28rem]">
                    <div className="text-right">
                        <IconButton
                            color="inherit"
                            aria-label="close"
                            onClick={handleClosePasswordChangeModal}
                            sx={{ color: "#C8CDCD" }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <ModalPassword />
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
                <div className="border-2 border-[#111931] bg-[#010A0F] w-[21rem] sm:w-[33rem] md:w-[34rem] lg:w-[34rem] flex justify-center items-center">
                    <ModalDeleteAccount
                        close={handleCloseAccountDeletionModal}
                        user={user}
                        userLoading={userLoading}
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
        </Page>
    );
};
