import { useEffect, useState } from "react";
import axios from "axios";

export const useAllGamesApi = (leagueId, season) => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const GamesData = async () => {
            try {
                const response = await axios.get(
                    `/api/games/league/${leagueId}/season/${season}`
                );
                console.log(response.data);
                setGames(response.data);
                setLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setLoading(false);
            }
        };

        GamesData();
    }, []);

    return { games, loading };
};