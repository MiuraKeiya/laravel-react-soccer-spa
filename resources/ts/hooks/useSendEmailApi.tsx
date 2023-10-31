import { useEffect, useState } from "react";
import axios from "axios";

export const useSendEmailApi = () => {
    // エラーを管理するためのステート
    const [error, setError] = useState(null);

    // ローディングフラグ
    const [loading, setLoading] = useState(false);

    // お問い合わせメールを送信する
    const sendEmail = async (data) => {
        setLoading(true);

        try {
            await axios.post("/api/send-email", data);
        } catch (error) {
            console.error("Error send email:", error);
            setError(error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return [sendEmail, error, loading];
};
