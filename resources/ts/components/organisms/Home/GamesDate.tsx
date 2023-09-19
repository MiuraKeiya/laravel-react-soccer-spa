import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
import { GamesSelecter } from "./GamesSelecter";
import { useDatePicker } from "../../../hooks/useDatePicker";

export const GamesDate = () => {
    const { startDate, highlightedDates, selectedDate, handleDateChange } =
        useDatePicker();

    registerLocale("ja", ja);

    return (
        <GamesSelecter date={selectedDate}>
            <DatePicker
                selected={startDate} // 選択された日付（stateで管理）
                onChange={handleDateChange} // 日付が選択されたときのコールバック関数
                highlightDates={highlightedDates} // ハイライトしたい日付の配列
                popperPlacement="top-end" // カレンダーポップアップの表示位置
                locale="ja" // 表示言語（日本語）
                className="bg-black text-[#C8CDCD] rounded-md cursor-pointer text-center text-[12px] font-bold py-1"
            />
        </GamesSelecter>
    );
};
