import { useEffect, useState } from "react";
import axios from "axios";

export const useGetFavoriteApi = (apiPath) => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1秒待機
                await new Promise((resolve) => setTimeout(resolve, 1000));

                const response = await axios.get(`/api/favorites/${apiPath}`);
                setFavorites(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error getting favorites:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { favorites, setFavorites, loading };
};
