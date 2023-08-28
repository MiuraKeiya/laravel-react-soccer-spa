import { useState } from "react";
import { StandingsButton } from "../../molecules/StandingsButton";
import { Select } from "../../atoms/select";
export const StandingsSelecter = () => {
    // 選択したタブ
    const [selectedTab, setSelectedTab] = useState("standings");

    // 順位一覧をを表示
    const handleStandigsClick = () => {
        setSelectedTab("standings");
    };

    // 得点王一覧を表示
    const handleRankingsClick = () => {
        setSelectedTab("rankings");
    };

    return (
        <>
            <StandingsButton
                style={""}
                standingsStyle={`text-[12px] font-bold rounded px-2 py-1 ${
                    selectedTab === "standings"
                        ? "bg-[#B0EE1B] text-black cursor-default"
                        : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                }`}
                rankingsStyle={`text-[12px] font-bold rounded px-2 py-1 ${
                    selectedTab === "rankings"
                        ? "bg-[#B0EE1B] text-black cursor-default"
                        : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                }`}
                onStandingsClick={handleStandigsClick}
                onRankingsClick={handleRankingsClick}
            />
            <Select />
        </>
    );
};
