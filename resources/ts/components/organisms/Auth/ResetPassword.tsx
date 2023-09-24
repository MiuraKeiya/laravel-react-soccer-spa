import { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Icon } from "../../atoms/Icon";
import { useForgotPasswordApi } from "../../../hooks/useForgotPasswordApi";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const ResetPassword = () => {
    // URLのパラメータからtokenを取得
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const { passwordReset } = useForgotPasswordApi();

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        getValues,
        formState: { errors },
    } = useForm();

    // パスワード表示非表示フラグ
    const [showPassword, setShowPassword] = useState(false);

    // パスワード表示非表示切り替え
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // ローディングフラグ
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        // 取得したtokenを追加
        data.token = token;
        console.log(data);
        axios.get("/sanctum/csrf-cookie").then(() => {
            passwordReset(data)
                .then(() => {
                    navigate("/login", { state: { message: "パスワードを変更しました。" } });
                })
                .catch((error) => {
                    setError("submit", {
                        type: "manual",
                        message: "パスワードの再設定に失敗しました。",
                    });
                    setLoading(false);
                });
        });
    };

    const handleBackClick = () => {
        navigate("/");
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
            <div className="mb-5">
                <Icon
                    src="/images/Original1.png"
                    alt="Football"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#EEEEEE]">
                    パスワードを再設定する
                </h2>
            </div>
            <div>
                {/** パスワード再設定フォーム */}
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
                                label="新しいパスワード*"
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
                                backgroundColor: "#5a67d8",
                                fontWeight: "bold",
                                color: loading ? undefined : "white",
                            }}
                        >
                            パスワードを変更
                        </LoadingButton>
                        {errors.submit && (
                            <span className="text-red-500">
                                {errors.submit.message}
                            </span>
                        )}
                    </ThemeProvider>
                    <TextField
                        inputProps={{
                            type: "hidden",
                        }}
                        {...register("token")}
                        value={token}
                    />
                </form>
                <div className="text-center mt-6">
                    <Button
                        variant="outlined"
                        startIcon={<ArrowBackIosIcon />}
                        onClick={handleBackClick}
                    >
                        トップへ戻る
                    </Button>
                </div>
                {/** コピーライト */}
                <div className="bg-[#111931] h-14 flex items-center justify-center mt-6">
                    <span className="text-[#B0EE1B] text-sm">
                        &copy; {new Date().getFullYear()} Football League
                    </span>
                </div>
            </div>
        </div>
    );
};
