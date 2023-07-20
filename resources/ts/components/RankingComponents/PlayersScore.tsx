import { useState } from "react";
import { TopScore } from "./TopScore";

export const PlayersScore = () => {
    const [selectedTab, setSelectedTab] = useState("score");

    const handleScoreClick = () => {
        setSelectedTab("score");
    };

    const handleYellowClick = () => {
        setSelectedTab("yellow");
    };

    const handleRedClick = () => {
        setSelectedTab("red");
    };

    return (
        <div className="mt-3">
            <div className="bg-[#111931] py-1">
                <div className="flex space-x-5 text-[12px] font-bold ml-2">
                    <button
                        className={`${
                            selectedTab === "score"
                                ? "text-[#B0EE1B] cursor-default underline"
                                : "text-[#C8CDCD] hover:text-[#FFFFFF] cursor-pointer"
                        }`}
                        onClick={handleScoreClick}
                    >
                        スコア
                    </button>
                    <button
                        className={`${
                            selectedTab === "yellow"
                                ? "text-[#B0EE1B] cursor-default underline"
                                : "text-[#C8CDCD] hover:text-[#FFFFFF] cursor-pointer"
                        }`}
                        onClick={handleYellowClick}
                    >
                        イエローカード
                    </button>
                    <button
                        className={`${
                            selectedTab === "red"
                                ? "text-[#B0EE1B] cursor-default underline"
                                : "text-[#C8CDCD] hover:text-[#FFFFFF] cursor-pointer"
                        }`}
                        onClick={handleRedClick}
                    >
                        レッドカード
                    </button>
                </div>
            </div>
            {selectedTab === "score" && <TopScore />}
        </div>
    );
};
