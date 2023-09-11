import { Button } from "../../atoms/Button";
import { useState } from "react";
import { Statistics } from "./Statistics";
import { Squad } from "./Squad/Squad";
import { StandingsSelecter } from "./Standing/StandingsSelecter";
import { Games } from "./Game/Games";

export const Selecter = ({
    informations,
    games,
    setPage,
    lastPage,
    currentPage,
    squad,
    standings,
    id,
}) => {
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

    const handleTransferClick = () => {
        setSelectedTab("transfer");
    };

    return (
        <>
            <div className="bg-gradient-to-r from-[#1d2233] rounded-b h-12 flex items-center justify-center space-x-16">
                <Button
                    onClick={handleScheduleResultsClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "scheduleResults"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    日程・結果
                </Button>
                <Button
                    onClick={handleStatisticsClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "statistics"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    統計
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
                    onClick={handlePlayersClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "players"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    選手一覧
                </Button>
                <Button
                    onClick={handleTransferClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "transfer"
                            ? "text-[#B0EE1B] cursor-default border-b-2 border-[#B0EE1B]"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF]"
                    }`}
                >
                    移籍情報
                </Button>
            </div>
            {selectedTab === "scheduleResults" && (
                <Games
                    games={games}
                    setPage={setPage}
                    lastPage={lastPage}
                    currentPage={currentPage}
                />
            )}
            {selectedTab === "statistics" && (
                <Statistics informations={informations} />
            )}
            {selectedTab === "players" && <Squad squad={squad} />}
            {selectedTab === "standings" && (
                <StandingsSelecter standings={standings} id={id} />
            )}
        </>
    );
};
