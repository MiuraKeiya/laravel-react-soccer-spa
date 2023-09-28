import { useEffect, useState } from "react";
import { useGamesDateApi } from "./useGamesDateApi";

export const useDatePicker = () => {
    const { gamesDate, gamesDateloading } = useGamesDateApi();

    const [startDate, setStartDate] = useState(new Date());

    const [highlightedDates, setHighlightedDates] = useState([]);

    const [selectedDate, setSelectedDate] = useState("");
console.log(1)
    useEffect(() => {
        if (!gamesDateloading) {
            const dates = gamesDate.map((item) => new Date(item.date));
            
            setSelectedDate(formatDate(new Date()));

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
