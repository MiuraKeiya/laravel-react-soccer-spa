import { useParams } from "react-router-dom";
import { useStandingsApi } from "../../../hooks/useStandingsApi";
import { useRankingsApi } from "../../../hooks/useRankingsApi";
import { StandingsInformations } from "./StandingsInformations";
import { TopScorerSelecter } from "../League/TopScorerSelecter";
import { NoData } from "../NotFound/NoData";
import { useErrors } from "../../../hooks/useErrors";
import { Page } from "../../../Page";
import config from "../../../config";
import { findMaxSeason } from "../../../functions/Utils";
import { Helmet } from "react-helmet-async";

export const Standings = () => {
    const { id, season } = useParams();

    const { standings, loading, error } = useStandingsApi(id, season);

    const [rankings, rankingsLoading, rankingsError] = useRankingsApi(
        id,
        season
    );

    // 最大のシーズンを取得
    const maxSeason = findMaxSeason(config);

    // エラーをまとめる
    const pageError = useErrors(error, rankingsError);

    return (
        <Page error={pageError}>
            {loading ? (
                <Helmet>
                    <title>Football League</title>
                </Helmet>
            ) : (
                <Helmet>
                    <title>
                        {`${standings?.league?.name} ${season}・順位表・得点王`}
                    </title>
                </Helmet>
            )}
            <div>
                {!loading && !rankingsLoading && !rankings.length ? (
                    <NoData
                        season={season}
                        name={"順位"}
                        id={id}
                        url={"/standings/league"}
                    />
                ) : (
                    <>
                        <div className="mt-6">
                            <StandingsInformations
                                standings={standings}
                                loading={loading}
                                season={maxSeason}
                                id={id}
                            />
                        </div>
                        <div className="mb-6">
                            <TopScorerSelecter
                                standings={standings}
                                rankings={rankings}
                                loading={loading}
                                rankingsLoading={rankingsLoading}
                                maxSeason={maxSeason}
                            />
                        </div>
                    </>
                )}
            </div>
        </Page>
    );
};
