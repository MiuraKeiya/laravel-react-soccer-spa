import { useEffect, useState } from "react";
import axios from "axios";

export const useRankingsApi = (leagueId, season) => {
    const [rankings, setRankings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/players/rankings/leagues/${leagueId}/seasons/${season}`
                );
                console.log(response.data);
                setRankings(response.data);
                setLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { rankings, loading };
};
