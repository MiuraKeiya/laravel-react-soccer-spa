import { useEffect, useState } from "react";
import axios from "axios";

/**
 * 主要なチームを取得する
 * 
 * @returns 
 */
export const useLeadingTeamApi = () => {
    const [leadingTeam, setLeadingTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const GamesDate = async () => {
            try {
                const response = await axios.get("/api/standings/teams");
                setLeadingTeam(response.data);
                setLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setLoading(false);
            }
        };

        GamesDate();
    }, []);

    return { leadingTeam, loading };
};