import { useState, useEffect } from "react";
import axios from "axios";

export const useLeagueTeamsApi = (leagueId, season) => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/teams/league/${leagueId}/season/${season}`
                );
                console.log("全チーム取得", response.data);
                setTeams(response.data);
                setLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [leagueId, season]);

    return [teams, loading, error];
};
