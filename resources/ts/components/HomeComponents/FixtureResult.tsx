import { useState } from "react";
import { MatchSchedule } from "./MatchSchedule";
import { EndMatch } from "./EndMatch";
import { Schedule } from "./Schedule";

export const FixtureResult = () => {
    // 選択したタブ
    const [selectedTab, setSelectedTab] = useState("all");

    // 全試合表示
    const handleAllGamesClick = () => {
        setSelectedTab("all");
    };

    // 終了した試合表示
    const handleEndGamesClick = () => {
        setSelectedTab("end");
    };

    // 開催予定表示
    const handleScheduleClick = () => {
        setSelectedTab("schedule");
    };

    return (
        <main className="flex-grow border border-yellow-500 rounded-md bg-[#1d2233]">
            <div className="flex items-center space-x-2 mt-2 ml-2">
                <button
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "all"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                    onClick={handleAllGamesClick}
                >
                    全試合
                </button>
                <button
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "end"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                    onClick={handleEndGamesClick}
                >
                    終了した試合
                </button>
                <button
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "schedule"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                    onClick={handleScheduleClick}
                >
                    開催予定
                </button>
            </div>
            {selectedTab === "all" && <MatchSchedule />}
            {selectedTab === "end" && <EndMatch />}
            {selectedTab === "schedule" && <Schedule />}
        </main>
    );
};
