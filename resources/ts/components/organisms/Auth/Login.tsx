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
import SendIcon from "@mui/icons-material/Send";

export const Login = () => {
    const auth = useAuth();

    const navigate = useNavigate();

    const {
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
            auth?.signin(data)
                .then(() => {
                    navigate("/home");
                })
                .catch((error) => {
                    console.log(error);
                    setError("submit", {
                        type: "manual",
                        message:
                            "メールアドレスまたはパスワードが有効ではありません",
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
            {/** ログインタイトル */}
            <div className="mb-5">
                <Icon
                    src="/images/Original1.png"
                    alt="Football"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#EEEEEE]">
                    アカウントにログインする
                </h2>
            </div>
            {/** ログインフォーム */}
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
                                id="email"
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
                        <div>
                            <TextField
                                fullWidth
                                label="パスワード*"
                                type={showPassword ? "text" : "password"}
                                id="password"
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
                            ログイン
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
                {/** googleログイン */}
                <button className="w-full flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                    <svg
                        className="h-5 w-5 shrink-0"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                            fill="#EA4335"
                        />
                    </svg>
                    <p className="text-[13px]">Googleアカウントでログイン</p>
                </button>
                {/** 新規登録へ */}
                <p className="mt-10 text-center text-sm text-[#C8CDCD]">
                    まだ登録をしていませんか？{" "}
                    <a
                        href="#"
                        className="font-semibold leading-6 text-indigo-500 hover:text-indigo-600"
                    >
                        新規登録する
                    </a>
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
