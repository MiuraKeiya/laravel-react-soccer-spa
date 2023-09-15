import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip from "@mui/material/Tooltip";

export const StandingsHome = ({ standings, teamIds }) => {
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
                        <th></th>
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
                                            className="w-8 h-8"
                                        />
                                        <span className="text-[16px] ml-1 hover:underline cursor-pointer font-bold">
                                            {standing.team.name}
                                        </span>
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
