import { useState } from "react";
import { GamesButton } from "../../molecules/GamesButton";
import { useGamesApi } from "../../../hooks/useGamesApi";
import { AllGames } from "./AllGames";

export const GamesSelecter = ({ date }) => {
    console.log(date);
    const { games } = useGamesApi(date);

    // 選択したタブ
    const [selectedTab, setSelectedTab] = useState("all");

    // 全ての試合を表示
    const handleAllGamesClick = () => {
        setSelectedTab("all");
    };

    // 終了した試合を表示
    const handleFinishedGamesClick = () => {
        setSelectedTab("finished");
    };

    // 開催予定の試合を表示
    const handleScheduledGamesClick = () => {
        setSelectedTab("scheduled");
    };

    return (
        <>
            <GamesButton
                style={"flex space-x-2"}
                allGamesStyle={`text-[12px] font-bold rounded px-2 py-1 ${
                    selectedTab === "all"
                        ? "bg-[#B0EE1B] text-black cursor-default"
                        : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                }`}
                finishedStyle={`text-[12px] font-bold rounded px-2 py-1 ${
                    selectedTab === "finished"
                        ? "bg-[#B0EE1B] text-black cursor-default"
                        : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                }`}
                scheduledStyle={`text-[12px] font-bold rounded px-2 py-1 ${
                    selectedTab === "scheduled"
                        ? "bg-[#B0EE1B] text-black cursor-default"
                        : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                }`}
                onAllGamesClick={handleAllGamesClick}
                onFinishedGamesClick={handleFinishedGamesClick}
                onScheduledGamesClick={handleScheduledGamesClick}
            />
            {selectedTab === "all" && <AllGames games={games} />}
        </>
    );
};
