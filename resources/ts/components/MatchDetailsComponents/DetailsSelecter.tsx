import { useState } from "react";

export const DetailsSelecter = () => {
    const [selectedTab, setSelectedTab] = useState("teamInfo");

    const handleMatchinformationClick = () => {
        setSelectedTab("teamInfo");
    };

    const handleMatchprogressClick = () => {
        setSelectedTab("schedule");
    };

    const handlestandingsClick = () => {
        setSelectedTab("players");
    };

    const handleRatingClick = () => {
        setSelectedTab("Rating");
    };

    const handlePredictionsClick = () => {
        setSelectedTab("predictions");
    };

    return (
        <div>
            <div className="flex space-x-4 mt-2 mb-2 ml-3">
                <button
                    onClick={handleMatchinformationClick}
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "teamInfo"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    スタッツ
                </button>
                <button
                    onClick={handleMatchprogressClick}
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "schedule"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    試合経過
                </button>
                <button
                    onClick={handleRatingClick}
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "Rating"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    レーティング
                </button>
                <button
                    onClick={handlestandingsClick}
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "players"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    順位表
                </button>
                <button
                    onClick={handlePredictionsClick}
                    className={`text-[12px] font-bold rounded px-2 py-1 ${
                        selectedTab === "predictions"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    統計
                </button>
            </div>
            <div className="border-b border-[#111931]"></div>
            <div>dsdsds</div>
        </div>
    );
};
