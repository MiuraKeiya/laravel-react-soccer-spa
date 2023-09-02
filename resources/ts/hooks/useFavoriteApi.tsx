import axios from "axios";

export const useFavoriteApi = (apiPath) => {
    // 登録
    const addFavorite = async (id) => {
        try {
            // 1秒待つ
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // APIコール
            const response = await axios.post(`/api/favorites/${apiPath}`, {
                id,
            });
        } catch (error) {
            console.error("Error adding favorite:", error);
        }
    };

    // 削除
    const deleteFavorite = async (id) => {
        try {
            // 1秒待つ
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // APIコール
            const response = await axios.delete(`/api/favorites/${apiPath}`, {
                data: { id },
            });
        } catch (error) {
            console.error("Error deleting favorite:", error);
        }
    };

    return {
        addFavorite,
        deleteFavorite,
    };
};
