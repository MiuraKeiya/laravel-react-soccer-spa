import { useEffect, useState } from "react";
import axios from "axios";

export const useTeamPlayersApi = (playerId, season) => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/players/team/${playerId}/season/${season}`
                );
                console.log(response.data);
                setPlayers(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error getting players:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { players, loading };
};
