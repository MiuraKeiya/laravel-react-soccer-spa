import { Link } from "react-router-dom";
import { RankingsLoading } from "../Standings/RankingsLoading";
import { imageUrl } from "../../../functions/Utils";

export const RedCard = ({ rankings, rankingsLoading, maxSeason }) => {
    if (rankingsLoading) {
        return <RankingsLoading />;
    }

    return (
        <div>
            <div className="bg-[#111931] text-[#EEEEEE] text-[18px] font-bold py-1 text-center">
                レッドカードランキング
            </div>
            <div className="bg-[#1d2233] mt-[1px] overflow-x-auto">
                {rankings[0].json_red_card?.response?.length > 0 ? (
                    <table className="sm:w-full flex-none w-[40rem]">
                        <thead className="bg-[#111931] text-[#C8CDCD] lg:text-[15px] text-[13px]">
                            <tr>
                                <th className="sm:w-[3rem] w-[2rem]"></th>
                                <th className="text-left">選手</th>
                                <th className="text-left">チーム</th>
                                <th className="w-16 sm:w-[10rem]">カード</th>
                                <th className="w-16 sm:w-[10rem]">試合数</th>
                            </tr>
                        </thead>
                        {rankings[0].json_red_card?.response?.map(
                            (red, index) => (
                                <tbody className="text-[#EEEEEE]" key={index}>
                                    <tr className="border-b border-[#111931] text-center h-[3.4375rem]">
                                        <td className="text-[15px] font-bold">
                                            {index + 1}
                                        </td>
                                        <td className="sm:w-[30rem] w-[7rem]">
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src={imageUrl(
                                                        "players",
                                                        red.player.id,
                                                        "png"
                                                    )}
                                                    className="w-8 h-8 rounded-full"
                                                />
                                                <Link
                                                    className="lg:text-[15px] text-[13px] font-bold text-white ml-1 hover:underline truncate"
                                                    to={`/player/${red.player.id}/season/${maxSeason}`}
                                                >
                                                    {red.player.name}
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="text-[13px] sm:w-[30rem] w-[7rem]">
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src={imageUrl(
                                                        "teams",
                                                        red.statistics[0].team
                                                            .id,
                                                        "png"
                                                    )}
                                                    className="w-8 h-8"
                                                />
                                                <Link
                                                    className="lg:text-[15px] text-[13px] hover:underline truncate"
                                                    to={`/team/${red.statistics[0].team.id}/season/${maxSeason}`}
                                                >
                                                    {
                                                        red.statistics[0].team
                                                            .name
                                                    }
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="lg:text-[15px] text-[13px] font-bold">
                                            {red.statistics[0].cards.red ?? 0}
                                        </td>
                                        <td className="lg:text-[15px] text-[13px]">
                                            {red.statistics[0].games
                                                .appearences ?? 0}
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        )}
                    </table>
                ) : (
                    // json_scorerキーが存在しない場合に表示するコード
                    <div className="flex justify-center py-[10rem]">
                        <p className="text-[#8c9191] text-[20px] font-bold">
                            現在データは存在しません。
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
