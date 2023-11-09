import { useParams } from "react-router-dom";
import { Button } from "../../atoms/Button";
import { useState } from "react";
import { LeagueOverview } from "./LeagueOverview";
import { LeagueResults } from "./LeagueResults";
import { Teams } from "./Teams";
import { SeasonSelecter } from "../../molecules/SeasonSelecter";
import { LeagueTopScorerSelecter } from "./LeagueTopScoreSelecter";
import { SkeletonAtom } from "../../atoms/SkeletonAtom";

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
    latestGamesLoading,
    standingsLoading,
    teamsLoading,
    maxSeason,
    rankingsLoading,
    loading,
}) => {
    const { id, season } = useParams();

    const [selectedTab, setSelectedTab] = useState("informations");

    // 複数のローディングフラグを結合して評価
    const isAnyLoading =
        paginateLoading ||
        latestGamesLoading ||
        standingsLoading ||
        teamsLoading;

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
            <div className="bg-gradient-to-r from-[#1d2233] rounded-b h-14 flex items-center justify-center lg:space-x-16">
                <Button
                    onClick={handleInformationsClick}
                    style={`lg:text-[15px] text-[13px] font-bold rounded px-2 py-1 ${
                        selectedTab === "informations"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    概要
                </Button>
                <Button
                    onClick={handleResultsClick}
                    style={`lg:text-[15px] text-[13px] font-bold rounded px-2 py-1 ${
                        selectedTab === "results"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    日程・結果
                </Button>
                <Button
                    onClick={handleStandingsClick}
                    style={`lg:text-[15px] text-[13px] font-bold rounded px-2 py-1 ${
                        selectedTab === "standings"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    順位表
                </Button>
                <Button
                    onClick={handleTeamsClick}
                    style={`lg:text-[15px] text-[13px] font-bold rounded px-2 py-1 ${
                        selectedTab === "teams"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    チーム
                </Button>
                {isAnyLoading ? (
                    <div>
                        <SkeletonAtom
                            variant={"text"}
                            width={90}
                            height={65}
                            backgroundColor={"#4b5563"}
                            borderRadius={""}
                        />
                    </div>
                ) : (
                    <SeasonSelecter
                        baseRoute={"/league"}
                        id={id}
                        season={season}
                    />
                )}
            </div>
            {selectedTab === "informations" && (
                <LeagueOverview
                    latestGames={latestGames}
                    standings={standings}
                    latestGamesLoading={latestGamesLoading}
                    standingsLoading={standingsLoading}
                    maxSeason={maxSeason}
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
                <LeagueTopScorerSelecter
                    standings={standings}
                    rankings={rankings}
                    maxSeason={maxSeason}
                    rankingsLoading={rankingsLoading}
                    loading={loading}
                />
            )}
            {selectedTab === "teams" && (
                <Teams
                    teams={teams}
                    loading={teamsLoading}
                    maxSeason={maxSeason}
                />
            )}
        </>
    );
};
