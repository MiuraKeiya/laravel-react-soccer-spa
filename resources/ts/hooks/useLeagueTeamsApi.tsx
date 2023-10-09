import { useState, useEffect } from "react";
import axios from "axios";

export const useLeagueTeamsApi = (leagueId, season) => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/teams/league/${leagueId}/season/${season}`
                );
                console.log(response.data);
                setTeams(response.data);
                setLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [leagueId, season]);

    return { teams, loading };
};
