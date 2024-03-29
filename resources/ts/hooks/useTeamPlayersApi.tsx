import { useEffect, useState } from "react";
import axios from "axios";

export const useTeamPlayersApi = (playerId, season) => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/players/team/${playerId}/season/${season}`
                );

                setPlayers(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [playerId, season]);

    return [players, loading, error];
};
