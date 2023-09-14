import { useState } from "react";
import { Button } from "../../../atoms/Button";
import { StandingsAll } from "./StandingsAll";
import { StandingsHome } from "./StandingsHome";
import { StandingsAway } from "./StandingsAway";

export const StandingsSelecter = ({ standings, teamIds }) => {
    const [selectedTab, setSelectedTab] = useState("all");

    const handleStandingsAllClick = () => {
        setSelectedTab("all");
    };

    const handleStandingsHomeClick = () => {
        setSelectedTab("home");
    };

    const handleStandingsAwayClick = () => {
        setSelectedTab("away");
    };

    return (
        <>
            <div className="bg-[#1d2233] rounded-t h-12 flex items-center space-x-11 mt-2">
                <Button
                    onClick={handleStandingsAllClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ml-6 ${
                        selectedTab === "all"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    オール
                </Button>
                <Button
                    onClick={handleStandingsHomeClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "home"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    ホーム
                </Button>
                <Button
                    onClick={handleStandingsAwayClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "away"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    アウェイ
                </Button>
            </div>
            {selectedTab === "all" && (
                <StandingsAll standings={standings} teamIds={teamIds} />
            )}
            {selectedTab === "home" && (
                <StandingsHome standings={standings} teamIds={teamIds} />
            )}
            {selectedTab === "away" && (
                <StandingsAway standings={standings} teamIds={teamIds} />
            )}
        </>
    );
};
