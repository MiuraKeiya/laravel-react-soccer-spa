import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "./components/pages/Top";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";

export const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};
