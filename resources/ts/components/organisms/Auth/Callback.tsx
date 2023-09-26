import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigation } from "../../../hooks/useNavigation";
import { useLocation } from "react-router-dom";
import { CustomSnackbar } from "../../molecules/CustomSnackbar";
import { CircularProgress, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const Callback = () => {
    const token = useLocation().search;

    const goTo = useNavigation();

    const auth = useAuth();

    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("/sanctum/csrf-cookie").then(() => {
            auth?.signinWithGoogle(token)
                .then(() => {
                    goTo("/home");
                })
                .catch((error) => {
                    setError(
                        "エラーが発生しました。恐れ入りますが時間をおいて再度お試しください。"
                    );
                });
        });
    }, []);

    return (
        <div className="flex flex-col items-center space-y-3">
            {error ? (
                <div>
                    <CustomSnackbar message={error} severity="error" />
                    <Button
                        variant="outlined"
                        startIcon={<ArrowBackIosIcon />}
                        onClick={() => goTo("/login")}
                    >
                        ログイン画面へ戻る
                    </Button>
                </div>
            ) : (
                <>
                    <CircularProgress color="secondary" />
                    <p className="text-white">ローディング中</p>
                </>
            )}
        </div>
    );
};
