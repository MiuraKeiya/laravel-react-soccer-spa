import { useState } from "react";
import { MatchAllRankings } from "./MatchAllRankings";
import { MatchHomeRankings } from "./MatchHomeRankings";

export const RankingsSelecter = () => {
    const [selectedTab, setSelectedTab] = useState("all");

    const handleAllClick = () => {
        setSelectedTab("all");
    };

    const handleHomeClick = () => {
        setSelectedTab("home");
    };

    const handleAwayClick = () => {
        setSelectedTab("away");
    };

    return (
        <div>
            <div className="flex items-center space-x-4 ml-5 py-3">
                <button
                    onClick={handleAllClick}
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "all"
                            ? "text-[#B0EE1B] cursor-default"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    オール
                </button>
                <button
                    onClick={handleHomeClick}
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "home"
                            ? "text-[#B0EE1B] cursor-default"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    ホーム
                </button>
                <button
                    onClick={handleAwayClick}
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "away"
                            ? "text-[#B0EE1B] cursor-default"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    アウェイ
                </button>
            </div>
            {selectedTab === "all" && <MatchAllRankings />}
            {selectedTab === "home" && <MatchHomeRankings />}
        </div>
    );
};
