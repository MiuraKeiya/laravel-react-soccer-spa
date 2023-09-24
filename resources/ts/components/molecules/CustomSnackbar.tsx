import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "../atoms/Alert";

export const CustomSnackbar = ({ message }) => {
    const [open, setOpen] = useState(true);

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
        >
            <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};
