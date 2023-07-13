import { useState } from "react";
import { TeamStats } from "./TeamStats";
import { PlayerStats } from "./PlayerStats";

export const StatsSelecter = () => {
    const [selectedTab, setSelectedTab] = useState("team");

    const handleEventsClick = () => {
        setSelectedTab("team");
    };

    const handleMembersClick = () => {
        setSelectedTab("player");
    };

    return (
        <div>
            <div className="flex items-center space-x-5 ml-5 py-4">
                <div
                    onClick={handleEventsClick}
                    className={`text-[12px] font-bold ${
                        selectedTab === "team"
                            ? "text-[#B0EE1B] cursor-default underline"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF] cursor-pointer"
                    }`}
                >
                    チームスタッツ
                </div>
                <div
                    onClick={handleMembersClick}
                    className={`text-[12px] font-bold ${
                        selectedTab === "player"
                            ? "text-[#B0EE1B] cursor-default underline"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF] cursor-pointer"
                    }`}
                >
                    選手スタッツ
                </div>
            </div>
            {selectedTab === "team" && <TeamStats />}
            {selectedTab === "player" && <PlayerStats />}
        </div>
    );
};
