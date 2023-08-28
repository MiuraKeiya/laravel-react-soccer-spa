import { AddPlusIcon } from "../../atoms/AddIPlusIcon";
import { useSidebarContext } from "../../../context/SidebarContext";
import { HeaderLogo } from "../../molecules/HeaderLogo";
import { ModalFavorite } from "../Modal/ModalFavorite";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItemText } from "@mui/material";
import { useModal } from "react-hooks-use-modal";

export const SideBar = () => {
    const { isSidebarOpen, toggleSidebar } = useSidebarContext();

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
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        <ListItemButton onClick={handleOpenModal}>
                            <AddPlusIcon style={"text-[#EEEEEE]"} />
                            <span className="text-[#EEEEEE]">
                                お気に入り追加
                            </span>
                        </ListItemButton>
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
