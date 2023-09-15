import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { HomePage } from "./pages/HomePage";
import { TeamPage } from "./pages/TeamPage";
import { GamesPage } from "./pages/GamesPage";
import { LeaguePage } from "./pages/LeaguePage";
import { StandingsPage } from "./pages/StandingsPage";
import { SidebarProvider } from "./context/SidebarContext";

export const RouterConfig = () => {
    return (
        <SidebarProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TopPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route
                        path="/team/:id/season/:season"
                        element={<TeamPage />}
                    />
                    <Route path="/standings/:id" element={<StandingsPage />} />
                    <Route
                        path="/games/:gameId/leagues/:leagueId/seasons/:season"
                        element={<GamesPage />}
                    />
                    <Route
                        path="/league/:id/season/:season"
                        element={<LeaguePage />}
                    />
                </Routes>
            </BrowserRouter>
        </SidebarProvider>
    );
};
