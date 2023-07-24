import { useContext } from "react";
import { RankingContext } from "../../provider/RankingProvider";

export const LeagueLules = () => {
    const { rankingData } = useContext(RankingContext);

    const leagueLule = (leagueId) => {
        switch (leagueId) {
            case 39:
                return "シーズン終了時に同点のチームがいる場合は、得失点差で順位を決定する。";
            case 61:
                return "シーズン終了時に同点のチームがいる場合は、得失点差で順位を決定する。";
            case 78:
                return "シーズン終了時に同点のチームがいる場合は、得失点差で順位を決定する。";
            case 135:
                return "シーズン終了時に同点のチームがいる場合は、当該チームの直接対決の結果で順位を決定する。";
            case 140:
                return "シーズン終了時に同点のチームがいる場合は、当該チームの直接対決の結果で順位を決定する。";
            default:
                return "";
        }
    };

    return (
        <div className="mt-3">
            {rankingData?.all && rankingData.all.response.map((ranking, index) => (
                <div key={index}>
                    <div className="flex items-center space-x-1">
                        <img src={ranking.league.logo} className="w-6 h-6" />
                        <p className="text-[12px] text-[#C8CDCD] uppercase font-bold">
                            {ranking.league.name}ルール:
                        </p>
                    </div>
                    <p className="text-[12px] text-[#EEEEEE]">
                        {leagueLule(ranking.league.id)}
                    </p>
                </div>
            ))}
        </div>
    );
};
