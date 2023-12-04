import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";
import { useAuth } from "../../../context/AuthContext";

export const ModalLogout = ({ close }) => {
    const auth = useAuth();

    const navigate = useNavigate();

    // ローディングフラグ
    const [loading, setLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    const logout = () => {
        setLoading(true);

        setErrorMessage("");

        axios.get("/sanctum/csrf-cookie").then(() => {
            auth?.signout()
                .then(() => {
                    setLoading(false);
                    navigate("/", {
                        state: { message: "ログアウトしました。" },
                    });
                })
                .catch((error) => {
                    setLoading(false);
                    setErrorMessage(
                        "ログアウトに失敗しました。\n恐れ入りますが時間をおいて再度お試しください。"
                    );
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
            <div className="flex flex-col items-center space-y-4 mt-3">
                <Button
                    variant="outlined"
                    className="sm:w-[25rem] w-[15rem]"
                    onClick={logout}
                    color="error"
                >
                    {loading ? (
                        <CircularProgress color="inherit" size={25} />
                    ) : (
                        "はい"
                    )}
                </Button>
                <Button
                    variant="contained"
                    className="sm:w-[25rem] w-[15rem]"
                    onClick={close}
                    color="inherit"
                >
                    いいえ
                </Button>
            </div>
            {errorMessage && (
                <p className="text-red-500 whitespace-pre-line pt-2">
                    {errorMessage}
                </p>
            )}
        </div>
    );
};
