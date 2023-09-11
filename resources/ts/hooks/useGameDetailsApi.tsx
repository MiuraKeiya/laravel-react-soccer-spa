import { useEffect, useState } from "react";
import axios from "axios";

export const useGameDetailsApi = (gameId) => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const GameDetails = async () => {
            try {
                const response = await axios.get(`/api/games/${gameId}`);
                console.log(response.data);
                setGames(response.data);
                setLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setLoading(false);
            }
        };

        GameDetails();
    }, []);

    return { games, loading };
};
