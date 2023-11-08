import { useEffect, useState } from "react";
import axios from "axios";

export const useStandingsApi = (leagueId, season) => {
    const [standings, setStandings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        
        if (typeof leagueId !== "undefined" && typeof season !== "undefined") {
            const fetchData = async () => {
                try {
                    const response = await axios.get(
                        `/api/standings/leagues/${leagueId}/seasons/${season}`
                    );
                    console.log("順位一覧API", response.data);

                    setStandings(response.data);
                    setLoading(false);
                } catch (error) {
                    console.error("Error getting standings:", error);

                    setError(error);
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, [leagueId, season]);

    return { standings, loading, error };
};
