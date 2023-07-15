import { useContext } from "react";
import { MatchDetailsContext } from "../../provider/MatchDetailsProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
/** ツールチップ */
import { Tooltip } from "react-tooltip";

export const TeamRanking = () => {
    const { ranking, result, error } = useContext(MatchDetailsContext);

    if (ranking.length === 0) {
        return null;
    }

    const homeId = result.response[0].teams.home.id;
    const awayId = result.response[0].teams.away.id;

    return (
        <div className="flex justify-center mt-3 mb-4">
            {ranking.response.map((ranking, index) => (
                <div key={index} className="w-full mx-3">
                    <table className="w-full">
                        <thead className="bg-[#111931] text-[#FFFFFF] cursor-default">
                            <tr>
                                <th className="flex items-center space-x-1">
                                    <img
                                        src={ranking.league.flag}
                                        className="w-5 h-5 ml-1"
                                    />
                                    <span className="text-[13px] uppercase">
                                        {ranking.league.country}:{" "}
                                        {ranking.league.name}
                                    </span>
                                </th>
                                <th className="text-[13px] MP">MP</th>
                                <th className="text-[13px] W">W</th>
                                <th className="text-[13px] D">D</th>
                                <th className="text-[13px] L">L</th>
                                <th className="text-[13px] G">G</th>
                                <th className="text-[13px] T">+/-</th>
                                <th className="text-[13px] P">P</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {ranking.league.standings[0].map(
                                (teamData, teamIndex) => (
                                    <tr
                                        key={teamIndex}
                                        className={`text-center border-b border-[#111931] text-[#FFFFFF] ${
                                            teamData.team.id === homeId ||
                                            teamData.team.id === awayId
                                                ? "bg-[#3d4e81] font-bold"
                                                : ""
                                        }`}
                                    >
                                        <td className="flex items-center h-[30px]">
                                            <div
                                                className={`mr-2 w-[15px] h-[15px] rounded flex items-center justify-center 
                                                    ${
                                                        teamData.description &&
                                                        (teamData.rank <= 4
                                                            ? "bg-[#a841ca] text-white"
                                                            : teamData.rank >=
                                                                  5 &&
                                                              teamData.rank <= 6
                                                            ? "bg-[#2fb7f2] text-white"
                                                            : teamData.rank <= 7
                                                            ? "bg-[#d2d233] text-white"
                                                            : teamData.rank >
                                                              ranking.league
                                                                  .standings[0]
                                                                  .length -
                                                                  3
                                                            ? "bg-[#f54129] text-white"
                                                            : "bg-[#f27815] text-white")
                                                    }`}
                                            >
                                                <span className="text-[13px]">
                                                    {teamData.rank}
                                                </span>
                                            </div>
                                            <img
                                                src={`https://media-1.api-sports.io/football/teams/${teamData.team.id}.png`}
                                                className="w-5 h-5"
                                            />
                                            <span className="text-[13px] ml-1">
                                                {teamData.team.name}
                                            </span>
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
                                                {teamData.form
                                                    .split("")
                                                    .map((char, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center justify-center h-4 w-4 sm:mx-[1px]"
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
                </div>
            ))}
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
    );
};
