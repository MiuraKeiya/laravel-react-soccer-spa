import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RankingContext = createContext([]);

export const RankingProvider = ({ children }) => {
    // 今シーズン順位表
    const [rankingData, setRankingData] = useState([]);

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
            const res = await axios.get("/api/teams/ranking", {
                params: {
                    leagueId: id,
                    season: season,
                },
            });

            const ranking = res.data;

            console.log(ranking);

            setRankingData(ranking);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <RankingContext.Provider
            value={{ rankingData, setId, setSeason, error }}
        >
            {children}
        </RankingContext.Provider>
    );
};
