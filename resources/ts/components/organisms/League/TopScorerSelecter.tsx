import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../atoms/Button";
import { StandingsSelecter } from "../Team/Standing/StandingsSelecter";
import { RankingSelecter } from "./RankingSelecter";
import { SeasonSelecter } from "../../molecules/SeasonSelecter";

export const TopScorerSelecter = ({
    standings,
    rankings,
    loading,
    rankingsLoading,
    maxSeason,
}) => {
    const { id, season } = useParams();

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
                        style={`text-[15px] font-bold rounded px-2 py-1 ml-6 ${
                            selectedTab === "standings"
                                ? "bg-[#B0EE1B] text-black cursor-default"
                                : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                        }`}
                    >
                        順位表
                    </Button>
                    <Button
                        onClick={handleTopScorerClick}
                        style={`text-[15px] font-bold rounded px-2 py-1 ${
                            selectedTab === "topScorer"
                                ? "bg-[#B0EE1B] text-black cursor-default"
                                : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                        }`}
                    >
                        得点王
                    </Button>
                </div>
                <SeasonSelecter id={id} season={season} />
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
