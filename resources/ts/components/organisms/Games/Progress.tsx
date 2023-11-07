import { useState } from "react";
import { Button } from "../../atoms/Button";
import { Events } from "./Events";
import { Members } from "./Members";

export const Progress = ({ games, maxSeason }) => {
    const [selectedTab, setSelectedTab] = useState("events");

    const handleEventsClick = () => {
        setSelectedTab("events");
    };

    const handleMembersClick = () => {
        setSelectedTab("members");
    };

    return (
        <>
            <div className="bg-[#1d2233] rounded-t h-12 flex items-center space-x-11 mt-2">
                <Button
                    onClick={handleEventsClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ml-6 ${
                        selectedTab === "events"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    イベント
                </Button>
                <Button
                    onClick={handleMembersClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "members"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    メンバー
                </Button>
            </div>
            {selectedTab === "events" && (
                <Events games={games} maxSeason={maxSeason} />
            )}
            {selectedTab === "members" && (
                <Members games={games} maxSeason={maxSeason} />
            )}
        </>
    );
};
