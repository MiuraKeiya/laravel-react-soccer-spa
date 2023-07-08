import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FixtureResultContext = createContext([]);

export const FixtureResultProvider = ({ children }) => {
    // 今シーズンの試合日程・試合結果を格納
    const [fixtureResult, setFixtureResult] = useState([]);

    // 日付を格納
    const [date, setDate] = useState(2023 - 8 - 21);

    // エラーを格納
    const [error, setError] = useState([]);

    // 日付が変更された時に再度データを取得
    useEffect(() => {
        fetchData();
    }, [date]);

    // 今シーズンの試合日程・試合結果を取得する関数
    const fetchData = async () => {
        try {
            const date = "送信された日付";
            const response = await axios.get("/api/fixtures_results", {
                params: {
                    date: date,
                },
            });
            console.log("試合日程・試合結果");
            const responseData = response.data;
            setFixtureResult(responseData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <FixtureResultContext.Provider
            value={{ fixtureResult, setDate, error }}
        >
            {children}
        </FixtureResultContext.Provider>
    );
};
