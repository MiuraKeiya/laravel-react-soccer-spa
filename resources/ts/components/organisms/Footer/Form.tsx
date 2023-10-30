import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";

export const Form = () => {
    // ローディングフラグ
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // フォームが送信されたときの処理をここに追加
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
                                borderColor: "#a9a9a9", // 枠線の色を変更
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
        <div className="text-white">
            <form onSubmit={handleSubmit(onSubmit)} className="w-[18rem]">
                <ThemeProvider theme={theme}>
                    <div className="mb-6">
                        <TextField
                            fullWidth
                            label="ユーザー名*"
                            autoComplete="off"
                            {...register("name", {
                                required: "入力してください",
                                maxLength: {
                                    value: 20,
                                    message: "ユーザー名は最大20文字までです",
                                },
                            })}
                        />
                        {errors.name && (
                            <span className="text-red-500 block">
                                {errors.name.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-6">
                        <TextField
                            fullWidth
                            label="メールアドレス*"
                            autoComplete="off"
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
                    <div className="">
                        <TextField
                            required
                            fullWidth
                            rows={3}
                            multiline
                            id="Contact"
                            label="本文"
                        />
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
                        メールを送信する
                    </LoadingButton>
                    {errors.submit && (
                        <span className="text-red-500">
                            {errors.submit.message}
                        </span>
                    )}
                </ThemeProvider>
            </form>
        </div>
    );
};
