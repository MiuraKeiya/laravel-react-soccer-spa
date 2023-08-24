import { useEffect, useState } from "react";
import { useGamesDateApi } from "./useGamesDateApi";

export const useDatePicker = () => {
    const { gamesDate, loading } = useGamesDateApi();
    console.log(gamesDate);
    const [startDate, setStartDate] = useState(new Date());
    const [highlightedDates, setHighlightedDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
        if (!loading) {
            const dates = gamesDate.map((item) => new Date(item.date));
            setStartDate(dates[0]);
            setSelectedDate(formatDate(dates[0]));
            setHighlightedDates(dates);
        }
    }, [gamesDate]);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
    };

    const handleDateChange = (date) => {
        setStartDate(date);
        const formattedDate = formatDate(date);
        setSelectedDate(formattedDate);
    };

    return {
        startDate,
        highlightedDates,
        selectedDate,
        handleDateChange,
    };
};
