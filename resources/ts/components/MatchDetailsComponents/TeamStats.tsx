import { useContext } from "react";
import { MatchDetailsContext } from "../../provider/MatchDetailsProvider";
import { GaugeBar } from "../atoms/GaugeBar";
import { Loading } from "../atoms/Loading";

export const TeamStats = () => {
    const { result, error } = useContext(MatchDetailsContext);

    let home = [];
    let away = [];
    let type = [];

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

    if (result.length === 0) {
        return null;
    }

    if (result.response.length > 0) {
        result.response.map((statistics) => {
            if (statistics.statistics[0]?.statistics) {
                statistics.statistics[0].statistics.map((stats) => {
                    home.push(stats.value);
                    type.push(translations[stats.type] || stats.type);
                });
            }

            if (statistics.statistics[1]?.statistics) {
                statistics.statistics[1].statistics.map((stats) => {
                    away.push(stats.value);
                });
            }
        });
    }

    return (
        <div className="mt-3">
            <div className="bg-[#111931] text-[#C8CDCD] text-[11px] font-bold py-1 text-center">
                チームスタッツ
            </div>
            {home.length > 0 ? (
                home.map((homeValue, index) => (
                    <div key={index} className="w-[500px] mx-auto">
                        <GaugeBar
                            homeValue={homeValue}
                            awayValue={away[index]}
                            type={type[index]}
                        />
                    </div>
                ))
            ) : (
                <div className="flex justify-center items-center h-[20rem]">
                    <div className="text-center text-[#C8CDCD] text-[13px]">
                        スタッツが存在しません。
                    </div>
                </div>
            )}
        </div>
    );
};
