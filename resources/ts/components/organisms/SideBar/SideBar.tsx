import { useState } from "react";
import { AddPlusIcon } from "../../atoms/AddIPlusIcon";
import { useSidebarContext } from "../../../context/SidebarContext";
import { HeaderLogo } from "../../molecules/HeaderLogo";
import { ModalFavorite } from "../Modal/ModalFavorite";
import { FavoriteTeams } from "./FavoriteTeams";
import { FavoriteLeagues } from "./FavoriteLeagues";
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
import { ListItemIcon } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { useModal } from "react-hooks-use-modal";

export const SideBar = () => {
    const { isSidebarOpen, toggleSidebar } = useSidebarContext();

    const [openFavoriteTeam, setOpenFavoriteTeam] = useState(true);
    const [openFavoriteLeague, setOpenFavoriteLeague] = useState(true);

    const handleOpenFavoriteTeamClick = () => {
        setOpenFavoriteTeam(!openFavoriteTeam);
    };

    const handleOpenFavoriteLeagueClick = () => {
        setOpenFavoriteLeague(!openFavoriteLeague);
    };

    const handleOpenModal = () => {
        toggleSidebar();
        open();
    };

    //　モーダルオプション
    const [Modal, open, close] = useModal("app", {
        preventScroll: true,
        focusTrapOptions: {
            clickOutsideDeactivates: true,
        },
    });

    return (
        <>
            <Drawer
                sx={{
                    width: 200,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: 200,
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
                <Box sx={{ overflow: "auto" }}>
                    <List className="text-[#EEEEEE]">
                        <ListItemButton onClick={handleOpenModal}>
                            <AddPlusIcon style={"text-[#EEEEEE]"} />
                            <span className="text-[#EEEEEE]">
                                お気に入り追加
                            </span>
                        </ListItemButton>
                        <ListItemButton onClick={handleOpenFavoriteTeamClick}>
                            <ListItemIcon>
                                <SportsSoccerIcon className="text-[#EEEEEE]" />
                            </ListItemIcon>
                            <ListItemText primary="MyTeam" />
                            {openFavoriteTeam ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse
                            in={openFavoriteTeam}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List
                                component="div"
                                sx={{ pl: 3, pr: 1 }}
                                disablePadding
                            >
                                <FavoriteTeams />
                            </List>
                        </Collapse>
                        <ListItemButton onClick={handleOpenFavoriteLeagueClick}>
                            <ListItemIcon>
                                <SportsSoccerIcon className="text-[#EEEEEE]" />
                            </ListItemIcon>
                            <ListItemText primary="MyLeague" />
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
                                sx={{ pl: 3, pr: 1 }}
                                disablePadding
                            >
                                <FavoriteLeagues />
                            </List>
                        </Collapse>
                    </List>
                </Box>
            </Drawer>
            <Modal>
                <div className="border-2 border-[#111931] bg-[#010A0F] h-[33rem] sm:h-[34rem] md:h-[35rem] lg:h-[35rem] w-[20rem] sm:w-[33rem] md:w-[34rem] lg:w-[34rem] overflow-y-scroll">
                    <ModalFavorite onClick={close} />
                </div>
            </Modal>
        </>
    );
};
