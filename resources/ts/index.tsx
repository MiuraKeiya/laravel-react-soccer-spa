import { createRoot } from "react-dom/client";
import { RouterConfig } from "./RouterConfig";
import { RouterProvider } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";
import ProvideAuth from "./context/AuthContext";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
    <ProvideAuth>
        <SidebarProvider>
            <RouterProvider router={RouterConfig} />
        </SidebarProvider>
    </ProvideAuth>
);
