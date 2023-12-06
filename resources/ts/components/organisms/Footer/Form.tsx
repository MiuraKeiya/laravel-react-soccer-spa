import { Page } from "../../../Page";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSendEmailApi } from "../../../hooks/useSendEmailApi";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export const Form = () => {
    const [sendEmail, error, loading] = useSendEmailApi();

    // モーダル開閉状態
    const [open, setOpen] = useState(false);

    // モーダルを開く
    const handleOpen = () => setOpen(true);

    // モーダルを閉じる
    const handleClose = () => setOpen(false);

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        sendEmail(data)
            .then(() => {

                handleOpen();

                // 入力欄をリセットする
                reset();
            })
            .catch((error) => {
                setError("submit", {
                    type: "manual",
                    message: "メールの送信に失敗しました",
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
        <>
            <div className="text-white mt-3 md:pr-3 lg:pr-0">
                <form
                    onSubmit={(e) => {
                        clearErrors();
                        handleSubmit(onSubmit)(e);
                    }}
                    className="lg:w-[18rem] md:w-[15rem] w-[18rem]"
                >
                    <ThemeProvider theme={theme}>
                        <div className="mb-5">
                            <TextField
                                fullWidth
                                label="ユーザー名*"
                                autoComplete="off"
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
                                <span className="text-red-500 block pt-1">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>
                        <div className="mb-5">
                            <TextField
                                fullWidth
                                label="メールアドレス*"
                                autoComplete="off"
                                {...register("email", {
                                    required: "入力してください",
                                    pattern: {
                                        // 正規表現を使用してメールアドレスの形式を確認
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "正しい形式で入力してください",
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="text-red-500 block pt-1">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div className="">
                            <TextField
                                fullWidth
                                rows={3}
                                multiline
                                label="本文*"
                                {...register("message", {
                                    required: "入力してください",
                                    maxLength: {
                                        value: 1000,
                                        message: "本文は最大1000文字までです",
                                    },
                                })}
                            />
                            {errors.message && (
                                <span className="text-red-500 block pt-1">
                                    {errors.message.message}
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
            <Page error={error}>
                <Modal
                    open={open}
                    onClose={handleClose}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "8rem",
                    }}
                >
                    <div className="border border-white bg-[#010A0F] h-[11.5rem] sm:h-[10rem] md:h-[10rem] lg:h-[10rem] w-[21rem] sm:w-[25rem] md:w-[25rem] lg:w-[25rem]">
                        <div className="ml-3 my-3">
                            <div className="flex items-center justify-between">
                                <h1 className="text-white font-semibold">
                                    メールの送信が完了しました
                                </h1>
                                <IconButton
                                    color="inherit"
                                    aria-label="close"
                                    onClick={handleClose}
                                    sx={{ color: "#EEEEEE" }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </div>
                            <p className="text-[#EEEEEE] pt-3">
                                お問い合わせをいただきありがとうございます。
                                <br />
                                できるだけ早くお返事させて頂きますので、
                                <br />
                                しばらくお待ちくださいませ。
                            </p>
                        </div>
                    </div>
                </Modal>
            </Page>
        </>
    );
};
