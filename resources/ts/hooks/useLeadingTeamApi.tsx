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
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const GamesDate = async () => {
            try {
                const response = await axios.get("/api/standings/teams");
                setLeadingTeam(response.data);
                setLoading(false);
            } catch (error) {
                console.error("API call error:", error);

                setError(error);
                setLoading(false);
            }
        };

        GamesDate();
    }, []);

    return [leadingTeam, error, loading];
};
