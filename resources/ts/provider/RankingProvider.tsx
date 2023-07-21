import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RankingContext = createContext([]);

export const RankingProvider = ({ children }) => {
    // 順位表
    const [rankingData, setRankingData] = useState([]);

    // 得点ランキング
    const [scoreData, setScoreData] = useState([]);

    // リーグIdを格納
    const [id, setId] = useState(null);

    // シーズンを格納
    const [season, setSeason] = useState(null);

    // エラーを格納
    const [error, setError] = useState([]);

    useEffect(() => {
        setRankingData([]);
        setError([]);

        if (id !== null) {
            fetchData();
        }
    }, [id, season]);

    const fetchData = async () => {
        try {
            const res = await axios.get("/api/teams/rankings", {
                params: {
                    leagueId: id,
                    season: season,
                },
            });

            const ranking = res.data;

            console.log(ranking);

            setRankingData(ranking);

            const response = await axios.get("/api/players/rankings", {
                params: {
                    leagueId: id,
                    season: season,
                },
            });

            const score = response.data;

            console.log(score);

            setScoreData(score);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <RankingContext.Provider
            value={{ rankingData, scoreData, setId, setSeason, error }}
        >
            {children}
        </RankingContext.Provider>
    );
};
