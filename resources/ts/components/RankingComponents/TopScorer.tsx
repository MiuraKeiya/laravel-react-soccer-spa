import { useContext } from "react";
import { RankingContext } from "../../provider/RankingProvider";

export const TopScorer = () => {
    const { scoreData, error } = useContext(RankingContext);

    return (
        <div className="mt-[1px] mb-2">
            {scoreData.json_scorer_ranking.response.length > 0 ? (
                <table className="w-full">
                    <thead className="bg-[#111931] text-[#C8CDCD] text-[12px]">
                        <tr>
                            <th className="sm:w-7"></th>
                            <th className="text-left">選手</th>
                            <th className="text-left">チーム</th>
                            <th>得点数</th>
                            <th>試合数</th>
                        </tr>
                    </thead>
                    {scoreData.json_scorer_ranking.response.map(
                        (scorer, index) => (
                            <tbody className="text-[#EEEEEE]" key={index}>
                                <tr className="border-b border-[#111931] text-center h-9">
                                    <td className="text-[12px] font-bold">
                                        {index + 1}
                                    </td>
                                    <td className="text-[13px]">
                                        <div className="flex items-center space-x-2">
                                            <img
                                                src={scorer.player.photo}
                                                className="w-7 h-7 rounded-full"
                                            />
                                            <span className="text-[13px] ml-1 hover:underline cursor-pointer">
                                                {scorer.player.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="text-[13px]">
                                        <div className="flex items-center space-x-2">
                                            <img
                                                src={
                                                    scorer.statistics[0].team
                                                        .logo
                                                }
                                                className="w-5 h-5"
                                            />
                                            <span className="text-[13px] hover:underline cursor-pointer">
                                                {scorer.statistics[0].team.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="text-[13px] font-bold">
                                        {scorer.statistics[0].goals.total}
                                    </td>
                                    <td className="text-[13px]">
                                        {scorer.statistics[0].games.appearences}
                                    </td>
                                </tr>
                            </tbody>
                        )
                    )}
                </table>
            ) : (
                // json_scorer_rankingキーが存在しない場合に表示するコード
                <div className="flex justify-center py-[10rem]">
                    <p className="text-[#8c9191] text-[13px] font-bold">
                        現在データは存在しません。
                    </p>
                </div>
            )}
        </div>
    );
};
