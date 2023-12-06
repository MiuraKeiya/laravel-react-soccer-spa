import { useEffect, useState } from "react";
import axios from "axios";

export const useGameDetailsApi = (gameId) => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const GameDetails = async () => {
            try {
                const response = await axios.get(`/api/games/${gameId}`);
                setGames(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        GameDetails();
    }, []);

    return [games, loading, error];
};
