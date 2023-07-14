import { useContext } from "react";
import { MatchDetailsContext } from "../../provider/MatchDetailsProvider";

export const TopPlayer = () => {
    const { result, error } = useContext(MatchDetailsContext);

    if (result.length === 0) {
        return null;
    }

    // プレイヤーデータを取得
    const allPlayers = result.response[0].players.flatMap((team) =>
        team.players.map((player) => ({
            ...player,
            teamName: team.team.name,
            teamLogo: team.team.logo,
        }))
    );

    // シュート数でソート
    const sortedPlayers = allPlayers.sort(
        (a, b) =>
            (b.statistics[0].shots.total || 0) -
            (a.statistics[0].shots.total || 0)
    );

    // 上位3人の選手を取得
    const top3Players = sortedPlayers.slice(0, 3);

    // パス数でソート
    const sortedByPasses = allPlayers.sort(
        (a, b) =>
            (b.statistics[0].passes.total || 0) -
            (a.statistics[0].passes.total || 0)
    );

    // 上位3人の選手を取得
    const top3Passers = sortedByPasses.slice(0, 3);

    // ドリブル数でソート
    const sortedByDribbles = allPlayers.sort(
        (a, b) =>
            (b.statistics[0].dribbles.attempts || 0) -
            (a.statistics[0].dribbles.attempts || 0)
    );

    // 上位3人の選手を取得
    const top3Dribbles = sortedByDribbles.slice(0, 3);

    // デュエル数でソート
    const sortedByDuels = allPlayers.sort(
        (a, b) =>
            (b.statistics[0].duels.total || 0) -
            (a.statistics[0].duels.total || 0)
    );

    // 上位3人の選手を取得
    const top3Duels = sortedByDuels.slice(0, 3);

    // タックルでソート
    const sortedByTackles = allPlayers.sort(
        (a, b) =>
            (b.statistics[0].tackles.total || 0) -
            (a.statistics[0].tackles.total || 0)
    );

    // 上位3人の選手を取得
    const top3Tackles = sortedByTackles.slice(0, 3);

    return (
        <div className="mt-3 mb-3">
            <div className="flex justify-center flex-col ml-6 sm:ml-8 space-y-4">
                {/** シュート */}
                <table>
                    <thead>
                        <tr className="text-[11px] font-bold text-[#FFFFFF]">
                            <th className="text-left text-[13px]">
                                シュート数
                            </th>
                            <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]">
                                ゴール
                            </th>
                            <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]">
                                枠内シュート
                            </th>
                            <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]">
                                合計
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {top3Players.map((player) => (
                            <tr
                                key={player.player.id}
                                className="text-[#FFFFFF]"
                            >
                                <td className="py-2 text-left text-[13px]">
                                    <div className="flex items-center">
                                        <img
                                            src={player.teamLogo}
                                            className="w-6 h-6 mr-2"
                                        />
                                        {player.player.name}
                                    </div>
                                </td>
                                <td className="py-2 text-center">
                                    {player.statistics[0].goals.total || 0}
                                </td>
                                <td className="py-2 text-center">
                                    {player.statistics[0].shots.on || 0}
                                </td>
                                <td className="py-2 text-center">
                                    {player.statistics[0].shots.total || 0}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/** パス */}
                <table>
                    <thead>
                        <tr className="text-[11px] font-bold text-[#FFFFFF]">
                            <th className="text-left text-[13px]">パス数</th>
                            <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]"></th>
                            <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]">
                                成功
                            </th>
                            <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]">
                                合計
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {top3Passers.map((player) => (
                            <tr
                                key={player.player.id}
                                className="text-[#FFFFFF]"
                            >
                                <td className="py-2 text-left text-[13px]">
                                    <div className="flex items-center">
                                        <img
                                            src={player.teamLogo}
                                            className="w-6 h-6 mr-2"
                                        />
                                        {player.player.name}
                                    </div>
                                </td>
                                <td className="py-2 text-center"></td>
                                <td className="py-2 text-center">
                                    {player.statistics[0].passes.accuracy || 0}
                                </td>
                                <td className="py-2 text-center">
                                    {player.statistics[0].passes.total || 0}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/** ドリブル */}
                <table>
                    <thead>
                        <tr className="text-[11px] font-bold text-[#FFFFFF]">
                            <th className="text-left text-[13px]">ドリブル</th>
                            <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]"></th>
                            <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]">
                                成功
                            </th>
                            <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]">
                                合計
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {top3Dribbles.map((player) => (
                            <tr
                                key={player.player.id}
                                className="text-[#FFFFFF]"
                            >
                                {player.statistics[0].dribbles.attempts !==
                                    null && (
                                    <>
                                        <td className="py-2 text-left text-[13px]">
                                            <div className="flex items-center">
                                                <img
                                                    src={player.teamLogo}
                                                    className="w-6 h-6 mr-2"
                                                />
                                                {player.player.name}
                                            </div>
                                        </td>
                                        <td className="py-2 text-center"></td>
                                        <td className="py-2 text-center">
                                            {player.statistics[0].dribbles
                                                .success || 0}
                                        </td>
                                        <td className="py-2 text-center">
                                            {player.statistics[0].dribbles
                                                .attempts || 0}
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/** デュエル */}
                <table>
                    <thead>
                        <tr className="text-[11px] font-bold text-[#FFFFFF]">
                            <th className="text-left text-[13px]">デュエル</th>
                            <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]"></th>
                            <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]">
                                勝利
                            </th>
                            <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]">
                                合計
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {top3Duels.map((player) => (
                            <tr
                                key={player.player.id}
                                className="text-[#FFFFFF]"
                            >
                                {player.statistics[0].duels.total !== null && (
                                    <>
                                        <td className="py-2 text-left text-[13px]">
                                            <div className="flex items-center">
                                                <img
                                                    src={player.teamLogo}
                                                    className="w-6 h-6 mr-2"
                                                />
                                                {player.player.name}
                                            </div>
                                        </td>
                                        <td className="py-2 text-center"></td>
                                        <td className="py-2 text-center">
                                            {player.statistics[0].duels.won ||
                                                0}
                                        </td>
                                        <td className="py-2 text-center">
                                            {player.statistics[0].duels.total ||
                                                0}
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/** タックル */}
                <table>
                    <thead>
                        <tr className="text-[11px] font-bold text-[#FFFFFF]">
                            <th className="text-left text-[13px]">タックル</th>
                            <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]">
                                インターセプト
                            </th>
                            <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]">
                                成功
                            </th>
                            <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]">
                                合計
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {top3Tackles.map((player) => (
                            <tr
                                key={player.player.id}
                                className="text-[#FFFFFF]"
                            >
                                {player.statistics[0].tackles.total !==
                                    null && (
                                    <>
                                        <td className="py-2 text-left text-[13px]">
                                            <div className="flex items-center">
                                                <img
                                                    src={player.teamLogo}
                                                    className="w-6 h-6 mr-2"
                                                />
                                                {player.player.name}
                                            </div>
                                        </td>
                                        <td className="py-2 text-center">
                                            {player.statistics[0].tackles
                                                .interceptions || 0}
                                        </td>
                                        <td className="py-2 text-center">
                                            {player.statistics[0].tackles
                                                .blocks || 0}
                                        </td>
                                        <td className="py-2 text-center">
                                            {player.statistics[0].tackles
                                                .total || 0}
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
