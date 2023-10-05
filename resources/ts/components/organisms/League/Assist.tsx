import { RankingsLoading } from "../Standings/RankingsLoading";

export const Assist = ({ rankings, rankingsLoading }) => {
    if (rankingsLoading) {
        return <RankingsLoading />;
    }

    return (
        <div>
            <div className="bg-[#111931] text-[#EEEEEE] text-[18px] font-bold py-1 text-center">
                アシストランキング
            </div>
            <div className="bg-[#1d2233] mt-[1px]">
                {rankings[0].json_assist?.response?.length > 0 ? (
                    <table className="w-full">
                        <thead className="bg-[#111931] text-[#C8CDCD] text-[15px]">
                            <tr>
                                <th className="sm:w-7"></th>
                                <th className="text-left">選手</th>
                                <th className="text-left">チーム</th>
                                <th>アシスト</th>
                                <th>試合数</th>
                            </tr>
                        </thead>
                        {rankings[0].json_assist?.response?.map(
                            (assist, index) => (
                                <tbody className="text-[#EEEEEE]" key={index}>
                                    <tr className="border-b border-[#111931] text-center h-[3.4375rem]">
                                        <td className="text-[15px] font-bold">
                                            {index + 1}
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src={assist.player.photo}
                                                    className="w-8 h-8 rounded-full"
                                                />
                                                <span className="text-[15px] font-bold text-white ml-1 hover:underline cursor-pointer">
                                                    {assist.player.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="text-[13px]">
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src={
                                                        assist.statistics[0]
                                                            .team.logo
                                                    }
                                                    className="w-8 h-8"
                                                />
                                                <span className="text-[15px] hover:underline cursor-pointer">
                                                    {
                                                        assist.statistics[0]
                                                            .team.name
                                                    }
                                                </span>
                                            </div>
                                        </td>
                                        <td className="text-[15px] font-bold">
                                            {assist.statistics[0].goals.assists}
                                        </td>
                                        <td className="text-[15px]">
                                            {
                                                assist.statistics[0].games
                                                    .appearences
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        )}
                    </table>
                ) : (
                    // json_assistキーが存在しない場合に表示するコード
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
