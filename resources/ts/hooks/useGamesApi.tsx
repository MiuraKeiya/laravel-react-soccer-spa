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
    const [gamesError, setGamesError] = useState(null);

    useEffect(() => {
        if (!date) {
            setGamesLoading(true);
            return;
        }

        setGamesLoading(true);

        const GamesData = async () => {
            try {
                const response = await axios.get(`/api/games/dates/${date}`);
                setGames(groupGamesByLeague(response.data));
                
                setGamesLoading(false);
            } catch (error) {
                setGamesError(error);
                setGamesLoading(false);
            }
        };

        GamesData();
    }, [date]);

    return { games, gamesLoading, gamesError };
};
