import { useEffect, useState } from "react";
import axios from "axios";

export const useRankingsApi = (leagueId, season) => {
    const [rankings, setRankings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/players/rankings/leagues/${leagueId}/seasons/${season}`
                );
                console.log("ランキングAPI", response.data);

                setRankings(response.data);
                setLoading(false);
            } catch (error) {
                console.error("API call error:", error);

                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [leagueId, season]);

    return [rankings, loading, error];
};
