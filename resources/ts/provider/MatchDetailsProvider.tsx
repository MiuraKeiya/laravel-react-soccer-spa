import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MatchDetailsContext = createContext([]);

export const MatchDetailsProvider = ({ children }) => {
    // 試合idを格納
    const [matchId, setMatchId] = useState(null);

    // 試合結果を格納
    const [result, setResult] = useState([]);

    // エラーを格納
    const [error, setError] = useState([]);

    // 初回マウント時に実行
    useEffect(() => {
        if (matchId !== null) {
            fetchData();
        }
    }, [matchId]);

    // 今シーズンの試合日程・試合結果を取得する関数
    const fetchData = async () => {
        try {
            const res = await axios.get(`/api/match/${matchId}`);

            const responseData = res.data;

            console.log(responseData);

            setResult(responseData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <MatchDetailsContext.Provider value={{ result, setMatchId, error }}>
            {children}
        </MatchDetailsContext.Provider>
    );
};
