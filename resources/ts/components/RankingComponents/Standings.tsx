import { useContext } from "react";
import { RankingContext } from "../../provider/RankingProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { RankingDetails } from "../atoms/RankingDetails";

/** ツールチップ */
import { Tooltip } from "react-tooltip";

export const Standings = () => {
    const { rankingData, error } = useContext(RankingContext);

    return (
        <div className="mt-[1px]">
            {rankingData.all.response.map((ranking, index) => (
                <div key={index}>
                    <table className="w-full">
                        <thead className="bg-[#111931] text-[#C8CDCD] text-[12px]">
                            <tr>
                                <th className="w-6"></th>
                                <th className="TM text-left">チーム</th>
                                <th className="MP">MP</th>
                                <th className="W">W</th>
                                <th className="D">D</th>
                                <th className="L">L</th>
                                <th className="G">G</th>
                                <th className="T">+/-</th>
                                <th className="P">P</th>
                                <th className="FM">フォーム</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-[#EEEEEE]">
                            {ranking.league.standings[0].map(
                                (teamData, teamIndex) => (
                                    <tr
                                        key={teamIndex}
                                        className="border-b border-[#111931] text-center h-8"
                                    >
                                        <td className="text-[12px] font-bold">
                                            <div
                                                className={`w-[15px] h-[15px] flex items-center justify-center ${
                                                    teamData.description ===
                                                    "Promotion - Champions League (Group Stage: )"
                                                        ? "bg-[#a841ca]"
                                                        : teamData.description ===
                                                          "Promotion - Europa League (Group Stage: )"
                                                        ? "bg-[#2fb7f2]"
                                                        : teamData.description ===
                                                          "Promotion - Europa Conference League (Qualification: )"
                                                        ? "bg-[#d2d233]"
                                                        : teamData.description ===
                                                          "Relegation - Championship"
                                                        ? "bg-[#f54129]"
                                                        : teamData.description ===
                                                          "Promotion - Champions League (Qualification: )"
                                                        ? "bg-blue-600"
                                                        : teamData.description ===
                                                          "Relegation - Ligue 2"
                                                        ? "bg-[#f54129]"
                                                        : teamData.description ===
                                                          "Promotion - Europa Conference League (Group Stage: )"
                                                        ? "bg-green-500"
                                                        : teamData.description ===
                                                          "Bundesliga (Relegation)"
                                                        ? "bg-gray-500"
                                                        : teamData.description ===
                                                          "Relegation - 2. Bundesliga"
                                                        ? "bg-[#f54129]"
                                                        : teamData.description ===
                                                          "Serie A (Additional match: )"
                                                        ? "bg-gray-500"
                                                        : teamData.description ===
                                                          "Relegation - Serie B"
                                                        ? "bg-[#f54129]"
                                                        : teamData.description ===
                                                          "Relegation - LaLiga2"
                                                        ? "bg-[#f54129]"
                                                        : ""
                                                }`}
                                            >
                                                <span>{teamData.rank}</span>
                                            </div>
                                        </td>
                                        <td className="text-[13px]">
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src={teamData.team.logo}
                                                    className="w-5 h-5"
                                                />
                                                <span className="text-[13px] ml-1 hover:underline cursor-pointer">
                                                    {teamData.team.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="text-[13px]">
                                            {teamData.all.played}
                                        </td>
                                        <td className="text-[13px]">
                                            {teamData.all.win}
                                        </td>
                                        <td className="text-[13px]">
                                            {teamData.all.draw}
                                        </td>
                                        <td className="text-[13px]">
                                            {teamData.all.lose}
                                        </td>
                                        <td className="text-[13px]">
                                            {teamData.all.goals.for}:
                                            {teamData.all.goals.against}
                                        </td>
                                        <td className="text-[13px]">
                                            {teamData.goalsDiff}
                                        </td>
                                        <td className="text-[13px] font-bold">
                                            {teamData.points}
                                        </td>
                                        <td className="text-[13px]">
                                            <div className="flex justify-center">
                                                {teamData.form !== null &&
                                                    teamData.form
                                                        .split("")
                                                        .map((char, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center justify-center h-4 w-4 sm:mx-[1px]"
                                                            >
                                                                <span
                                                                    className={`text-white h-full w-full flex items-center justify-center ${
                                                                        char ===
                                                                        "W"
                                                                            ? "bg-[#00A83F]"
                                                                            : char ===
                                                                              "D"
                                                                            ? "bg-[#F3A000]"
                                                                            : char ===
                                                                              "L"
                                                                            ? "bg-[#DC0000]"
                                                                            : ""
                                                                    }`}
                                                                >
                                                                    {char}
                                                                </span>
                                                            </div>
                                                        ))}
                                            </div>
                                        </td>
                                        <td className="text-[13px] font-bold">
                                            {teamData.description && (
                                                <FontAwesomeIcon
                                                    icon={faCircleQuestion}
                                                    className={`text-gray-400 my-anchor-element-${teamData.team.id}`}
                                                />
                                            )}
                                            <Tooltip
                                                anchorSelect={`.my-anchor-element-${teamData.team.id}`}
                                                place="left"
                                            >
                                                {teamData.description}
                                            </Tooltip>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                    <Tooltip anchorSelect=".MP" place="left">
                        <span className="text-[11px] text-[#B0EE1B] font-bold">
                            試合数
                        </span>
                    </Tooltip>
                    <Tooltip anchorSelect=".W" place="left">
                        <span className="text-[11px] text-[#B0EE1B] font-bold">
                            勝利
                        </span>
                    </Tooltip>
                    <Tooltip anchorSelect=".D" place="left">
                        <span className="text-[11px] text-[#B0EE1B] font-bold">
                            引分
                        </span>
                    </Tooltip>
                    <Tooltip anchorSelect=".L" place="left">
                        <span className="text-[11px] text-[#B0EE1B] font-bold">
                            敗数
                        </span>
                    </Tooltip>
                    <Tooltip anchorSelect=".G" place="left">
                        <span className="text-[11px] text-[#B0EE1B] font-bold">
                            得点：失点
                        </span>
                    </Tooltip>
                    <Tooltip anchorSelect=".T" place="left">
                        <span className="text-[11px] text-[#B0EE1B] font-bold">
                            得失点差
                        </span>
                    </Tooltip>
                    <Tooltip anchorSelect=".P" place="left">
                        <span className="text-[11px] text-[#B0EE1B] font-bold">
                            勝点
                        </span>
                    </Tooltip>
                </div>
            ))}
            <RankingDetails />
        </div>
    );
};
