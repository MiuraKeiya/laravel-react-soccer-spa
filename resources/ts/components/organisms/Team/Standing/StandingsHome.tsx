import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip from "@mui/material/Tooltip";
import { StandingsLoading } from "../../Standings/StandingsLoading";
import { Link } from "react-router-dom";

export const StandingsHome = ({ standings, teamIds, maxSeason, loading }) => {
    if (loading) {
        return <StandingsLoading />;
    }

    return (
        <div className="bg-[#1d2233] overflow-x-auto">
            <table className="sm:w-full w-[50rem]">
                <thead className="bg-[#111931] text-[#C8CDCD] text-[12px] font-bold">
                    <tr>
                        <th className="w-11"></th>
                        <th className="text-left">チーム</th>
                        <th className="px-6 lg:px-0 lg:w-[4rem]">MP</th>
                        <th className="px-6 lg:px-0 lg:w-[4rem]">W</th>
                        <th className="px-6 lg:px-0 lg:w-[4rem]">D</th>
                        <th className="px-6 lg:px-0 lg:w-[4rem]">L</th>
                        <th className="px-6 lg:px-0 lg:w-[4rem]">G</th>
                        <th className="px-6 lg:px-0 lg:w-[4rem]">+/-</th>
                        <th className="px-6 lg:px-0 lg:w-[4rem]">P</th>
                        <th className="lg:w-[3rem]"></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="text-[#EEEEEE]">
                    {standings.home &&
                        Object.values(standings.home).map((standing, index) => (
                            <tr
                                key={index}
                                className={`border-b border-[#111931] text-center h-[3.4375rem] ${
                                    teamIds &&
                                    teamIds.includes(standing.team.id)
                                        ? "bg-gradient-to-r from-[#1e2667]"
                                        : ""
                                }`}
                            >
                                <td> {index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-2">
                                        <img
                                            src={standing.team.logo}
                                            className="lg:w-8 lg:h-8 h-[23px]"
                                        />
                                        <Link
                                            className="lg:text-[16px] text-[14px] ml-1 hover:underline font-bold truncate"
                                            to={`/team/${standing.team.id}/season/${maxSeason}`}
                                        >
                                            {standing.team.name}
                                        </Link>
                                    </div>
                                </td>
                                <td className="text-[16px]">
                                    {standing.home.played}
                                </td>
                                <td className="text-[16px]">
                                    {standing.home.win}
                                </td>
                                <td className="text-[16px]">
                                    {standing.home.draw}
                                </td>
                                <td className="text-[16px]">
                                    {standing.home.lose}
                                </td>
                                <td className="text-[16px]">
                                    {standing.home.goals.for}:
                                    {standing.home.goals.against}
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
                                    {standing.home.goals.for -
                                        standing.home.goals.against}
                                </td>
                                <td className="text-[16px] font-bold">
                                    {standing.home.win * 3 + standing.home.draw}
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
        </div>
    );
};
