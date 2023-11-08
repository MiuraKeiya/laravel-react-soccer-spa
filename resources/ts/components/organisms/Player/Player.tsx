import { useParams } from "react-router-dom";
import { NoData } from "../NotFound/NoData";
import { usePlayerStatisticsApi } from "../../../hooks/usePlayerStatisticsApi";
import { InformationLoading } from "./Loading/InformationLoading";
import { PlayerInformations } from "./PlayerInformations";
import { PlayerStatistics } from "./PlayerStatistics";
import { StatisticLoading } from "./Loading/StatisticLoading";
import { StatisticTitle } from "./StatisticTitle";
import { Page } from "../../../Page";
import { Helmet } from "react-helmet-async";

export const Player = () => {
    // パラメータを取得
    const { id, season } = useParams();

    const { statistics, loading, error } = usePlayerStatisticsApi(id, season);

    return (
        <Page error={error}>
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
                    {loading ? (
                        <InformationLoading />
                    ) : statistics.length > 0 ? (
                        <PlayerInformations statistics={statistics} />
                    ) : (
                        <NoData
                            season={season}
                            name={"選手"}
                            id={id}
                            url={"/player"}
                        />
                    )}
                </div>
                <div className="mt-1 mb-6">
                    {loading ? (
                        <StatisticTitle
                            season={season}
                            id={id}
                            loading={loading}
                        />
                    ) : (
                        statistics.length > 0 && (
                            <StatisticTitle
                                season={season}
                                id={id}
                                loading={loading}
                            />
                        )
                    )}
                    {loading ? (
                        <StatisticLoading />
                    ) : (
                        statistics.length > 0 && (
                            <PlayerStatistics statistics={statistics} />
                        )
                    )}
                </div>
            </div>
        </Page>
    );
};
