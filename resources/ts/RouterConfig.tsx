import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FixtureResultProvider } from "./provider/FixtureResultProvider";
import { DatePickerProvider } from "./provider/DatePickerProvider";
import { MatchDetailsProvider } from "./provider/MatchDetailsProvider";
import { PlayerProvider } from "./provider/PlayerProvider";
import { RankingProvider } from "./provider/RankingProvider";
import { Top } from "./components/pages/Top";
import { Login } from "./components/pages/Auth/Login";
import { Register } from "./components/pages/Register";
import { Home } from "./components/pages/Home";
import { MatchDetails } from "./components/pages/MatchDetails";
import { Player } from "./components/pages/Player";
import { Rankings } from "./components/pages/Rankings";

export const RouterConfig = () => {
    return (
        <FixtureResultProvider>
            <DatePickerProvider>
                <MatchDetailsProvider>
                    <PlayerProvider>
                        <RankingProvider>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<Top />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route
                                        path="/register"
                                        element={<Register />}
                                    />
                                    <Route path="/home" element={<Home />} />
                                    <Route
                                        path="/match-details/:fixtureId/:leagueId/:season"
                                        element={<MatchDetails />}
                                    />
                                    <Route
                                        path="/player/:playeId"
                                        element={<Player />}
                                    />
                                    <Route
                                        path="/ranking/:leagueId/:season"
                                        element={<Rankings />}
                                    />
                                </Routes>
                            </BrowserRouter>
                        </RankingProvider>
                    </PlayerProvider>
                </MatchDetailsProvider>
            </DatePickerProvider>
        </FixtureResultProvider>
    );
};
