import { useParams } from "react-router-dom";
import { usePlayerStatisticsApi } from "../../../hooks/usePlayerStatisticsApi";
import { PlayerInformations } from "./PlayerInformations";
import { PlayerStatistics } from "./PlayerStatistics";
import { Helmet } from "react-helmet-async";

export const Player = () => {
    // パラメータを取得
    const { id, season } = useParams();

    const { statistics, loading } = usePlayerStatisticsApi(id, season);

    return (
        <div>
            {loading ? (
                <Helmet>
                    <title>Football League</title>
                </Helmet>
            ) : (
                <Helmet>
                    <title>
                        {`${statistics[0]?.json_statistics?.player.name}(${statistics[0]?.json_statistics?.statistics[0]?.team.name}) ${season}・選手プロフィール`}
                    </title>
                </Helmet>
            )}
            <div className="mt-6">
                <PlayerInformations statistics={statistics} />
            </div>
            <div className="mt-1 mb-6">
                <PlayerStatistics statistics={statistics} season={season} />
            </div>
        </div>
    );
};
