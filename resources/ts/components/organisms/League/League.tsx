import { useParams } from "react-router-dom";
import { useLatestGamesApi } from "../../../hooks/useLatestGamesApi";
import { useStandingsApi } from "../../../hooks/useStandingsApi";
import { useLeagueGamesPaginateApi } from "../../../hooks/useLeagueGamesPaginateApi";
import { useRankingsApi } from "../../../hooks/useRankingsApi";
import { useLeagueTeamsApi } from "../../../hooks/useLeagueTeamsApi";
import { LeagueInformations } from "./LeagueInformations";
import { Selecter } from "./Selecter";
import { Helmet } from "react-helmet-async";

export const League = () => {
    // パラメータを取得
    const { id, season } = useParams();

    const [latestGames, latestGamesLoading, latestGamesError] =
        useLatestGamesApi(id, season);

    const { standings, loading, error } = useStandingsApi(id, season);

    // 試合一覧をページネーションで取得
    const [
        games,
        paginateLoading,
        setPage,
        lastPage,
        currentPage,
        paginateError,
    ] = useLeagueGamesPaginateApi(id, season);

    const [rankings, rankingsLoading, rankingsError] = useRankingsApi(
        id,
        season
    );

    const { teams } = useLeagueTeamsApi(id, season);

    return (
        <div>
            {latestGamesLoading ? (
                <Helmet>
                    <title>Football League</title>
                </Helmet>
            ) : (
                <Helmet>
                    <title>
                        {`${latestGames[0]?.json_detail?.league.name} ${season}・リーグ詳細`}
                    </title>
                </Helmet>
            )}
            <div className="mt-6">
                <LeagueInformations
                    latestGames={latestGames}
                    loading={latestGamesLoading}
                />
            </div>
            <div className="mt-1 mb-6">
                <Selecter
                    latestGamesLoading={latestGamesLoading}
                    latestGames={latestGames}
                    standings={standings}
                    pagenateGames={games}
                    setPage={setPage}
                    lastPage={lastPage}
                    currentPage={currentPage}
                    paginateLoading={paginateLoading}
                    rankings={rankings}
                    teams={teams}
                    standingsLoading={loading}
                />
            </div>
        </div>
    );
};
