import { useEffect, useState } from "react";
import { useFavorite } from "../context/FavoriteContext";
import axios from "axios";

export const useGetFavoriteApi = (apiPath) => {
    const favorite = useFavorite();
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/favorites/${apiPath}`);
                console.log(`お気に入り${apiPath}`, response.data);
                setFavorites(response.data);

                if (apiPath === "leagues") {
                    favorite?.setFavoriteLeagues(response.data);
                } else if (apiPath === "teams") {
                    favorite?.setFavoriteTeams(response.data);
                }

                setLoading(false);
            } catch (error) {
                console.error("Error getting favorites:", error);

                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return [favorites, loading];
};
