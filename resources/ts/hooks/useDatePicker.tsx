import { useEffect, useState } from "react";
import { useGamesDateApi } from "./useGamesDateApi";
import { UseDatePickerResult } from "./types/apiTypes";

export const useDatePicker = (): UseDatePickerResult => {
    const { gamesDate, gamesDateloading, gamesDateError } = useGamesDateApi();

    const [startDate, setStartDate] = useState<Date>(new Date());

    const [highlightedDates, setHighlightedDates] = useState<Date[]>([]);

    const [selectedDate, setSelectedDate] = useState<string>("");

    useEffect(() => {
        if (!gamesDateloading) {
            const dates = gamesDate.map((item: any) => new Date(item.date));

            setSelectedDate(formatDate(new Date()));

            setHighlightedDates(dates);
        }
    }, [gamesDate]);

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
    };

    const handleDateChange = (date: Date) => {
        setStartDate(date);

        const formattedDate = formatDate(date);

        setSelectedDate(formattedDate);
    };

    return {
        startDate,
        highlightedDates,
        selectedDate,
        handleDateChange,
        gamesDateloading,
        gamesDateError,
    };
};
