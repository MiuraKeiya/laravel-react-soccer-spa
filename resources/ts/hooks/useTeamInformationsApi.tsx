import { useEffect, useState } from "react";
import axios from "axios";

export const useTeamInformations = (teamId, season) => {
    const [informations, setInformations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { informations, loading };
};
