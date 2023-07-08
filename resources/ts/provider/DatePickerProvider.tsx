import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DatePickerContext = createContext([]);

export const DatePickerProvider = ({ children }) => {
    // 試合が行われる日付を格納
    const [fixtureDate, setFixtureDate] = useState([]);

    // 初回マウント時に実行
    useEffect(() => {
        getDate();
    }, []);

    // 試合の日付を取得
    const getDate = async () => {
        try {
            const response = await axios.get("/api/date");
            console.log("日付");
            const responseData = response.data;
            setFixtureDate(responseData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <DatePickerContext.Provider value={{ fixtureDate, setFixtureDate }}>
            {children}
        </DatePickerContext.Provider>
    );
};
