import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { HomePage } from "./pages/HomePage";
import { GamesDateProvider } from "./providers/GamesDateContext";

export const RouterConfig = () => {
    return (
        <GamesDateProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TopPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </GamesDateProvider>
    );
};
