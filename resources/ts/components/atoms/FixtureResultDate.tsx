import { useContext, useEffect, useState } from "react";
import { DatePickerContext } from "../../provider/DatePickerProvider";
import { FixtureResultContext } from "../../provider/FixtureResultProvider";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from 'date-fns/locale/ja';

export const FixtureResultDate = () => {
    // 今シーズンの日付を取得
    const { fixtureDate } = useContext(DatePickerContext);

    const { setDate, error } = useContext(FixtureResultContext);

    const [startDate, setStartDate] = useState(new Date());
    const [highlightedDates, setHighlightedDates] = useState([]);
  
    registerLocale('ja', ja);

    // fixtureDateが更新されたときに実行
    useEffect(() => {
        if (fixtureDate) {
            const dates = fixtureDate.map((item) => new Date(item.date));
            // 初期値セット
            setStartDate(dates[0]);
            setHighlightedDates(dates);
            setDate(dates[0]);
        }
    }, [fixtureDate]);

    // 日付が選択されたときのコールバック関数
    const handleDateChange = (date) => {
        setStartDate(date);
        setDate(date);
    };

    return (
        <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            highlightDates={highlightedDates}
            popperPlacement="top-end"
            locale='ja'
            className="bg-black text-[#C8CDCD] rounded-md cursor-pointer text-center text-[12px] font-bold py-1"
        />
    );
};
