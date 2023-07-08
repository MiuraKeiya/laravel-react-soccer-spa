import { useContext, useEffect, useState } from "react";
import { DatePickerContext } from "../../provider/DatePickerProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FixtureResultDate = () => {
    // 日付を取得
    const { fixtureDate, setFixtureDate } = useContext(DatePickerContext);

    const [startDate, setStartDate] = useState(new Date());
    const [highlightedDates, setHighlightedDates] = useState([]);

    // fixtureDateが更新されたときに実行
    useEffect(() => {
        if (fixtureDate) {
            const dates = fixtureDate.map((item) => new Date(item.date));
            // 初期値セット
            setStartDate(dates[0]);
            setHighlightedDates(dates);
        }
    }, [fixtureDate]);

    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            highlightDates={highlightedDates}
        />
    );
};
