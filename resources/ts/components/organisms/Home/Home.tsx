import { useContext } from "react";
import { useGamesApi } from "../../../hooks/useGamesApi";
import { DatePickerContext } from "../../../context/DatePickerContext";
import { GamesSelecter } from "./GamesSelecter";
import { HomeInformations } from "./HomeInformations";

export const Home = () => {
    const { selectedDate } = useContext(DatePickerContext);

    // 日付ごとの試合を取得
    const { games } = useGamesApi(selectedDate);

    return (
        <div>
            <div className="mt-6">
                <HomeInformations />
            </div>
            <div className="mt-1 mb-6">
                <GamesSelecter games={games} />
            </div>
        </div>
    );
};
