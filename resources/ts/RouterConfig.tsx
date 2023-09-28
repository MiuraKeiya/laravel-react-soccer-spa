import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { LoginPage } from "./pages/Auth/LoginPage";
import { RegisterPage } from "./pages/Auth/RegisterPage";
import { HomePage } from "./pages/HomePage";
import { TeamPage } from "./pages/TeamPage";
import { GamesPage } from "./pages/GamesPage";
import { LeaguePage } from "./pages/LeaguePage";
import { StandingsPage } from "./pages/StandingsPage";
import { PlayerPage } from "./pages/PlayerPage";
import { ForgotPasswordPage } from "./pages/Auth/ForgotPasswordPage";
import { ResetPasswordPage } from "./pages/Auth/ResetPasswordPage";
import { PasswordSentPage } from "./pages/Auth/PasswordSentPage";
import { EmailVerificationPage } from "./pages/Auth/EmailVerificationPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CallbackPage } from "./pages/Auth/CallbackPage";
import { PrivateRoute, PublicRoute } from "./context/AuthContext";

export const RouterConfig = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
                path="/"
                element={
                    <PublicRoute component={<TopPage />} redirect="/home" />
                }
            />
            <Route
                path="/login"
                element={
                    <PublicRoute component={<LoginPage />} redirect="/home" />
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
                    <PrivateRoute component={<HomePage />} redirect="/login" />
                }
            />
            <Route
                path="/team/:id/season/:season"
                element={
                    <PrivateRoute component={<TeamPage />} redirect="/login" />
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
                    <PrivateRoute component={<GamesPage />} redirect="/login" />
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
            <Route
                path="/login/google/callback"
                element={
                    <PublicRoute
                        component={<CallbackPage />}
                        redirect="/home"
                    />
                }
            />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
);
