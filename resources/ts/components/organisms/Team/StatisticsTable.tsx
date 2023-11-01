export const StatisticsTable = ({ informations }) => {
    return (
        <div className="mx-7 mt-6 pb-6">
            {informations.map((statistic, index) => (
                <div
                    key={index}
                    className="flex lg:justify-between lg:flex-row lg:space-x-2 flex-col"
                >
                    <div className="pb-3 lg:pb-0 mx-auto lg:mx-0">
                        <h1 className="text-[20px] text-white">最大の成績</h1>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-1 border-t-2 border-[#b657f5]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                ホームゴール
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {
                                    statistic.json_statistics.biggest.goals.for
                                        .home
                                }
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                アウェイゴール
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {
                                    statistic.json_statistics.biggest.goals.for
                                        .away
                                }
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">ホーム失点</h2>
                            <span className="text-white font-bold pr-3">
                                {
                                    statistic.json_statistics.biggest.goals
                                        .against.home
                                }
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                アウェイ失点
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {
                                    statistic.json_statistics.biggest.goals
                                        .against.away
                                }
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                勝利時ホームスコア
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.biggest.wins.home}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                勝利時アウェイスコア
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.biggest.wins.away}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                敗北時ホームスコア
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.biggest.loses.home}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                敗北時アウェイスコア
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.biggest.loses.away}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">連勝記録</h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.biggest.streak.wins}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">連敗記録</h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.biggest.streak.loses}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                連続引分記録
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.biggest.streak.draws}
                            </span>
                        </div>
                    </div>
                    <div className="pb-3 lg:pb-0 mx-auto lg:mx-0">
                        <h1 className="text-[20px] text-white">総合</h1>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-1 border-t-2 border-[#b657f5]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                行われた試合
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {
                                    statistic.json_statistics.fixtures.played
                                        .total
                                }
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">ホーム試合</h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.fixtures.played.home}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                アウェイ試合
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.fixtures.played.away}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">勝利数</h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.fixtures.wins.total}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">ホーム勝利</h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.fixtures.wins.home}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                アウェイ勝利
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.fixtures.wins.away}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">敗数</h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.fixtures.loses.total}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">ホーム敗数</h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.fixtures.loses.home}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                アウェイ敗数
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.fixtures.loses.away}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">引分数</h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.fixtures.draws.total}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                ホーム引分数
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.fixtures.draws.home}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                アウェイ引分数
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.fixtures.draws.away}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                無失点試合数
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.clean_sheet.total}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                ホーム無失点試合数
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.clean_sheet.home}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                アウェイ無失点試合数
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.clean_sheet.away}
                            </span>
                        </div>
                    </div>
                    <div className="pb-3 lg:pb-0 mx-auto lg:mx-0">
                        <h1 className="text-[20px] text-white">攻撃・守備</h1>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-1 border-t-2 border-[#b657f5]">
                            <h2 className="text-[#EEEEEE] pl-3">ゴール数</h2>
                            <span className="text-white font-bold pr-3">
                                {
                                    statistic.json_statistics.goals.for.total
                                        .total
                                }
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                ホームゴール数
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.goals.for.total.home}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                アウェイゴール数
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.goals.for.total.away}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">失点数</h2>
                            <span className="text-white font-bold pr-3">
                                {
                                    statistic.json_statistics.goals.against
                                        .total.total
                                }
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                ホーム失点数
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {
                                    statistic.json_statistics.goals.against
                                        .total.home
                                }
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">
                                アウェイ失点数
                            </h2>
                            <span className="text-white font-bold pr-3">
                                {
                                    statistic.json_statistics.goals.against
                                        .total.away
                                }
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">PK数</h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.penalty.total}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">PK成功数</h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.penalty.scored.total}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">PK成功率</h2>
                            <span className="text-white font-bold pr-3">
                                {
                                    statistic.json_statistics.penalty.scored
                                        .percentage
                                }
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">PK失敗数</h2>
                            <span className="text-white font-bold pr-3">
                                {statistic.json_statistics.penalty.missed.total}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] w-[20rem] lg:w-[20rem] md:w-[40rem] sm:w-[30rem] h-11 mt-[1px]">
                            <h2 className="text-[#EEEEEE] pl-3">PK失敗率</h2>
                            <span className="text-white font-bold pr-3">
                                {
                                    statistic.json_statistics.penalty.missed
                                        .percentage
                                }
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
