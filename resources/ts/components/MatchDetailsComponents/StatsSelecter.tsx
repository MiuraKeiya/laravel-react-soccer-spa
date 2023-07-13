import { useState } from "react";
import { TeamStats } from "./TeamStats";

export const StatsSelecter = () => {
    const [selectedTab, setSelectedTab] = useState("events");

    const handleEventsClick = () => {
        setSelectedTab("events");
    };

    const handleMembersClick = () => {
        setSelectedTab("members");
    };

    return (
        <div>
            <div className="flex items-center space-x-5 ml-5 py-4">
                <div
                    onClick={handleEventsClick}
                    className={`text-[12px] font-bold ${
                        selectedTab === "events"
                            ? "text-[#B0EE1B] cursor-default underline"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF] cursor-pointer"
                    }`}
                >
                    チームスタッツ
                </div>
                <div
                    onClick={handleMembersClick}
                    className={`text-[12px] font-bold ${
                        selectedTab === "members"
                            ? "text-[#B0EE1B] cursor-default underline"
                            : "text-[#C8CDCD] hover:text-[#FFFFFF] cursor-pointer"
                    }`}
                >
                    選手スタッツ
                </div>
            </div>
            {selectedTab === "events" && <TeamStats />}
        </div>
    );
};
