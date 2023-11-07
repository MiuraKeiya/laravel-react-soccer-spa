import { useNavigate } from "react-router-dom";
import { SortTopPlayers } from "../../../functions/Utils";

export const TopPlayers = ({ games, maxSeason }) => {
    const topPlayers = SortTopPlayers(games);

    const navigate = useNavigate();

    const handlePlayerClick = (playerId, maxSeason) => {
        navigate(`/player/${playerId}/season/${maxSeason}`);
    };

    console.log(topPlayers);
    return (
        <div className="mt-2">
            <div className="bg-[#111931] text-[#EEEEEE] text-[18px] font-bold py-2 rounded-t">
                <h1 className="ml-3">トッププレイヤー</h1>
            </div>
            <div className="bg-[#1d2233] overflow-x-auto">
                <div className="flex justify-center flex-col mx-6 space-y-5 mt-1 flex-none">
                    {/** シュート */}
                    <table className="mt-3">
                        <thead>
                            <tr className="text-[15px] font-bold text-[#FFFFFF]">
                                <th className="text-left sm:text-[20px]">
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
                            {topPlayers[0].map((player) => (
                                <tr
                                    key={player.player.id}
                                    className="text-[#FFFFFF] sm:text-[20px] border-b border-[#111931]"
                                >
                                    <td className="py-2 text-left">
                                        <div className="flex items-center">
                                            <img
                                                src={player.teamLogo}
                                                className="sm:w-10 sm:h-10 w-7 h-7 mr-2"
                                            />
                                            <a
                                                className="hover:underline cursor-pointer"
                                                onClick={() =>
                                                    handlePlayerClick(
                                                        player.player.id,
                                                        maxSeason
                                                    )
                                                }
                                            >
                                                {player.player.name}
                                            </a>
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
                            <tr className="text-[15px] font-bold text-[#FFFFFF]">
                                <th className="text-left sm:text-[20px]">
                                    パス数
                                </th>
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
                            {topPlayers[1].map((player) => (
                                <tr
                                    key={player.player.id}
                                    className="text-[#FFFFFF] sm:text-[20px] border-b border-[#111931]"
                                >
                                    <td className="py-2 text-left">
                                        <div className="flex items-center">
                                            <img
                                                src={player.teamLogo}
                                                className="sm:w-10 sm:h-10 w-7 h-7 mr-2"
                                            />
                                            <a
                                                className="hover:underline cursor-pointer"
                                                onClick={() =>
                                                    handlePlayerClick(
                                                        player.player.id,
                                                        maxSeason
                                                    )
                                                }
                                            >
                                                {player.player.name}
                                            </a>
                                        </div>
                                    </td>
                                    <td className="py-2 text-center"></td>
                                    <td className="py-2 text-center">
                                        {player.statistics[0].passes.accuracy ||
                                            0}
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
                            <tr className="text-[15px] font-bold text-[#FFFFFF]">
                                <th className="text-left sm:text-[20px]">
                                    ドリブル
                                </th>
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
                            {topPlayers[2].map((player) => (
                                <tr
                                    key={player.player.id}
                                    className="text-[#FFFFFF] sm:text-[20px] border-b border-[#111931]"
                                >
                                    {player.statistics[0].dribbles.attempts !==
                                        null && (
                                        <>
                                            <td className="py-2 text-left">
                                                <div className="flex items-center">
                                                    <img
                                                        src={player.teamLogo}
                                                        className="sm:w-10 sm:h-10 w-7 h-7 mr-2"
                                                    />
                                                    <a
                                                        className="hover:underline cursor-pointer"
                                                        onClick={() =>
                                                            handlePlayerClick(
                                                                player.player
                                                                    .id,
                                                                maxSeason
                                                            )
                                                        }
                                                    >
                                                        {player.player.name}
                                                    </a>
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
                            <tr className="text-[15px] font-bold text-[#FFFFFF]">
                                <th className="text-left sm:text-[20px]">
                                    デュエル
                                </th>
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
                            {topPlayers[3].map((player) => (
                                <tr
                                    key={player.player.id}
                                    className="text-[#FFFFFF] sm:text-[20px] border-b border-[#111931]"
                                >
                                    {player.statistics[0].duels.total !==
                                        null && (
                                        <>
                                            <td className="py-2 text-left">
                                                <div className="flex items-center">
                                                    <img
                                                        src={player.teamLogo}
                                                        className="sm:w-10 sm:h-10 w-7 h-7 mr-2"
                                                    />
                                                    <a
                                                        className="hover:underline cursor-pointer"
                                                        onClick={() =>
                                                            handlePlayerClick(
                                                                player.player
                                                                    .id,
                                                                maxSeason
                                                            )
                                                        }
                                                    >
                                                        {player.player.name}
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="py-2 text-center"></td>
                                            <td className="py-2 text-center">
                                                {player.statistics[0].duels
                                                    .won || 0}
                                            </td>
                                            <td className="py-2 text-center">
                                                {player.statistics[0].duels
                                                    .total || 0}
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
                            <tr className="text-[15px] font-bold text-[#FFFFFF]">
                                <th className="text-left sm:text-[20px]">
                                    タックル
                                </th>
                                <th className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[7rem]">
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
                            {topPlayers[4].map((player) => (
                                <tr
                                    key={player.player.id}
                                    className="text-[#FFFFFF] sm:text-[20px] border-b border-[#111931]"
                                >
                                    {player.statistics[0].tackles.total !==
                                        null && (
                                        <>
                                            <td className="py-2 text-left">
                                                <div className="flex items-center">
                                                    <img
                                                        src={player.teamLogo}
                                                        className="sm:w-10 sm:h-10 w-7 h-7 mr-2"
                                                    />
                                                    <a
                                                        className="hover:underline cursor-pointer"
                                                        onClick={() =>
                                                            handlePlayerClick(
                                                                player.player
                                                                    .id,
                                                                maxSeason
                                                            )
                                                        }
                                                    >
                                                        {player.player.name}
                                                    </a>
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
                    <div></div>
                </div>
            </div>
        </div>
    );
};
