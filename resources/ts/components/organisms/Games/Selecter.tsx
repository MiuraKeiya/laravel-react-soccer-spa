import { useState } from "react";
import { Button } from "../../atoms/Button";
import { Stats } from "./Stats";
import { Progress } from "./Progress";
import { TopPlayers } from "./TopPlayers";
import { StandingsSelecter } from "../Team/Standing/StandingsSelecter";

export const Selecter = ({
    games,
    standings,
    teamIds,
    loading,
    maxSeason,
    standingsLoading,
}) => {
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
        setSelectedTab("standings");
    };

    return (
        <>
            <div className="bg-gradient-to-r from-[#1d2233] rounded-b h-12 flex items-center justify-center sm:space-x-14 space-x-3">
                <Button
                    onClick={handleStatsClick}
                    style={`sm:text-[15px] text-[14px] font-bold rounded px-2 py-1 ${
                        selectedTab === "stats"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    スタッツ
                </Button>
                <Button
                    onClick={handleProgressClick}
                    style={`sm:text-[15px] text-[14px] font-bold rounded px-2 py-1 ${
                        selectedTab === "progress"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    試合経過
                </Button>
                <Button
                    onClick={handleRatingClick}
                    style={`sm:text-[15px] text-[14px] font-bold rounded px-2 py-1 ${
                        selectedTab === "rating"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    レーティング
                </Button>
                <Button
                    onClick={handleStandingsClick}
                    style={`sm:text-[15px] text-[14px] font-bold rounded px-2 py-1 ${
                        selectedTab === "standings"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    順位表
                </Button>
            </div>
            {selectedTab === "stats" && (
                <Stats games={games} loading={loading} maxSeason={maxSeason} />
            )}
            {selectedTab === "progress" && (
                <Progress games={games} maxSeason={maxSeason} />
            )}
            {selectedTab === "rating" && (
                <TopPlayers games={games} maxSeason={maxSeason} />
            )}
            {selectedTab === "standings" && (
                <StandingsSelecter
                    standings={standings}
                    teamIds={teamIds}
                    maxSeason={maxSeason}
                    loading={standingsLoading}
                />
            )}
        </>
    );
};
