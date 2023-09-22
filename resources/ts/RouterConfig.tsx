import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { LoginPage } from "./pages/Auth/LoginPage";
import { RegisterPage } from "./pages/Auth/RegisterPage";
import { HomePage } from "./pages/HomePage";
import { TeamPage } from "./pages/TeamPage";
import { GamesPage } from "./pages/GamesPage";
import { LeaguePage } from "./pages/LeaguePage";
import { StandingsPage } from "./pages/StandingsPage";
import { SidebarProvider } from "./context/SidebarContext";
import { PlayerPage } from "./pages/PlayerPage";
import { DatePickerProvider } from "./context/DatePickerContext";
import ProvideAuth, { PrivateRoute } from "./context/AuthContext";

export const RouterConfig = () => {
    return (
        <ProvideAuth>
            <DatePickerProvider>
                <SidebarProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<TopPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route
                                path="/register"
                                element={<RegisterPage />}
                            />
                            <Route
                                path="/home"
                                element={
                                    <PrivateRoute
                                        component={<HomePage />}
                                        redirect="/login"
                                    />
                                }
                            />
                            <Route
                                path="/team/:id/season/:season"
                                element={<TeamPage />}
                            />
                            <Route
                                path="/standings/league/:id/season/:season"
                                element={<StandingsPage />}
                            />
                            <Route
                                path="/games/:gameId/leagues/:leagueId/seasons/:season"
                                element={<GamesPage />}
                            />
                            <Route
                                path="/league/:id/season/:season"
                                element={<LeaguePage />}
                            />
                            <Route
                                path="/player/:id/season/:season"
                                element={<PlayerPage />}
                            />
                        </Routes>
                    </BrowserRouter>
                </SidebarProvider>
            </DatePickerProvider>
        </ProvideAuth>
    );
};
