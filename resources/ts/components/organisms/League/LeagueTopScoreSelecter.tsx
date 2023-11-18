import { useState } from "react";
import { Button } from "../../atoms/Button";
import { StandingsSelecter } from "../Team/Standing/StandingsSelecter";
import { RankingSelecter } from "./RankingSelecter";

export const LeagueTopScorerSelecter = ({
    standings,
    rankings,
    loading,
    rankingsLoading,
    maxSeason,
}) => {
    const [selectedTab, setSelectedTab] = useState("standings");

    const handleStandingsClick = () => {
        setSelectedTab("standings");
    };

    const handleTopScorerClick = () => {
        setSelectedTab("topScorer");
    };

    return (
        <>
            <div className="bg-[#1d2233] rounded-t h-14 flex items-center mt-2 justify-between">
                <div className="flex items-center space-x-11">
                    <Button
                        onClick={handleStandingsClick}
                        style={`text-[15px] font-bold rounded-lg px-2 py-1 ml-6 ${
                            selectedTab === "standings"
                                ? "bg-[#7A84FF] text-[#7A84FF] cursor-default bg-opacity-20 border border-[#7A84FF]"
                                : "bg-[#10161c] text-[#C8CDCD] hover:bg-[#7A84FF] border border-black hover:bg-opacity-20 hover:border hover:border-[#1d2233] transition-all duration-300"
                        }`}
                    >
                        順位表
                    </Button>
                    <Button
                        onClick={handleTopScorerClick}
                        style={`text-[15px] font-bold rounded-lg px-2 py-1 ${
                            selectedTab === "topScorer"
                                ? "bg-[#7A84FF] text-[#7A84FF] cursor-default bg-opacity-20 border border-[#7A84FF]"
                                : "bg-[#10161c] text-[#C8CDCD] hover:bg-[#7A84FF] border border-black hover:bg-opacity-20 hover:border hover:border-[#1d2233] transition-all duration-300"
                        }`}
                    >
                        得点王
                    </Button>
                </div>
            </div>

            {selectedTab === "standings" && (
                <StandingsSelecter
                    standings={standings}
                    loading={loading}
                    maxSeason={maxSeason}
                />
            )}
            {selectedTab === "topScorer" && (
                <RankingSelecter
                    rankings={rankings}
                    rankingsLoading={rankingsLoading}
                    maxSeason={maxSeason}
                />
            )}
        </>
    );
};
