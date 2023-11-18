import { useState } from "react";
import { Button } from "../../atoms/Button";
import { Scorer } from "./Scorer";
import { Assist } from "./Assist";
import { YellowCard } from "./YellowCard";
import { RedCard } from "./RedCard";

export const RankingSelecter = ({ rankings, rankingsLoading, maxSeason }) => {
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
            <div className="bg-[#1d2233] rounded-t h-12 flex items-center lg:space-x-8 space-x-3 mt-2">
                <Button
                    onClick={handleScorerClick}
                    style={`sm:text-[15px] text-[12px] font-bold rounded-lg px-2 py-1 ml-6 ${
                        selectedTab === "scorer"
                            ? "bg-[#7A84FF] text-[#7A84FF] cursor-default bg-opacity-20 border border-[#7A84FF] transition-all duration-300"
                            : "bg-[#10161c] text-[#C8CDCD] hover:bg-[#7A84FF] border border-black hover:bg-opacity-20 hover:border hover:border-[#1d2233] transition-all duration-300"
                    }`}
                >
                    得点
                </Button>
                <Button
                    onClick={handleAssistClick}
                    style={`sm:text-[15px] text-[12px] font-bold rounded-lg px-2 py-1 ${
                        selectedTab === "assist"
                            ? "bg-[#7A84FF] text-[#7A84FF] cursor-default bg-opacity-20 border border-[#7A84FF] transition-all duration-300"
                            : "bg-[#10161c] text-[#C8CDCD] hover:bg-[#7A84FF] border border-black hover:bg-opacity-20 hover:border hover:border-[#1d2233] transition-all duration-300"
                    }`}
                >
                    アシスト
                </Button>
                <Button
                    onClick={handleYellowClick}
                    style={`sm:text-[15px] text-[12px] font-bold rounded-lg px-2 py-1 ${
                        selectedTab === "yellow"
                            ? "bg-[#7A84FF] text-[#7A84FF] cursor-default bg-opacity-20 border border-[#7A84FF] transition-all duration-300"
                            : "bg-[#10161c] text-[#C8CDCD] hover:bg-[#7A84FF] border border-black hover:bg-opacity-20 hover:border hover:border-[#1d2233] transition-all duration-300"
                    }`}
                >
                    イエローカード
                </Button>
                <Button
                    onClick={handleRedClick}
                    style={`sm:text-[15px] text-[12px] font-bold rounded-lg px-2 py-1 ${
                        selectedTab === "red"
                            ? "bg-[#7A84FF] text-[#7A84FF] cursor-default bg-opacity-20 border border-[#7A84FF] transition-all duration-300"
                            : "bg-[#10161c] text-[#C8CDCD] hover:bg-[#7A84FF] border border-black hover:bg-opacity-20 hover:border hover:border-[#1d2233] transition-all duration-300"
                    }`}
                >
                    レッドカード
                </Button>
            </div>
            {selectedTab === "scorer" && (
                <Scorer
                    rankings={rankings}
                    rankingsLoading={rankingsLoading}
                    maxSeason={maxSeason}
                />
            )}
            {selectedTab === "assist" && (
                <Assist
                    rankings={rankings}
                    rankingsLoading={rankingsLoading}
                    maxSeason={maxSeason}
                />
            )}
            {selectedTab === "yellow" && (
                <YellowCard
                    rankings={rankings}
                    rankingsLoading={rankingsLoading}
                    maxSeason={maxSeason}
                />
            )}
            {selectedTab === "red" && (
                <RedCard
                    rankings={rankings}
                    rankingsLoading={rankingsLoading}
                    maxSeason={maxSeason}
                />
            )}
        </>
    );
};
