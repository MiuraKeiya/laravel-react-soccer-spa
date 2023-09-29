import { useState } from "react";
import { useGamesApi } from "../../../hooks/useGamesApi";
import { useDatePicker } from "../../../hooks/useDatePicker";
import { Button } from "../../atoms/Button";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
import { AllGames } from "./AllGames";
import { EndGames } from "./EndGames";
import { ScheduleGames } from "./ScheduleGames";
import { SkeletonDatePicker } from "../../molecules/SkeletonDatePicker";

export const GamesSelecter = ({ maxSeason }) => {
    const {
        selectedDate,
        highlightedDates,
        startDate,
        handleDateChange,
        gamesDateloading,
    } = useDatePicker();

    // 日付ごとの試合を取得
    const { games, gamesLoading } = useGamesApi(selectedDate);

    registerLocale("ja", ja);

    const [selectedTab, setSelectedTab] = useState("all");

    const handleAllClick = () => {
        setSelectedTab("all");
    };

    const handleEndClick = () => {
        setSelectedTab("end");
    };

    const handleScheduleClick = () => {
        setSelectedTab("schedule");
    };

    return (
        <>
            <div className="bg-[#1d2233] rounded-t h-12 flex items-center justify-between">
                <div className="flex items-center space-x-8">
                    <Button
                        onClick={handleAllClick}
                        style={`text-[15px] font-bold rounded px-2 py-1 ml-6 ${
                            selectedTab === "all"
                                ? "bg-[#B0EE1B] text-black cursor-default"
                                : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                        }`}
                    >
                        全ての試合
                    </Button>
                    <Button
                        onClick={handleEndClick}
                        style={`text-[15px] font-bold rounded px-2 py-1 ${
                            selectedTab === "end"
                                ? "bg-[#B0EE1B] text-black cursor-default"
                                : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                        }`}
                    >
                        終了した試合
                    </Button>
                    <Button
                        onClick={handleScheduleClick}
                        style={`text-[15px] font-bold rounded px-2 py-1 ${
                            selectedTab === "schedule"
                                ? "bg-[#B0EE1B] text-black cursor-default"
                                : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                        }`}
                    >
                        開催予定
                    </Button>
                </div>
                {gamesDateloading ? (
                    <div className="mr-6">
                        <SkeletonDatePicker />
                    </div>
                ) : (
                    <DatePicker
                        withPortal // モーダルで表示
                        closeOnScroll={true} // スクロールで閉じる
                        selected={startDate} // 選択された日付（stateで管理）
                        onChange={handleDateChange} // 日付が選択されたときのコールバック関数
                        highlightDates={highlightedDates} // ハイライトしたい日付の配列
                        popperPlacement="top-end" // カレンダーポップアップの表示位置
                        locale="ja" // 表示言語（日本語）
                        className="bg-black text-[#EEEEEE] rounded-md cursor-pointer text-center text-[13px] font-bold py-1 mr-6"
                    />
                )}
            </div>
            {selectedTab === "all" && (
                <AllGames
                    games={games}
                    loading={gamesLoading}
                    maxSeason={maxSeason}
                />
            )}
            {selectedTab === "end" && (
                <EndGames
                    games={games}
                    loading={gamesLoading}
                    maxSeason={maxSeason}
                />
            )}
            {selectedTab === "schedule" && (
                <ScheduleGames
                    games={games}
                    loading={gamesLoading}
                    maxSeason={maxSeason}
                />
            )}
        </>
    );
};
