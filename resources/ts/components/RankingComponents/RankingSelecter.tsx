import { useContext, useState } from "react";
import { RankingContext } from "../../provider/RankingProvider";
import { StandingsSelecter } from "./StandingsSelecter";
import { SeasonSelecter } from "../atoms/SeasonSelecter";
import { PlayersScore } from "./PlayersScore";

export const RankingSelecter = () => {
    const { rankingData, error } = useContext(RankingContext);

    const [selectedTab, setSelectedTab] = useState("ranking");

    const handleRankingClick = () => {
        setSelectedTab("ranking");
    };

    const handleTopScorerClick = () => {
        setSelectedTab("topScorer");
    };

    return (
        <div className="mx-2">
            {rankingData.all && rankingData.all.response.length > 0 ? (
                rankingData.all.response.map((ranking, index) => (
                    <div key={index}>
                        <div className="flex items-center space-x-2 border-b border-[#111931] py-2">
                            <img
                                src={ranking.league.flag}
                                alt="Country Photo"
                                className="h-5 w-5"
                            />
                            <p className="text-[#C8CDCD] text-[13px] font-bold uppercase">
                                {ranking.league.country}: {ranking.league.name}
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <div className="flex space-x-3">
                                <button
                                    onClick={handleRankingClick}
                                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                                        selectedTab === "ranking"
                                            ? "bg-[#B0EE1B] text-black cursor-default"
                                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                                    }`}
                                >
                                    順位表
                                </button>
                                <button
                                    onClick={handleTopScorerClick}
                                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                                        selectedTab === "topScorer"
                                            ? "bg-[#B0EE1B] text-black cursor-default"
                                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                                    }`}
                                >
                                    得点王
                                </button>
                            </div>
                            <SeasonSelecter />
                        </div>
                        {selectedTab === "ranking" && <StandingsSelecter />}
                        {selectedTab === "topScorer" && <PlayersScore />}
                    </div>
                ))
            ) : (
                <div className="flex justify-center py-[10rem]">
                    <p className="text-[#8c9191] text-[13px] font-bold">
                        現在データは存在しません。
                    </p>
                </div>
            )}
        </div>
    );
};
