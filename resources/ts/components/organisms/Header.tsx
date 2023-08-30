import { HeaderLogo } from "../molecules/HeaderLogo";
import { ModalFavorite } from "./Modal/ModalFavorite";
import { useSidebarContext } from "../../context/SidebarContext";
import { useModal } from "react-hooks-use-modal";
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

    //　モーダルオプション
    const [Modal, open, close] = useModal("app", {
        preventScroll: true,
        focusTrapOptions: {
            clickOutsideDeactivates: true,
        },
    });

    const handleOpenModal = () => {
        open();
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
                            sx={{ mr: 2 }}
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
                        <Button onClick={handleOpenModal}>
                            <SearchIcon className="text-white" />
                        </Button>
                        <Button>
                            <span className="text-white">Logout</span>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Modal>
                <div className="border-2 border-[#111931] bg-[#010A0F] h-[33rem] sm:h-[34rem] md:h-[35rem] lg:h-[35rem] w-[20rem] sm:w-[33rem] md:w-[34rem] lg:w-[34rem] overflow-y-scroll">
                    <ModalFavorite onClick={close} />
                </div>
            </Modal>
        </>
    );
};
