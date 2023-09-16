import { useParams } from "react-router-dom";
import { usePlayerStatisticsApi } from "../../../hooks/usePlayerStatisticsApi";
import { PlayerInformations } from "./PlayerInformations";
import { PlayerStatistics } from "./PlayerStatistics";

export const Player = () => {
    // パラメータを取得
    const { id, season } = useParams();

    const { statistics } = usePlayerStatisticsApi(id, season);

    return (
        <div>
            <div className="mt-6">
                <PlayerInformations statistics={statistics} />
            </div>
            <div className="mt-1 mb-6">
                <PlayerStatistics statistics={statistics} season={season} />
            </div>
        </div>
    );
};
