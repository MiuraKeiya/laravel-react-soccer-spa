import { useState } from "react";
import { Button } from "../../atoms/Button";

export const RankingSelecter = () => {
    const [selectedTab, setSelectedTab] = useState("scorer");

    const handleScorerClick = () => {
        setSelectedTab("scorer");
    };

    const handleAssistClick = () => {
        setSelectedTab("assist");
    };

    const handleYellowClick = () => {
        setSelectedTab("yellow");
    };

    const handleRedClick = () => {
        setSelectedTab("red");
    };

    return (
        <>
            <div className="bg-[#1d2233] rounded-t h-12 flex items-center space-x-8 mt-2">
                <Button
                    onClick={handleScorerClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ml-6 ${
                        selectedTab === "scorer"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    得点
                </Button>
                <Button
                    onClick={handleAssistClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "assist"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    アシスト
                </Button>
                <Button
                    onClick={handleYellowClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "yellow"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    イエローカード
                </Button>
                <Button
                    onClick={handleRedClick}
                    style={`text-[15px] font-bold rounded px-2 py-1 ${
                        selectedTab === "red"
                            ? "bg-[#B0EE1B] text-black cursor-default"
                            : "bg-[#111931] text-[#C8CDCD] hover:bg-gray-700"
                    }`}
                >
                    レッドカード
                </Button>
            </div>
        </>
    );
};