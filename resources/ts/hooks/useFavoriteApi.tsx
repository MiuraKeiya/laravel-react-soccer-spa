import axios from "axios";
import { useState } from "react";

export const useFavoriteApi = (apiPath) => {
    // エラーを管理するためのステート
    const [error, setError] = useState(null);

    // 成功時のステータスコードを管理するためのステート
    const [statusCode, setStatusCode] = useState(null);

    // お気に入り登録
    const addFavorite = async (id) => {
        try {
            // 1秒待つ
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const response = await axios.post(`/api/favorites/${apiPath}`, {
                id,
            });

            setStatusCode(response.status);
        } catch (error) {
            console.error("Error adding favorite:", error);

            setError(error);
        }
    };

    // お気に入りから削除
    const deleteFavorite = async (id) => {
        try {
            // 1秒待つ
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const response = await axios.delete(`/api/favorites/${apiPath}`, {
                data: { id },
            });

            setStatusCode(response.status);
        } catch (error) {
            console.error("Error deleting favorite:", error);

            setError(error);
        }
    };

    return [addFavorite, deleteFavorite, statusCode, error];
};
