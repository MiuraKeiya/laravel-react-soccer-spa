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
    const [gamesError, setGamesError] = useState("");

    useEffect(() => {
        if (!date) {
            setGamesLoading(true);
            return;
        }

        setGamesLoading(true);

        const GamesData = async () => {
            try {
                // 非同期関数を3秒遅延させる
                await new Promise((resolve) => setTimeout(resolve, 3000));

                const response = await axios.get(`/api/games/dates/${date}`);
                console.log("試合API", response.data);
                setGames(groupGamesByLeague(response.data));
                setGamesLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setGamesError("エラーが発生しました。");
                setGamesLoading(false);
            }
        };

        GamesData();
    }, [date]);

    return { games, gamesLoading };
};
