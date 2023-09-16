import { Button } from "../../atoms/Button";
import { useState } from "react";
import { LeagueOverview } from "./LeagueOverview";
import { LeagueResults } from "./LeagueResults";
import { TopScorerSelecter } from "./TopScorerSelecter";
import { Teams } from "./Teams";

export const Selecter = ({
    latestGames,
    standings,
    pagenateGames,
    setPage,
    lastPage,
    currentPage,
    paginateLoading,
    rankings,
    teams,
}) => {
    const [selectedTab, setSelectedTab] = useState("informations");

    const handleInformationsClick = () => {
        setSelectedTab("informations");
    };

    const handleResultsClick = () => {
        setSelectedTab("results");
    };

    const handleStandingsClick = () => {
        setSelectedTab("standings");
    };

    const handleTeamsClick = () => {
        setSelectedTab("teams");
    };

    return (
        <>
            <div className="bg-gradient-to-r from-[#1d2233] rounded-b h-12 flex items-center justify-center space-x-16">
                <Button
                    onClick={handleInformationsClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "informations"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    概要
                </Button>
                <Button
                    onClick={handleResultsClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "results"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    日程・結果
                </Button>
                <Button
                    onClick={handleStandingsClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "standings"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    順位表
                </Button>
                <Button
                    onClick={handleTeamsClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "teams"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    チーム
                </Button>
            </div>
            {selectedTab === "informations" && (
                <LeagueOverview
                    latestGames={latestGames}
                    standings={standings}
                />
            )}
            {selectedTab === "results" && (
                <LeagueResults
                    pagenateGames={pagenateGames}
                    setPage={setPage}
                    lastPage={lastPage}
                    currentPage={currentPage}
                    paginateLoading={paginateLoading}
                />
            )}
            {selectedTab === "standings" && (
                <TopScorerSelecter standings={standings} rankings={rankings} />
            )}
            {selectedTab === "teams" && <Teams teams={teams} />}
        </>
    );
};
