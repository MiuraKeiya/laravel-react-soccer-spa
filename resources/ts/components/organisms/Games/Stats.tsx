import { useState } from "react";
import { Button } from "../../atoms/Button";
import { TeamsStats } from "./TeamsStats";
import { PlayersStats } from "./PlayersStats";

export const Stats = ({ games, loading }) => {
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
                    style={`text-[15px] font-bold rounded px-2 py-1 ml-6 ${
                        selectedTab === "teams"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    チームスタッツ
                </Button>
                <Button
                    onClick={handlePlayersClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "players"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    選手スタッツ
                </Button>
            </div>
            {selectedTab === "teams" && (
                <TeamsStats games={games} loading={loading} />
            )}
            {selectedTab === "players" && <PlayersStats games={games} />}
        </>
    );
};
