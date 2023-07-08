import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FixtureResultProvider } from "./provider/FixtureResultProvider";
import { DatePickerProvider } from "./provider/DatePickerProvider";
import { Top } from "./components/pages/Top";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { Home } from "./components/pages/Home";

export const RouterConfig = () => {
    return (
        <FixtureResultProvider>
            <DatePickerProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Top />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </DatePickerProvider>
        </FixtureResultProvider>
    );
};
