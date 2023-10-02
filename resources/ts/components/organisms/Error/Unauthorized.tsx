import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

export const Unauthorized = ({ status }) => {
    const [open, setOpen] = useState(false);

    const handleClose = (reason: "backdropClick" | "escapeKeyDown") => {
        if (reason === "backdropClick") {
            setOpen(false);
        }
    };

    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        handleOpen();
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
                        セッションの有効期限が切れました。
                    </h1>
                    <p>ステータスコード : {status}</p>
                    <p>ログインして本人確認を行なってください。</p>
                    <div className="text-center mt-6">
                        <Button
                            onClick={() => {
                                handleClose("backdropClick"); // モーダルを閉じる
                                window.location.reload();
                            }}
                            variant="contained"
                        >
                            ログイン
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
