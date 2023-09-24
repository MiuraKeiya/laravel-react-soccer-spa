import { useState } from "react";
import axios from "axios";

export const useForgotPasswordApi = () => {
    const [loading, setLoading] = useState(false);

    const sendForgotPasswordEmail = async (email) => {
        try {
            setLoading(true);

            // POSTリクエストを送信
            const response = await axios.post("/api/forgot-password", email);
            console.log(response.data);
        } catch (error) {
            throw error;
        }
    };

    const passwordReset = async (token) => {
        try {
            // POSTリクエストを送信
            const response = await axios.post("/api/reset-password", token);
            console.log(response.data);
        } catch (error) {
            throw error;
        }
    };

    return {
        sendForgotPasswordEmail,
        passwordReset,
        loading,
    };
};
