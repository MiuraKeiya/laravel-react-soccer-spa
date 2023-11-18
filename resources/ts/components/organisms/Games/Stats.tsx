import { useState } from "react";
import { Button } from "../../atoms/Button";
import { TeamsStats } from "./TeamsStats";
import { PlayersStats } from "./PlayersStats";

export const Stats = ({ games, loading, maxSeason }) => {
    const [selectedTab, setSelectedTab] = useState("teams");

    const handleTeamsClick = () => {
        setSelectedTab("teams");
    };

    const handlePlayersClick = () => {
        setSelectedTab("players");
    };

    return (
        <>
            <div className="bg-[#1d2233] rounded-t h-12 flex items-center space-x-11 mt-2">
                <Button
                    onClick={handleTeamsClick}
                    style={`text-[15px] font-bold rounded-lg px-2 py-1 ml-6 ${
                        selectedTab === "teams"
                            ? "bg-[#7A84FF] text-[#7A84FF] cursor-default bg-opacity-20 border border-[#7A84FF] transition-all duration-300"
                            : "bg-[#10161c] text-[#C8CDCD] hover:bg-[#7A84FF] border border-black hover:bg-opacity-20 hover:border hover:border-[#1d2233] transition-all duration-300"
                    }`}
                >
                    チームスタッツ
                </Button>
                <Button
                    onClick={handlePlayersClick}
                    style={`text-[15px] font-bold rounded-lg px-2 py-1 ${
                        selectedTab === "players"
                            ? "bg-[#7A84FF] text-[#7A84FF] cursor-default bg-opacity-20 border border-[#7A84FF] transition-all duration-300"
                            : "bg-[#10161c] text-[#C8CDCD] hover:bg-[#7A84FF] border border-black hover:bg-opacity-20 hover:border hover:border-[#1d2233] transition-all duration-300"
                    }`}
                >
                    選手スタッツ
                </Button>
            </div>
            {selectedTab === "teams" && (
                <TeamsStats games={games} loading={loading} />
            )}
            {selectedTab === "players" && (
                <PlayersStats games={games} maxSeason={maxSeason} />
            )}
        </>
    );
};
