import { useEffect, useState } from "react";
import axios from "axios";

export const useStandingsApi = (leagueId, season) => {
    const [standings, setStandings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/standings/leagues/${leagueId}/seasons/${season}`);
                setStandings(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error getting standings:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { standings, loading };
};
