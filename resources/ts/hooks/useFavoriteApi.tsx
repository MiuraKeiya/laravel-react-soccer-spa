import axios from "axios";
import { useState } from "react";

export const useFavoriteApi = (apiPath) => {
    // エラーを管理するためのステート
    const [error, setError] = useState(null);

    // お気に入り登録
    const addFavorite = async (id) => {
        try {
            await axios.post(`/api/favorites/${apiPath}`, {
                id,
            });
        } catch (error) {
            setError(error);
        }
    };

    // お気に入りから削除
    const deleteFavorite = async (id) => {
        try {
            await axios.delete(`/api/favorites/${apiPath}`, {
                data: { id },
            });
        } catch (error) {
            setError(error);
        }
    };

    return [addFavorite, deleteFavorite, error];
};
