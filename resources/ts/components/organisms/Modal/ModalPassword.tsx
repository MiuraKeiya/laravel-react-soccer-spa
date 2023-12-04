import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ModalPassword = () => {
    const auth = useAuth();

    // ローディングフラグ
    const [loading, setLoading] = useState(false);

    // パスワード表示非表示フラグ
    const [showPassword, setShowPassword] = useState(false);

    // 成功状態フラグ
    const [success, setSuccess] = useState(false);

    // パスワード表示非表示切り替え
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const {
        getValues,
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm();

    // パスワード変更処理
    const onSubmit = (password) => {
        setLoading(true);
        axios.get("/sanctum/csrf-cookie").then(() => {
            auth?.passwordUpdate(password)
                .then(() => {
                    setLoading(false);
                    setSuccess(true);
                })
                .catch((error) => {
                    setError("submit", {
                        type: "manual",
                        message: "パスワードが変更できませんでした。",
                    });
                    setLoading(false);
                });
        });
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
        <>
            {!success && (
                <div className="mb-3 flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center space-y-3">
                        <h1 className="text-[22px] font-bold mx-3 text-white">
                            パスワードを変更する
                        </h1>
                    </div>
                    <form
                        onSubmit={(e) => {
                            clearErrors();
                            handleSubmit(onSubmit)(e);
                        }}
                    >
                        <ThemeProvider theme={theme}>
                            <div className="mt-4">
                                <TextField
                                    fullWidth
                                    label="現在のパスワード*"
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
                                    {...register("current_password", {
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
                            <div className="mt-4">
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
                            <div className="mt-4 w-[18rem] sm:w-[25rem]">
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
                                                value ===
                                                    getValues("password") ||
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
                                sx={{ mt: 2, mb: 1 }}
                                style={{
                                    backgroundColor: "#5a67d8",
                                    fontWeight: "bold",
                                    color: loading ? undefined : "white",
                                }}
                            >
                                変更する
                            </LoadingButton>
                            {errors.submit && (
                                <span className="text-red-500">
                                    {errors.submit.message}
                                </span>
                            )}
                        </ThemeProvider>
                    </form>
                </div>
            )}
            {success && (
                <div className="mb-9 flex items-center justify-center h-[10rem]">
                    <h1 className="text-[22px] font-bold mx-3 text-white">
                        パスワードを変更しました。
                    </h1>
                </div>
            )}
        </>
    );
};
