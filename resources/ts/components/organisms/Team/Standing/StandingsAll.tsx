import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip from "@mui/material/Tooltip";
import { StandingsLoading } from "../../Standings/StandingsLoading";
import { StandingsDetails } from "../../Standings/StandingsDetails";
import { LeagueLule } from "../../Standings/LeagueLule";
import { Link } from "react-router-dom";

export const StandingsAll = ({ standings, teamIds, maxSeason, loading }) => {
    if (loading) {
        return <StandingsLoading />;
    }

    return (
        <div className="bg-[#1d2233]">
            <table className="w-full">
                <thead className="bg-[#111931] text-[#C8CDCD] text-[12px] font-bold">
                    <tr>
                        <th className="w-11"></th>
                        <th className="text-left">チーム</th>
                        <th>MP</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>G</th>
                        <th>+/-</th>
                        <th>P</th>
                        <th>フォーム</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="text-[#EEEEEE]">
                    {standings.all &&
                        Object.values(standings.all).map((standing, index) => (
                            <tr
                                key={index}
                                className={`border-b border-[#111931] text-center h-[3.4375rem] ${
                                    teamIds &&
                                    teamIds.includes(standing.team.id)
                                        ? "bg-gradient-to-r from-[#1e2667]"
                                        : ""
                                }`}
                            >
                                <td>
                                    <div
                                        className={`mx-2 rounded ${
                                            standing.description ===
                                            "Promotion - Champions League (Group Stage: )"
                                                ? "bg-[#81319c]"
                                                : standing.description ===
                                                  "Promotion - Europa League (Group Stage: )"
                                                ? "bg-[#276e8d]"
                                                : standing.description ===
                                                  "Promotion - Europa Conference League (Qualification: )"
                                                ? "bg-[#787822]"
                                                : standing.description ===
                                                  "Relegation - Championship"
                                                ? "bg-[#a62b1b]"
                                                : standing.description ===
                                                  "Promotion - Champions League (Qualification: )"
                                                ? "bg-blue-600"
                                                : standing.description ===
                                                  "Relegation - Ligue 2"
                                                ? "bg-[#a62b1b]"
                                                : standing.description ===
                                                  "Promotion - Europa Conference League (Group Stage: )"
                                                ? "bg-green-600"
                                                : standing.description ===
                                                  "Bundesliga (Relegation)"
                                                ? "bg-gray-500"
                                                : standing.description ===
                                                  "Relegation - 2. Bundesliga"
                                                ? "bg-[#a62b1b]"
                                                : standing.description ===
                                                  "Serie A (Additional match: )"
                                                ? "bg-gray-500"
                                                : standing.description ===
                                                  "Relegation - Serie B"
                                                ? "bg-[#a62b1b]"
                                                : standing.description ===
                                                  "Relegation - LaLiga2"
                                                ? "bg-[#a62b1b]"
                                                : standing.description ===
                                                  "Ligue 1 (Promotion - Play Offs: )"
                                                ? "bg-gray-500"
                                                : ""
                                        }`}
                                    >
                                        {standing.rank}
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-2">
                                        <img
                                            src={standing.team.logo}
                                            className="w-8 h-8"
                                        />
                                        <Link
                                            className="text-[16px] ml-1 hover:underline font-bold"
                                            to={`/team/${standing.team.id}/season/${maxSeason}`}
                                        >
                                            {standing.team.name}
                                        </Link>
                                    </div>
                                </td>
                                <td className="text-[16px]">
                                    {standing.all.played}
                                </td>
                                <td className="text-[16px]">
                                    {standing.all.win}
                                </td>
                                <td className="text-[16px]">
                                    {standing.all.draw}
                                </td>
                                <td className="text-[16px]">
                                    {standing.all.lose}
                                </td>
                                <td className="text-[16px]">
                                    {standing.all.goals.for}:
                                    {standing.all.goals.against}
                                </td>
                                <td
                                    className={`text-[16px] ${
                                        standing.goalsDiff > 0
                                            ? "text-green-500"
                                            : standing.goalsDiff < 0
                                            ? "text-[#DC0000]"
                                            : ""
                                    }`}
                                >
                                    {standing.goalsDiff}
                                </td>
                                <td className="text-[16px] font-bold">
                                    {standing.points}
                                </td>
                                <td className="text-[16px]">
                                    <div className="flex justify-center">
                                        {standing.form !== null &&
                                            standing.form
                                                .split("")
                                                .map((char, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center justify-center h-5 w-5 sm:mx-[1px]"
                                                    >
                                                        <span
                                                            className={`text-white h-full w-full flex items-center justify-center ${
                                                                char === "W"
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
                                <td>
                                    {standing.description && (
                                        <Tooltip
                                            title={standing.description}
                                            placement="left-start"
                                        >
                                            <HelpOutlineIcon />
                                        </Tooltip>
                                    )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className="pb-4">
                <StandingsDetails standings={standings} />
                <LeagueLule standings={standings} />
            </div>
        </div>
    );
};
