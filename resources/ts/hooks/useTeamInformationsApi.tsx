import { useEffect, useState } from "react";
import axios from "axios";

export const useTeamInformations = (teamId, season) => {
    const [informations, setInformations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/teams/${teamId}/seasons/${season}`
                );
                console.log(response.data);
                setInformations(response.data);

                setLoading(false);
            } catch (error) {
                console.error("Error getting informations:", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [teamId, season]);

    return [informations, error, loading];
};
