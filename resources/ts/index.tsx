import { createRoot } from "react-dom/client";
import { RouterConfig } from "./RouterConfig";
import { RouterProvider } from "react-router-dom";
import { DatePickerProvider } from "./context/DatePickerContext";
import { SidebarProvider } from "./context/SidebarContext";
import ProvideAuth from "./context/AuthContext";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
    <ProvideAuth>
        <DatePickerProvider>
            <SidebarProvider>
                <RouterProvider router={RouterConfig} />
            </SidebarProvider>
        </DatePickerProvider>
    </ProvideAuth>
);
