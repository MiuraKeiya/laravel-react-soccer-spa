import { useSidebarContext } from "../../../context/SidebarContext";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { ListItemText } from "@mui/material";

export const SideBar = () => {
    const { isSidebarOpen, toggleSidebar } = useSidebarContext();

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
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        <ListItemButton>
                            <ListItemText
                                sx={{ my: 0 }}
                                primary="home"
                                primaryTypographyProps={{
                                    fontSize: 18,
                                    fontWeight: "medium",
                                    letterSpacing: 0,
                                }}
                            ></ListItemText>
                            <ListItem />
                        </ListItemButton>
                        <ListItem>
                            <div className="text-white">sadsad</div>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};
