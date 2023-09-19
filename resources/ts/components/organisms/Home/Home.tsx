import { useContext } from "react";
import { useGamesApi } from "../../../hooks/useGamesApi";
import { DatePickerContext } from "../../../context/DatePickerContext";
import { GamesSelecter } from "./GamesSelecter";
import { HomeInformations } from "./HomeInformations";
import config from "../../../config";
import { findMaxSeason } from "../../../functions/Utils";

export const Home = () => {
    const { selectedDate } = useContext(DatePickerContext);

    // 日付ごとの試合を取得
    const { games } = useGamesApi(selectedDate);

    // 最大のシーズンを取得
    const maxSeason = findMaxSeason(config);

    return (
        <div>
            <div className="mt-6">
                <HomeInformations />
            </div>
            <div className="mt-1 mb-6">
                <GamesSelecter games={games} maxSeason={maxSeason}/>
            </div>
        </div>
    );
};
