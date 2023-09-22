import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import { useAuth } from "../../../context/AuthContext";

export const ModalLogout = ({ close }) => {
    const auth = useAuth();

    const navigate = useNavigate();

    const logout = () => {
        axios.get("/sanctum/csrf-cookie").then(() => {
            auth?.signout().then(() => {
                navigate("/");
            });
        });
    };

    return (
        <div>
            <div className="flex flex-col items-center space-y-3">
                <h1 className="text-[22px] font-bold mx-3 text-white">
                    ログアウト
                </h1>
                <h2 className="text-[#C8CDCD]">
                    ログアウトしてもよろしいですか？
                </h2>
            </div>
            <div className="flex flex-col space-y-4 mt-3">
                <Button
                    variant="outlined"
                    className="w-[25rem]"
                    onClick={logout}
                >
                    はい
                </Button>
                <Button
                    variant="contained"
                    className="w-[25rem]"
                    onClick={close}
                >
                    いいえ
                </Button>
            </div>
        </div>
    );
};
