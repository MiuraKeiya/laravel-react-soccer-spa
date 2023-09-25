import { useState } from "react";
import axios from "axios";
import { useNavigation } from "../../../hooks/useNavigation";
import { Icon } from "../../atoms/Icon";
import { useEmailVerificationApi } from "../../../hooks/useEmailVerificationApi";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export const EmailVerification = () => {
    const goTo = useNavigation();

    const { sendEmail } = useEmailVerificationApi();

    // ローディングフラグ
    const [loading, setLoading] = useState(false);

    const [successMessage, setSuccessMessage] = useState("");

    const [error, setError] = useState("");

    const onSubmit = (data) => {
        setLoading(true);
        axios.get("/sanctum/csrf-cookie").then(() => {
            sendEmail()
                .then(() => {
                    setSuccessMessage("メールを再送しました。");
                    setLoading(false);
                })
                .catch((error) => {
                    setError("メールの送信に失敗しました。");
                    setLoading(false);
                });
        });
    };

    return (
        <div className="mx-3">
            <div>
                <Icon
                    src="/images/Original1.png"
                    alt="Football"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#EEEEEE]">
                    ご登録ありがとうございます！
                </h2>
            </div>
            <div className="mx-auto mt-6 mb-2">
                {successMessage ? (
                    <p className="text-white">{successMessage}</p>
                ) : (
                    <p className="text-white">
                        ご入力いただいたメールアドレスへ認証リンクを送信しました。
                        <br />
                        リンクをクリックして認証を完了させてください。
                        <br />
                        もし、認証メールが届かない場合は再送させていただきます。
                    </p>
                )}
            </div>
            <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                loading={loading}
                onClick={onSubmit}
                sx={{ mt: 3, mb: 2 }}
                style={{
                    backgroundColor: "#5a67d8",
                    fontWeight: "bold",
                    color: loading ? undefined : "white",
                }}
            >
                メールを再送する
            </LoadingButton>
            {error && <p className="text-red-500">{error}</p>}
            <div className="text-center mt-6">
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIosIcon />}
                    onClick={() => goTo("/")}
                >
                    トップへ戻る
                </Button>
            </div>
        </div>
    );
};
