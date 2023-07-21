import { useContext } from "react";
import { RankingContext } from "../../provider/RankingProvider";
import { LeagueLules } from "./LeagueLules";

export const RankingDetails = () => {
    const { rankingData } = useContext(RankingContext);

    const getDescriptionInJapanese = (description) => {
        switch (description) {
            case "Promotion - Champions League (Group Stage: )":
            case "Promotion - Champions League (Group Stage)":
                return {
                    description:
                        "昇格 - UEFAチャンピオンズリーグ (グループステージ: )",
                    bgColorClass: "bg-[#a841ca]",
                };
            case "Promotion - Europa League (Group Stage: )":
            case "Promotion - Europa League (Group Stage)":
                return {
                    description:
                        "昇格 - UEFAヨーロッパリーグ (グループステージ: )",
                    bgColorClass: "bg-[#2fb7f2]",
                };
            case "Promotion - Europa Conference League (Qualification: )":
            case "Promotion - Europa League (Qualification)":
                return {
                    description:
                        "昇格 - UEFAヨーロッパカンファレンスリーグ (資格予選: )",
                    bgColorClass: "bg-[#d2d233]",
                };
            case "Relegation - Championship":
                return {
                    description: "降格 - チャンピオンシップ",
                    bgColorClass: "bg-[#f54129]",
                };
            case "Promotion - Champions League (Qualification: )":
                return {
                    description: "昇格 - UEFAチャンピオンズリーグ (資格予選: )",
                    bgColorClass: "bg-blue-600",
                };
            case "Relegation - Ligue 2":
                return {
                    description: "降格 - リーグ・ドゥ",
                    bgColorClass: "bg-[#f54129]",
                };
            case "Promotion - Europa Conference League (Group Stage: )":
                return {
                    description:
                        "昇格 - UEFAヨーロッパカンファレンスリーグ (グループステージ: )",
                    bgColorClass: "bg-green-500",
                };
            case "Bundesliga (Relegation)":
                return {
                    description: "ブンデスリーガ (降格戦)",
                    bgColorClass: "bg-gray-500",
                };
            case "Relegation - 2. Bundesliga":
                return {
                    description: "降格 - 2.ブンデスリーガ",
                    bgColorClass: "bg-[#f54129]",
                };
            case "Serie A (Additional match: )":
                return {
                    description: "セリエ A (追加試合: )",
                    bgColorClass: "bg-gray-500",
                };
            case "Relegation - Serie B":
                return {
                    description: "降格 - セリエ B",
                    bgColorClass: "bg-[#f54129]",
                };
            case "Relegation - LaLiga2":
                return {
                    description: "降格 - ラ・リーガ 2部",
                    bgColorClass: "bg-[#f54129]",
                };
            default:
                return { description, bgColorClass: "bg-orange-400" };
        }
    };

    return (
        <div className="mt-2 mb-2">
            {Array.from(
                new Set(
                    rankingData.all.response[0].league.standings[0].map(
                        (ranking) => ranking.description
                    )
                )
            ).map(
                (description, index) =>
                    description !== null && (
                        <div
                            key={index}
                            className="text-[#EEEEEE] flex items-center space-x-2 space-y-1"
                        >
                            <div
                                className={`w-[13px] h-[13px] ${
                                    getDescriptionInJapanese(description)
                                        .bgColorClass
                                }`}
                            ></div>
                            <p className="text-[12px]">
                                {
                                    getDescriptionInJapanese(description)
                                        .description
                                }
                            </p>
                        </div>
                    )
            )}
            <LeagueLules />
        </div>
    );
};
