import { useContext } from "react";
import { MatchDetailsContext } from "../../provider/MatchDetailsProvider";

/** ツールチップ */
import { Tooltip } from "react-tooltip";

export const MatchHomeRankings = () => {
    const { ranking, error } = useContext(MatchDetailsContext);

    return (
        <div className="mt-[1px] mb-2">
            {ranking.home && ranking.home.length > 0 ? (
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
                        </tr>
                    </thead>
                    {ranking.home.map((home, index) => (
                        <tbody className="text-[#EEEEEE]" key={index}>
                            <tr className="border-b border-[#111931] text-center h-8">
                                <td className="text-[12px] font-bold">
                                    {index + 1}
                                </td>
                                <td className="text-[13px]">
                                    <div className="flex items-center space-x-2">
                                        <img
                                            src={home.team.logo}
                                            className="w-5 h-5"
                                        />
                                        <span className="text-[13px] ml-1 hover:underline cursor-pointer">
                                            {home.team.name}
                                        </span>
                                    </div>
                                </td>
                                <td className="text-[13px]">
                                    {home.home.played}
                                </td>
                                <td className="text-[13px]">{home.home.win}</td>
                                <td className="text-[13px]">
                                    {home.home.draw}
                                </td>
                                <td className="text-[13px]">
                                    {home.home.lose}
                                </td>
                                <td className="text-[13px]">
                                    {home.home.goals.for}:
                                    {home.home.goals.against}
                                </td>
                                <td className="text-[13px]">
                                    {home.home.goals.for -
                                        home.home.goals.against}
                                </td>
                                <td className="text-[13px] font-bold">
                                    {home.home.win * 3 + home.home.draw}
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            ) : (
                <div className="flex justify-center py-[10rem]">
                    <p className="text-[#8c9191] text-[13px] font-bold">
                        現在データは存在しません。
                    </p>
                </div>
            )}
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
            <div></div>
        </div>
    );
};
