import { useEffect, useState } from "react";
import axios from "axios";

export const useGetFavoriteApi = (apiPath) => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const FavoritesLeague = async () => {
            try {
                const response = await axios.get(`/api/favorites/${apiPath}`);
                setFavorites(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error getting favorites:", error);
                setLoading(false);
            }
        };

        FavoritesLeague();
    }, []);

    return { favorites, loading };
};
