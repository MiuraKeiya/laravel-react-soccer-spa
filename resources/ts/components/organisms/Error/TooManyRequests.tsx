import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";

export const TooManyRequests = ({ status }) => {
    const [open, setOpen] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleClose = (reason: "backdropClick" | "escapeKeyDown") => {
        if (reason === "backdropClick") {
            setOpen(false);
        }
    };

    const handleOpen = () => {
        setOpen(true);
    };

    // x-ratelimit-reset ヘッダーの値を整数に変換
    const resetTimeInSeconds = parseInt(
        status.response.headers["x-ratelimit-reset"],
        10
    );

    // UNIXエポック時間をミリ秒単位のJavaScriptのタイムスタンプに変換
    const resetTimeInMilliseconds = resetTimeInSeconds * 1000;

    const calculateTimeRemaining = () => {
        const currentTime = new Date().getTime();
        const remainingTime = resetTimeInMilliseconds - currentTime;
        setTimeRemaining(remainingTime);

        // 残り時間が0未満の場合、ボタンを活性化
        if (remainingTime <= 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    };

    useEffect(() => {
        handleOpen();
        calculateTimeRemaining();

        // 1秒ごとに残り時間を更新する
        const timerInterval = setInterval(() => {
            calculateTimeRemaining();
        }, 1000);

        // コンポーネントがアンマウントされたらクリアする
        return () => clearInterval(timerInterval);
    }, []);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div className="text-white border-2 border-[#111931] bg-[#010A0F] rounded-md">
                <div className="mx-1 lg:mx-3 my-3">
                    <h1 className="text-red-600 text-[20px] mb-2">
                        APIコール制限
                    </h1>
                    <p>ステータスコード : {status}</p>
                    <p>
                        APIのコール回数が多すぎます。
                        <br />
                        一定時間経過まで操作をすることはできません。
                        <br />
                    </p>
                    <div className="text-center mt-6">
                        <Button
                            onClick={() => {
                                if (!buttonDisabled) {
                                    handleClose("backdropClick");
                                    window.location.reload();
                                }
                            }}
                            variant="contained"
                            startIcon={<CachedIcon />}
                            disabled={buttonDisabled} // ボタンの活性/非活性を設定
                        >
                            <p
                                style={{
                                    color: timeRemaining > 0 ? "red" : "white",
                                }}
                            >
                                {timeRemaining > 0
                                    ? `残り時間 : ${Math.floor(
                                          timeRemaining / 1000
                                      )}秒`
                                    : "再読み込み"}
                            </p>
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
