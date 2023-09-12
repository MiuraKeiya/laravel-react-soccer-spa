import { useState } from "react";
import { Button } from "../../atoms/Button";
import { Stats } from "./Stats";

export const Selecter = ({ games }) => {
    const [selectedTab, setSelectedTab] = useState("stats");

    const handleStatsClick = () => {
        setSelectedTab("stats");
    };

    const handleProgressClick = () => {
        setSelectedTab("progress");
    };

    const handleRatingClick = () => {
        setSelectedTab("rating");
    };

    const handleStandingsClick = () => {
        setSelectedTab("ranking");
    };

    const handlePredictionsClick = () => {
        setSelectedTab("predictions");
    };

    return (
        <>
            <div className="bg-gradient-to-r from-[#1d2233] rounded-b h-12 flex items-center justify-center space-x-14">
                <Button
                    onClick={handleStatsClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "stats"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    スタッツ
                </Button>
                <Button
                    onClick={handleProgressClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "progress"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    試合経過
                </Button>
                <Button
                    onClick={handleRatingClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "rating"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    レーティング
                </Button>
                <Button
                    onClick={handleStandingsClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "ranking"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    順位表
                </Button>
                <Button
                    onClick={handlePredictionsClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "predictions"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    統計
                </Button>
            </div>
            {selectedTab === "stats" && <Stats games={games} />}
        </>
    );
};
