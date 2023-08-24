import { useEffect, useState } from "react";
import axios from "axios";

/**
 * 日付ごとの試合を取得する
 * 
 * @param {string} date 日付
 * @returns 試合情報とローディング状態を含む
 */
export const useGamesApi = (date: string) => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const GamesData = async () => {
            try {
                const response = await axios.get(`/api/games/dates/${date}`);
                setGames(response.data);
                setLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setLoading(false);
            }
        };

        GamesData();
    }, [date]);

    return { games, loading };
};
