import { useState } from "react";
import { ProgressSelecter } from "./ProgressSelecter";
import { StatsSelecter } from "./StatsSelecter";
import { Rating } from "./Rating";
import { RankingsSelecter } from "./RankingsSelecter";

export const DetailsSelecter = () => {
    const [selectedTab, setSelectedTab] = useState("stats");

    const handleStatsClick = () => {
        setSelectedTab("stats");
    };

    const handleMatchProgressClick = () => {
        setSelectedTab("progress");
    };

    const handlestandingsClick = () => {
        setSelectedTab("ranking");
    };

    const handleRatingClick = () => {
        setSelectedTab("rating");
    };

    const handlePredictionsClick = () => {
        setSelectedTab("predictions");
    };

    return (
        <div>
            <div className="flex space-x-4 mt-2 mb-2 ml-3">
                <button
                    onClick={handleStatsClick}
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "stats"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    スタッツ
                </button>
                <button
                    onClick={handleMatchProgressClick}
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "progress"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    試合経過
                </button>
                <button
                    onClick={handleRatingClick}
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "rating"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    レーティング
                </button>
                <button
                    onClick={handlestandingsClick}
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "ranking"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    順位表
                </button>
                <button
                    onClick={handlePredictionsClick}
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "predictions"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    統計
                </button>
            </div>
            <div className="border-b border-[#111931]"></div>
            {selectedTab === "stats" && <StatsSelecter />}
            {selectedTab === "progress" && <ProgressSelecter />}
            {selectedTab === "rating" && <Rating />}
            {selectedTab === "ranking" && <RankingsSelecter />}
        </div>
    );
};
