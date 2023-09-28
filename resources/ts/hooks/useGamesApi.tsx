import { useEffect, useState } from "react";
import axios from "axios";
import { groupGamesByLeague } from "../functions/Utils";

/**
 * 日付ごとの試合を取得する
 *
 * @param {string} date 日付
 * @returns 試合情報とローディング状態を含む
 */
export const useGamesApi = (date: string) => {
    const [games, setGames] = useState([]);
    const [gamesLoading, setGamesLoading] = useState(true);

    useEffect(() => {
        if (!date) {
            setGamesLoading(true);
            return;
        }

        const GamesData = async () => {
            try {
                const response = await axios.get(`/api/games/dates/${date}`);
                console.log("試合API", response.data);
                setGames(groupGamesByLeague(response.data));
                setGamesLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setGamesLoading(false);
            }
        };

        GamesData();
    }, [date]);

    return { games, gamesLoading };
};
