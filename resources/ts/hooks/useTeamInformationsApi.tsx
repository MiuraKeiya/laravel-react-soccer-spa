import { useEffect, useState } from "react";
import axios from "axios";

export const useTeamInformations = (teamId, season) => {
    const [informations, setInformations] = useState([]);
    const [teamLoading, setTeamLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/teams/${teamId}/seasons/${season}`
                );
                console.log(response.data);
                setInformations(response.data);

                setTeamLoading(false);
            } catch (error) {
                console.error("Error getting informations:", error);
                setTeamLoading(false);
            }
        };

        fetchData();
    }, [teamId, season]);

    return { informations, teamLoading };
};
