import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "./components/pages/Top";

export const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Top />} />
            </Routes>
        </BrowserRouter>
    );
};
