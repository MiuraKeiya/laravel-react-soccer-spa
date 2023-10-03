import { useEffect, useState } from "react";
import axios from "axios";

/**
 * 試合が行われる日付を全て取得する
 *
 * @returns
 */
export const useGamesDateApi = () => {
    const [gamesDate, setGamesDate] = useState([]);

    const [gamesDateloading, setGamesDateLoading] = useState(true);

    const [gamesDateError, setGamesDateError] = useState("");

    useEffect(() => {
        setGamesDateLoading(true);

        const GamesDate = async () => {
            try {
                const response = await axios.get("/api/dates");

                setGamesDate(response.data);

                setGamesDateLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setGamesDateError(error);

                setGamesDateLoading(false);
            }
        };

        GamesDate();
    }, []);

    return { gamesDate, gamesDateloading, gamesDateError };
};
