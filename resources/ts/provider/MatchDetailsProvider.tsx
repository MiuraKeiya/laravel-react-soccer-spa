import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MatchDetailsContext = createContext([]);

export const MatchDetailsProvider = ({ children }) => {
    // 試合idを格納
    const [matchId, setMatchId] = useState(null);

    //シーズンを格納
    const [season, setSeason] = useState(null);

    // リーグIdを格納
    const [leagueMatchId, setLeagueMatchId] = useState(null);

    // 試合結果を格納
    const [result, setResult] = useState([]);

    // 今シーズンのチーム順位を格納
    const [ranking, setRanking] = useState([]);

    // エラーを格納
    const [error, setError] = useState([]);

    // 初回マウント時に実行
    useEffect(() => {
        setResult([]);
        setError([]);

        if (matchId !== null) {
            fetchData();
        }
    }, [matchId, leagueMatchId]);

    // 今シーズンの試合日程・試合結果を取得する関数
    const fetchData = async () => {
        try {
            const res1 = await axios.get(`/api/match/${matchId}`);

            const responseData = res1.data;

            console.log(responseData);

            setResult(responseData);

            const res2 = await axios.get("/api/teams/rankings", {
                params: {
                    leagueId: leagueMatchId,
                    season: season,
                },
            });

            const responseData2 = res2.data;
            console.log(responseData2);
            setRanking(responseData2);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <MatchDetailsContext.Provider
            value={{ result, ranking, setMatchId, setSeason, setLeagueMatchId, error }}
        >
            {children}
        </MatchDetailsContext.Provider>
    );
};
