import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Button } from "@mui/material";

export const ModalDeleteAccount = ({ close, user }) => {
    const auth = useAuth();

    const navigate = useNavigate();

    // ローディングフラグ
    const [loading, setLoading] = useState(false);

    // エラーメッセージ
    const [errorMessage, setErroMessage] = useState("");

    const handleDeleteUser = () => {
        setLoading(true);
        auth?.deleteUser()
            .then(() => {
                setLoading(false);
                navigate("/", {
                    state: { message: "アカウントを削除しました。" },
                });
            })
            .catch((error) => {
                console.error("エラー:", error);
                setLoading(false);
                setErroMessage(
                    "アカウント削除に失敗しました。\n恐れ入りますが時間を空けてもう一度お試しください。"
                );
            });
    };

    return (
        <div className="mt-3 mb-5">
            {loading ? (
                <div className="h-[13rem] flex items-center">
                    <CircularProgress />
                </div>
            ) : (
                <>
                    <div className="flex flex-col items-center space-y-3">
                        <h1 className="text-[22px] font-bold mx-3 text-white">
                            アカウント削除
                        </h1>
                        <span className="text-white">
                            ユーザー名 : {user.user.user.name}
                        </span>
                        <span className="text-[#C8CDCD] text-center">
                            このアカウントを削除してもよろしいですか？
                        </span>
                    </div>
                    <div className="flex flex-col space-y-4 mt-3 items-center">
                        <Button
                            variant="outlined"
                            className="w-[15rem] sm:w-[25rem]"
                            color="error"
                            onClick={handleDeleteUser}
                        >
                            はい
                        </Button>
                        <Button
                            variant="contained"
                            className="w-[15rem] sm:w-[25rem]"
                            onClick={close}
                            color="inherit"
                        >
                            いいえ
                        </Button>
                    </div>
                    {errorMessage && (
                        <p className="text-red-500 whitespace-pre-line pt-2 text-center">
                            {errorMessage}
                        </p>
                    )}
                </>
            )}
        </div>
    );
};
