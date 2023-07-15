import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FixtureResultProvider } from "./provider/FixtureResultProvider";
import { DatePickerProvider } from "./provider/DatePickerProvider";
import { MatchDetailsProvider } from "./provider/MatchDetailsProvider";
import { Top } from "./components/pages/Top";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { Home } from "./components/pages/Home";
import { MatchDetails } from "./components/pages/MatchDetails";
import { Player } from "./components/pages/Player";

export const RouterConfig = () => {
    return (
        <FixtureResultProvider>
            <DatePickerProvider>
                <MatchDetailsProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Top />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/home" element={<Home />} />
                            <Route
                                path="/match-details/:fixtureId/:leagueId"
                                element={<MatchDetails />}
                            />
                            <Route
                                path="/player/:playeId"
                                element={<Player />}
                            />
                        </Routes>
                    </BrowserRouter>
                </MatchDetailsProvider>
            </DatePickerProvider>
        </FixtureResultProvider>
    );
};
