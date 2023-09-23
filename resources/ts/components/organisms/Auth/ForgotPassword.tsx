import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Icon } from "../../atoms/Icon";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";

export const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm();

    // ローディングフラグ
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/login");
    };

    // スタイル
    const theme = createTheme({
        palette: {
            primary: {
                main: "#ffffff", // プライマリカラーを白に設定
            },
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        "& .MuiInputLabel-root": {
                            color: "#ffffff", // ラベルの色を白に設定
                        },
                        "& .MuiInputBase-input": {
                            color: "#ffffff", // テキストの色を白に設定
                        },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "#ffffff", // 枠線の色を白に設定
                            },
                            "&:hover fieldset": {
                                borderColor: "#ffffff", // フォーカス時の色を白に設定
                            },
                        },
                    },
                },
            },
        },
    });

    return (
        <div className="mx-3">
            <div className="mb-5">
                <Icon
                    src="/images/Original1.png"
                    alt="Football"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#EEEEEE]">
                    パスワードをリセットする
                </h2>
                <p className="text-[#C8CDCD] mt-3">
                    Football
                    Leagueに登録されたメールアドレスを入力してください。
                </p>
            </div>
            <div>
                {/** パスワードリセットフォーム */}
                <form>
                    <ThemeProvider theme={theme}>
                        <TextField
                            fullWidth
                            label="メールアドレス*"
                            autoComplete="off"
                            InputProps={{
                                style: {
                                    color: "white", // 文字色を白に設定
                                    borderColor: "white", // 枠線色を白に設定
                                },
                            }}
                            {...register("email", {
                                required: "入力してください",
                                pattern: {
                                    // 正規表現を使用してメールアドレスの形式を確認
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message:
                                        "正しいメールアドレスの形式で入力してください",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="text-red-500 block">
                                {errors.email.message}
                            </span>
                        )}
                        <LoadingButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            loading={loading}
                            sx={{ mt: 3, mb: 2 }}
                            style={{
                                backgroundColor: "#5a67d8", // ボタンの背景色を紫に変更
                                fontWeight: "bold", // 文字の太さを変更
                                color: loading ? undefined : "white", // 文字色を白に変更
                            }}
                        >
                            送信
                        </LoadingButton>
                        {errors.submit && (
                            <span className="text-red-500">
                                {errors.submit.message}
                            </span>
                        )}
                    </ThemeProvider>
                </form>
                <div className="text-center mt-6">
                    <Button
                        variant="outlined"
                        startIcon={<ArrowBackIosIcon />}
                        onClick={handleBackClick}
                    >
                        戻る
                    </Button>
                </div>
            </div>
        </div>
    );
};
