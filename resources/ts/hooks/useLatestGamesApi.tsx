import { useEffect, useState } from "react";
import axios from "axios";

export const useLatestGamesApi = (leagueId, season) => {
    const [latestGames, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const GamesData = async () => {
            try {
                const response = await axios.get(
                    `/api/latest_games/leagues/${leagueId}/seasons/${season}`
                );


                setGames(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        GamesData();
    }, [leagueId, season]);

    return [latestGames, loading, error];
};
