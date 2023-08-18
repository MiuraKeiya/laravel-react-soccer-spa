import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "./pages/Top";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { Home } from "./pages/Home";

export const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};
