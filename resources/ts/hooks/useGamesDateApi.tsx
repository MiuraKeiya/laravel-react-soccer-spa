import { useEffect, useState } from "react";
import axios from "axios";

/**
 * 試合が行われる日付を全て取得する
 * 
 * @returns 
 */
export const useGamesDateApi = () => {
    const [gamesDate, setGamesDate] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const GamesDate = async () => {
            try {
                const response = await axios.get("/api/dates");
                setGamesDate(response.data);
                setLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setLoading(false);
            }
        };

        GamesDate();
    }, []);

    return { gamesDate, loading };
};
