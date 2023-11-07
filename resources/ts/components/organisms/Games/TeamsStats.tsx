import { GaugeBar } from "../../molecules/GaugeBar";
import { StatsLoading } from "./Loading/StatsLoading";

export const TeamsStats = ({ games, loading }) => {
    const translations = {
        "Shots on Goal": "枠内シュート",
        "Shots off Goal": "枠外シュート",
        "Total Shots": "シュート数",
        "Blocked Shots": "ブロックされたシュート数",
        "Shots insidebox": "ボックス内のシュート数",
        "Shots outsidebox": "ボックス外のシュート数",
        Fouls: "ファウル",
        "Corner Kicks": "コーナーキック",
        Offsides: "オフサイド数",
        "Ball Possession": "ボールポゼッション",
        "Yellow Cards": "イエローカード",
        "Red Cards": "レッドカード",
        "Goalkeeper Saves": "ゴールキーパーセーブ数",
        "Total passes": "パス本数",
        "Passes accurate": "パス成功",
        "Passes %": "パス精度",
        expected_goals: "ゴール期待値",
    };

    const homeStatistics = games[0]?.json_detail?.statistics[0]?.statistics;
    const awayStatistics = games[0]?.json_detail?.statistics[1]?.statistics;

    // ホームとアウェイの統計データをフラット化し、typeをtranslationsに変換
    const flattenedHomeStatistics = homeStatistics
        ? homeStatistics.flat().map((stat) => ({
              ...stat,
              type: translations[stat.type] || stat.type,
          }))
        : [];

    const flattenedAwayStatistics = awayStatistics
        ? awayStatistics.flat().map((stat) => ({
              ...stat,
              type: translations[stat.type] || stat.type,
          }))
        : [];

    return (
        <div>
            <div className="bg-[#111931] text-[#EEEEEE] text-[18px] font-bold py-1 text-center rounded-b">
                チームスタッツ
            </div>
            {loading ? (
                <StatsLoading />
            ) : (
                <div className="bg-[#1d2233] mt-1 rounded pb-2">
                    {flattenedHomeStatistics.map((homeStat, index) => (
                        <div key={index} className="pt-3 pb-6">
                            <GaugeBar
                                homeValue={homeStat.value}
                                awayValue={flattenedAwayStatistics[index].value}
                                type={homeStat.type}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
