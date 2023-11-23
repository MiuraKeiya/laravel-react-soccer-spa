import { Button } from "../../atoms/Button";
import { useState } from "react";
import { Statistics } from "./Statistics";
import { Squad } from "./Squad/Squad";
import { StandingsSelecter } from "./Standing/StandingsSelecter";
import { Games } from "./Game/Games";
import { SeasonSelecter } from "../../molecules/SeasonSelecter";
import { SkeletonAtom } from "../../atoms/SkeletonAtom";

export const Selecter = ({
    informations,
    games,
    setPage,
    lastPage,
    currentPage,
    squad,
    standings,
    id,
    season,
    paginateLoading,
    teamLoading,
    standingsLoading,
    playersLoading,
    maxSeason,
}) => {
    // 複数のローディングフラグを結合して評価
    const isAnyLoading =
        paginateLoading || teamLoading || standingsLoading || playersLoading;

    const [selectedTab, setSelectedTab] = useState("scheduleResults");

    const handleScheduleResultsClick = () => {
        setSelectedTab("scheduleResults");
    };

    const handleStatisticsClick = () => {
        setSelectedTab("statistics");
    };

    const handleStandingsClick = () => {
        setSelectedTab("standings");
    };

    const handlePlayersClick = () => {
        setSelectedTab("players");
    };

    return (
        <>
            <div className="bg-gradient-to-br from-[#1d2233] rounded-b h-14 flex items-center justify-center lg:space-x-16">
                <Button
                    onClick={handleScheduleResultsClick}
                    style={`lg:text-[15px]  text-[11px] font-bold rounded px-2 py-1 ${
                        selectedTab === "scheduleResults"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    日程・結果
                </Button>
                <Button
                    onClick={handleStatisticsClick}
                    style={`lg:text-[15px]  text-[11px] font-bold rounded px-2 py-1 ${
                        selectedTab === "statistics"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    統計
                </Button>
                <Button
                    onClick={handleStandingsClick}
                    style={`lg:text-[15px]  text-[11px] font-bold rounded px-2 py-1 ${
                        selectedTab === "standings"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    順位表
                </Button>
                <Button
                    onClick={handlePlayersClick}
                    style={`lg:text-[15px]  text-[11px] font-bold rounded px-2 py-1 ${
                        selectedTab === "players"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    選手一覧
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
                        baseRoute={"/team"}
                        id={id}
                        season={season}
                    />
                )}
            </div>
            {selectedTab === "scheduleResults" && (
                <Games
                    games={games}
                    setPage={setPage}
                    lastPage={lastPage}
                    currentPage={currentPage}
                    paginateLoading={paginateLoading}
                    maxSeason={maxSeason}
                />
            )}
            {selectedTab === "statistics" && (
                <Statistics informations={informations} loading={teamLoading} />
            )}
            {selectedTab === "players" && (
                <Squad
                    squad={squad}
                    loading={playersLoading}
                    maxSeason={maxSeason}
                />
            )}
            {selectedTab === "standings" && (
                <StandingsSelecter
                    standings={standings}
                    teamIds={id}
                    loading={standingsLoading}
                    maxSeason={maxSeason}
                />
            )}
        </>
    );
};
