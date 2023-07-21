import { useState } from "react";
import { Standings } from "./Standings";
import { HomeRanking } from "./HomeRanking";
import { AwayRanking } from "./AwayRanking";

export const StandingsSelecter = () => {
    const [selectedTab, setSelectedTab] = useState("all");

    const handleAllClick = () => {
        setSelectedTab("all");
    };

    const handleHomeClick = () => {
        setSelectedTab("home");
    };

    const handleAwayClick = () => {
        setSelectedTab("away");
    };

    return (
        <div className="mt-3">
            <div className="bg-[#111931] py-1">
                <div className="flex space-x-5 text-[12px] font-bold ml-2">
                    <button
                        className={`${
                            selectedTab === "all"
                                ? "text-[#B0EE1B] cursor-default underline"
                                : "text-[#C8CDCD] hover:text-[#FFFFFF] cursor-pointer"
                        }`}
                        onClick={handleAllClick}
                    >
                        オール
                    </button>
                    <button
                        className={`${
                            selectedTab === "home"
                                ? "text-[#B0EE1B] cursor-default underline"
                                : "text-[#C8CDCD] hover:text-[#FFFFFF] cursor-pointer"
                        }`}
                        onClick={handleHomeClick}
                    >
                        ホーム
                    </button>
                    <button
                        className={`${
                            selectedTab === "away"
                                ? "text-[#B0EE1B] cursor-default underline"
                                : "text-[#C8CDCD] hover:text-[#FFFFFF] cursor-pointer"
                        }`}
                        onClick={handleAwayClick}
                    >
                        アウェイ
                    </button>
                </div>
            </div>
            <div>
                {selectedTab === "all" && <Standings />}
                {selectedTab === "home" && <HomeRanking />}
                {selectedTab === "away" && <AwayRanking />}
            </div>
        </div>
    );
};
