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
import { ForgotPasswordPage } from "./pages/Auth/ForgotPasswordPage";
import { ResetPasswordPage } from "./pages/Auth/ResetPasswordPage";
import { PasswordSentPage } from "./pages/Auth/PasswordSentPage";
import { EmailVerificationPage } from "./pages/Auth/EmailVerificationPage";
import { DatePickerProvider } from "./context/DatePickerContext";
import ProvideAuth, { PrivateRoute, PublicRoute } from "./context/AuthContext";

export const RouterConfig = () => {
    return (
        <ProvideAuth>
            <DatePickerProvider>
                <SidebarProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <PublicRoute
                                        component={<TopPage />}
                                        redirect="/home"
                                    />
                                }
                            />
                            <Route
                                path="/login"
                                element={
                                    <PublicRoute
                                        component={<LoginPage />}
                                        redirect="/home"
                                    />
                                }
                            />
                            <Route
                                path="/register"
                                element={
                                    <PublicRoute
                                        component={<RegisterPage />}
                                        redirect="/home"
                                    />
                                }
                            />
                            <Route
                                path="/forgot-password"
                                element={
                                    <PublicRoute
                                        component={<ForgotPasswordPage />}
                                        redirect="/home"
                                    />
                                }
                            />
                            <Route
                                path="/reset-password"
                                element={
                                    <PublicRoute
                                        component={<ResetPasswordPage />}
                                        redirect="/home"
                                    />
                                }
                            />
                            <Route
                                path="/password-sent"
                                element={
                                    <PublicRoute
                                        component={<PasswordSentPage />}
                                        redirect="/home"
                                    />
                                }
                            />
                            <Route
                                path="/email-sent"
                                element={
                                    <PrivateRoute
                                        component={<EmailVerificationPage />}
                                        redirect="/login"
                                    />
                                }
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
                                element={
                                    <PrivateRoute
                                        component={<TeamPage />}
                                        redirect="/login"
                                    />
                                }
                            />
                            <Route
                                path="/standings/league/:id/season/:season"
                                element={
                                    <PrivateRoute
                                        component={<StandingsPage />}
                                        redirect="/login"
                                    />
                                }
                            />
                            <Route
                                path="/games/:gameId/leagues/:leagueId/seasons/:season"
                                element={
                                    <PrivateRoute
                                        component={<GamesPage />}
                                        redirect="/login"
                                    />
                                }
                            />
                            <Route
                                path="/league/:id/season/:season"
                                element={
                                    <PrivateRoute
                                        component={<LeaguePage />}
                                        redirect="/login"
                                    />
                                }
                            />
                            <Route
                                path="/player/:id/season/:season"
                                element={
                                    <PrivateRoute
                                        component={<PlayerPage />}
                                        redirect="/login"
                                    />
                                }
                            />
                        </Routes>
                    </BrowserRouter>
                </SidebarProvider>
            </DatePickerProvider>
        </ProvideAuth>
    );
};
