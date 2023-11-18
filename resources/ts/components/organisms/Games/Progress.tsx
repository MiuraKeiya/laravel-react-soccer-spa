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
                    style={`text-[15px] font-bold rounded-lg px-2 py-1 ml-6 ${
                        selectedTab === "events"
                            ? "bg-[#7A84FF] text-[#7A84FF] cursor-default bg-opacity-20 border border-[#7A84FF] transition-all duration-300"
                            : "bg-[#10161c] text-[#C8CDCD] hover:bg-[#7A84FF] border border-black hover:bg-opacity-20 hover:border hover:border-[#1d2233] transition-all duration-300"
                    }`}
                >
                    イベント
                </Button>
                <Button
                    onClick={handleMembersClick}
                    style={`text-[15px] font-bold rounded-lg px-2 py-1 ${
                        selectedTab === "members"
                            ? "bg-[#7A84FF] text-[#7A84FF] cursor-default bg-opacity-20 border border-[#7A84FF] transition-all duration-300"
                            : "bg-[#10161c] text-[#C8CDCD] hover:bg-[#7A84FF] border border-black hover:bg-opacity-20 hover:border hover:border-[#1d2233] transition-all duration-300"
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
