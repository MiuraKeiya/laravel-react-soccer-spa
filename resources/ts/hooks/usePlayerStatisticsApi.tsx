import { useEffect, useState } from "react";
import axios from "axios";

export const usePlayerStatisticsApi = (playerId, season) => {
    const [statistics, setStatistics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/players/${playerId}/season/${season}`
                );
                console.log(response.data);
                setStatistics(response.data);
                setLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [playerId, season]);

    return { statistics, loading, error };
};
