import { useState } from "react";
import axios from "axios";

export const useFavorite = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const addToFavorites = async (teamId) => {
        try {
            setIsLoading(true);

            const response = await axios.post("api/favorites/teams", {
                teamId: teamId,
            });

            if (response.status === 200) {
                setIsFavorite(true);
            }
        } catch (error) {
            console.error("Error adding to favorites:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return { isFavorite, isLoading, addToFavorites };
};
