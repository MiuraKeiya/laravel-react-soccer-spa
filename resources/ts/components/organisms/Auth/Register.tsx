import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Icon } from "../../atoms/Icon";
import { useAuth } from "../../../context/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

export const Register = () => {
    const auth = useAuth();

    const navigate = useNavigate();

    const {
        getValues,
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm();

    // ローディングフラグ
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        axios.get("/sanctum/csrf-cookie").then(() => {
            auth?.register(data)
                .then(() => {
                    navigate("/home");
                })
                .catch((error) => {
                    setError("submit", {
                        type: "manual",
                        message: "登録に失敗しました。再度登録をしてください",
                    });
                    setLoading(false);
                });
        });
    };

    // パスワード表示非表示フラグ
    const [showPassword, setShowPassword] = useState(false);

    // パスワード表示非表示切り替え
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
        <div className="sm:w-[27rem] md:w-[27rem] lg:w-[27rem]">
            {/** 新規登録タイトル */}
            <div className="mb-5">
                <Icon
                    src="/images/Original1.png"
                    alt="Football"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#EEEEEE]">
                    アカウントを登録する
                </h2>
            </div>
            {/** 新規登録フォーム */}
            <div>
                <form
                    onSubmit={(e) => {
                        clearErrors();
                        handleSubmit(onSubmit)(e);
                    }}
                >
                    <ThemeProvider theme={theme}>
                        <div className="mb-4">
                            <TextField
                                fullWidth
                                label="ユーザー名*"
                                autoComplete="off"
                                InputProps={{
                                    style: {
                                        color: "white", // 文字色を白に設定
                                        borderColor: "white", // 枠線色を白に設定
                                    },
                                }}
                                {...register("name", {
                                    required: "入力してください",
                                    maxLength: {
                                        value: 20,
                                        message:
                                            "ユーザー名は最大20文字までです",
                                    },
                                })}
                            />
                            {errors.name && (
                                <span className="text-red-500 block">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>
                        <div className="mb-4">
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
                        </div>
                        <div className="mb-4">
                            <TextField
                                fullWidth
                                label="パスワード*"
                                type={showPassword ? "text" : "password"}
                                autoComplete="off"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={
                                                    togglePasswordVisibility
                                                }
                                                edge="end"
                                                style={{ color: "white" }}
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                {...register("password", {
                                    required: "入力してください",
                                    minLength: {
                                        value: 8,
                                        message:
                                            "パスワードは少なくとも8文字以上である必要があります",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message:
                                            "パスワードは最大20文字までです",
                                    },
                                })}
                            />
                            {errors.password && (
                                <span className="text-red-500 block">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                label="パスワード確認*"
                                type={showPassword ? "text" : "password"}
                                autoComplete="off"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={
                                                    togglePasswordVisibility
                                                }
                                                edge="end"
                                                style={{ color: "white" }}
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                {...register("password_confirmation", {
                                    required: "入力してください",
                                    validate: (value) => {
                                        return (
                                            value === getValues("password") ||
                                            "パスワードが一致しません"
                                        );
                                    },
                                })}
                            />
                            {errors.password_confirmation && (
                                <span className="text-red-500 block">
                                    {errors.password_confirmation.message}
                                </span>
                            )}
                        </div>
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
                            登録
                        </LoadingButton>
                        {errors.submit && (
                            <span className="text-red-500">
                                {errors.submit.message}
                            </span>
                        )}
                    </ThemeProvider>
                </form>
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-[#EEEEEE]"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 text-[#EEEEEE] bg-[#111931]">
                            {" "}
                            or{" "}
                        </span>
                    </div>
                </div>
                {/** ログインへ */}
                <p className="mt-5 text-center text-sm text-[#C8CDCD]">
                    アカウントをお持ちですか？{" "}
                    <Link
                        href="/login"
                        style={{ color: "#5a67d8" }}
                        className="font-semibold hover:text-indigo-600"
                    >
                        ログインする
                    </Link>
                </p>
                {/** コピーライト */}
                <div className="bg-[#111931] h-14 flex items-center justify-center">
                    <span className="text-[#B0EE1B] text-sm">
                        &copy; {new Date().getFullYear()} Football League
                    </span>
                </div>
            </div>
        </div>
    );
};
