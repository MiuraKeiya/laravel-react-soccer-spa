import { useState } from "react";
import { Button } from "../../atoms/Button";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
import { AllGames } from "./AllGames";
import { EndGames } from "./EndGames";
import { ScheduleGames } from "./ScheduleGames";
import { SkeletonDatePicker } from "../../molecules/SkeletonDatePicker";

export const GamesSelecter = ({
    maxSeason,
    highlightedDates,
    startDate,
    handleDateChange,
    gamesDateloading,
    games,
    gamesLoading,
}) => {
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
            <div className="bg-[#1d2233] rounded-t h-10 md:h-12 lg:h-12 flex items-center justify-between">
                <div className="flex items-center space-x-3 lg:space-x-8">
                    <Button
                        onClick={handleAllClick}
                        style={`lg:text-[15px] text-[12px] font-bold rounded px-2 py-1 ml-1 lg:ml-6 ${
                            selectedTab === "all"
                                ? "bg-[#B0EE1B] text-black cursor-default"
                                : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                        }`}
                    >
                        全ての試合
                    </Button>
                    <Button
                        onClick={handleEndClick}
                        style={`lg:text-[15px] text-[12px] font-bold rounded px-2 py-1 ${
                            selectedTab === "end"
                                ? "bg-[#B0EE1B] text-black cursor-default"
                                : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                        }`}
                    >
                        終了した試合
                    </Button>
                    <Button
                        onClick={handleScheduleClick}
                        style={`lg:text-[15px] text-[12px] font-bold rounded px-2 py-1 ${
                            selectedTab === "schedule"
                                ? "bg-[#B0EE1B] text-black cursor-default"
                                : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                        }`}
                    >
                        開催予定
                    </Button>
                </div>
                {gamesDateloading ? (
                    <div className="mr-1 lg:mr-6">
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
                        className="bg-black text-[#EEEEEE] rounded-md cursor-pointer text-center text-[13px] font-bold py-1 mr-1 lg:mr-6 w-24 md:w-36 lg:w-36"
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
