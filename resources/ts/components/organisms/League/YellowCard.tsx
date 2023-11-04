import { Link } from "react-router-dom";
import { RankingsLoading } from "../Standings/RankingsLoading";

export const YellowCard = ({ rankings, rankingsLoading, maxSeason }) => {
    if (rankingsLoading) {
        return <RankingsLoading />;
    }

    return (
        <div>
            <div className="bg-[#111931] text-[#EEEEEE] text-[18px] font-bold py-1 text-center">
                イエローカードランキング
            </div>
            <div className="bg-[#1d2233] mt-[1px]">
                {rankings[0].json_yellow_card?.response?.length > 0 ? (
                    <table className="w-full overflow-x-auto">
                        <thead className="bg-[#111931] text-[#C8CDCD] lg:text-[15px] text-[13px]">
                            <tr>
                                <th className="sm:w-7"></th>
                                <th className="text-left">選手</th>
                                <th className="text-left">チーム</th>
                                <th className="w-16 lg:w-[10rem]">カード</th>
                                <th className="w-16 lg:w-[10rem]">試合数</th>
                            </tr>
                        </thead>
                        {rankings[0].json_yellow_card?.response?.map(
                            (card, index) => (
                                <tbody className="text-[#EEEEEE]" key={index}>
                                    <tr className="border-b border-[#111931] text-center h-[3.4375rem]">
                                        <td className="text-[15px] font-bold">
                                            {index + 1}
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src={card.player.photo}
                                                    className="w-8 h-8 rounded-full"
                                                />
                                                <Link
                                                    className="lg:text-[15px] text-[13px] font-bold text-white ml-1 hover:underline"
                                                    to={`/player/${card.player.id}/season/${maxSeason}`}
                                                >
                                                    {card.player.name}
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="text-[13px]">
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src={
                                                        card.statistics[0].team
                                                            .logo
                                                    }
                                                    className="w-8 h-8"
                                                />
                                                <Link
                                                    className="lg:text-[15px] text-[13px] hover:underline"
                                                    to={`/team/${card.statistics[0].team.id}/season/${maxSeason}`}
                                                >
                                                    {
                                                        card.statistics[0].team
                                                            .name
                                                    }
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="lg:text-[15px] text-[13px] font-bold">
                                            {card.statistics[0].cards.yellow ??
                                                0}
                                        </td>
                                        <td className="lg:text-[15px] text-[13px]">
                                            {card.statistics[0].games
                                                .appearences ?? 0}
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        )}
                    </table>
                ) : (
                    // json_yellow_cardキーが存在しない場合に表示するコード
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
