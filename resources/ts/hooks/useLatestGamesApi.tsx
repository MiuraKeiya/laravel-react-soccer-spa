import { useEffect, useState } from "react";
import axios from "axios";

export const useLatestGamesApi = (leagueId, season) => {
    const [latestGames, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const GamesData = async () => {
            try {
                const response = await axios.get(
                    `/api/latest_games/leagues/${leagueId}/seasons/${season}`
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

    return { latestGames, loading };
};
