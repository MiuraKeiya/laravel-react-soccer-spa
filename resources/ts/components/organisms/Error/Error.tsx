import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";

export const Error = ({ status }) => {
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
                        エラーが発生しました。
                    </h1>
                    <p>ステータスコード : {status}</p>
                    <p>
                        恐れ入りますが、再読み込みをするか時間を空けてからアクセスしてください。
                    </p>
                    <div className="text-center mt-6">
                        <Button
                            onClick={() => {
                                handleClose("backdropClick");
                                window.location.reload();
                            }}
                            variant="contained"
                            startIcon={<CachedIcon />}
                        >
                            再読み込み
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
