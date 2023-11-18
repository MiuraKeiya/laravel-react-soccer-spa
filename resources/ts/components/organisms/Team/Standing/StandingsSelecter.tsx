import { useState } from "react";
import { Button } from "../../../atoms/Button";
import { StandingsAll } from "./StandingsAll";
import { StandingsHome } from "./StandingsHome";
import { StandingsAway } from "./StandingsAway";

export const StandingsSelecter = ({
    standings,
    teamIds,
    maxSeason,
    loading,
}) => {
    const [selectedTab, setSelectedTab] = useState("all");

    const handleStandingsAllClick = () => {
        setSelectedTab("all");
    };

    const handleStandingsHomeClick = () => {
        setSelectedTab("home");
    };

    const handleStandingsAwayClick = () => {
        setSelectedTab("away");
    };

    return (
        <>
            <div className="bg-[#1d2233] rounded-t h-12 flex items-center space-x-11 mt-2">
                <Button
                    onClick={handleStandingsAllClick}
                    style={`text-[15px] font-bold rounded-lg px-2 py-1 ml-6 ${
                        selectedTab === "all"
                            ? "bg-[#7A84FF] text-[#7A84FF] cursor-default bg-opacity-20 border border-[#7A84FF] transition-all duration-300"
                            : "bg-[#10161c] text-[#C8CDCD] hover:bg-[#7A84FF] border border-black hover:bg-opacity-20 hover:border hover:border-[#1d2233] transition-all duration-300"
                    }`}
                >
                    オール
                </Button>
                <Button
                    onClick={handleStandingsHomeClick}
                    style={`text-[15px] font-bold rounded-lg px-2 py-1 ${
                        selectedTab === "home"
                            ? "bg-[#7A84FF] text-[#7A84FF] cursor-default bg-opacity-20 border border-[#7A84FF] transition-all duration-300"
                            : "bg-[#10161c] text-[#C8CDCD] hover:bg-[#7A84FF] border border-black hover:bg-opacity-20 hover:border hover:border-[#1d2233] transition-all duration-300"
                    }`}
                >
                    ホーム
                </Button>
                <Button
                    onClick={handleStandingsAwayClick}
                    style={`text-[15px] font-bold rounded-lg px-2 py-1 ${
                        selectedTab === "away"
                            ? "bg-[#7A84FF] text-[#7A84FF] cursor-default bg-opacity-20 border border-[#7A84FF] transition-all duration-300"
                            : "bg-[#10161c] text-[#C8CDCD] hover:bg-[#7A84FF] border border-black hover:bg-opacity-20 hover:border hover:border-[#1d2233] transition-all duration-300"
                    }`}
                >
                    アウェイ
                </Button>
            </div>
            {selectedTab === "all" && (
                <StandingsAll
                    standings={standings}
                    teamIds={teamIds}
                    maxSeason={maxSeason}
                    loading={loading}
                />
            )}
            {selectedTab === "home" && (
                <StandingsHome
                    standings={standings}
                    teamIds={teamIds}
                    maxSeason={maxSeason}
                    loading={loading}
                />
            )}
            {selectedTab === "away" && (
                <StandingsAway
                    standings={standings}
                    teamIds={teamIds}
                    maxSeason={maxSeason}
                    loading={loading}
                />
            )}
        </>
    );
};
