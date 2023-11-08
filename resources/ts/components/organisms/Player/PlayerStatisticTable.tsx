export const PlayerStatisticTable = ({ statistics }) => {
    return (
        <div className="flex pb-6">
            <div className="pb-3 lg:pb-0 w-full mx-3">
                <h1 className="text-[20px] text-white">総合</h1>
                {statistics.map((team, index) => (
                    <div key={index}>
                        <div
                            className="flex justify-between items-center bg-[#111931] h-11 mt-1 border-t-2 border-[#b657f5]"
                            key={index}
                        >
                            <span className="text-[#EEEEEE] pl-3">ベンチ</span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0]
                                          .substitutes.bench
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                途中出場
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0]
                                          .substitutes.on || 0
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                途中交代
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0]
                                          .substitutes.out || 0
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                イエローカード
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].cards
                                          .yellow
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                レッドカード
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].cards
                                          .red
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                ダブルイエローカード
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].cards
                                          .yellowred
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                タックル
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].tackles
                                          .total
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                ブロック
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].tackles
                                          .blocks
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                インターセプト
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].tackles
                                          .interceptions
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                ファウル
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].fouls
                                          .committed
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                受けたファウル
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].fouls
                                          .drawn
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                デュエル
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].duels
                                          .total
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">勝利</span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].duels
                                          .won
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">セーブ</span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].goals
                                          .saves
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">失点</span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].goals
                                          .conceded
                                    : 0}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pb-3 lg:pb-0 mx-3 w-full">
                <h1 className="text-[20px] text-white">攻撃</h1>
                {statistics.map((team, index) => (
                    <div key={index}>
                        <div
                            className="flex justify-between items-center bg-[#111931] h-11 mt-1 border-t-2 border-[#b657f5]"
                            key={index}
                        >
                            <span className="text-[#EEEEEE] pl-3">得点</span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].goals
                                          .total
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                アシスト
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].goals
                                          .assists || 0
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                シュート
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].shots
                                          .total
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                枠内シュート
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].shots
                                          .on || 0
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">パス</span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].passes
                                          .total
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                パス成功率
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].passes
                                          .accuracy || 0
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                キーパス
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0].passes
                                          .key || 0
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                ドリブル
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0]
                                          .dribbles.attempts
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                ドリブル成功率
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0]
                                          .dribbles.success || 0
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#111931] h-11 mt-[1px]">
                            <span className="text-[#EEEEEE] pl-3">
                                ドリブルパス
                            </span>
                            <span className="text-white font-bold pr-3">
                                {team.json_statistics.statistics[0].games
                                    .appearences !== null
                                    ? team.json_statistics.statistics[0]
                                          .dribbles.past || 0
                                    : 0}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
