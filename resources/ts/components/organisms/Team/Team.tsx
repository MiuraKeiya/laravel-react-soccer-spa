import { useParams } from "react-router-dom";
import { useTeamInformations } from "../../../hooks/useTeamInformationsApi";
import { useTeamPlayersApi } from "../../../hooks/useTeamPlayersApi";
import { useStandingsApi } from "../../../hooks/useStandingsApi";
import { useGamesPaginateApi } from "../../../hooks/useGamesPaginateApi";
import { TeamInformations } from "./TeamInformations";
import { NoData } from "../NotFound/NoData";
import { Selecter } from "./Selecter";
import { Title } from "./Title";
import { Page } from "../../../Page";
import { useErrors } from "../../../hooks/useErrors";
import { findMaxSeason } from "../../../functions/Utils";
import { Helmet } from "react-helmet-async";
import config from "../../../config";

export const Team = () => {
    // パラメータを取得
    const { id, season } = useParams();

    // チーム情報を取得
    const [informations, teamError, teamLoading] = useTeamInformations(
        id,
        season
    );

    // 試合日程・結果一覧を取得
    const [
        games,
        paginateLoading,
        setPage,
        lastPage,
        currentPage,
        paginateError,
    ] = useGamesPaginateApi(id, season);

    // 選手一覧を取得
    const [players, playersLoading, playersError] = useTeamPlayersApi(
        id,
        season
    );

    // チーム情報からリーグIDを取得
    const leagueId = informations[0]?.json_statistics?.league?.id;

    // 順位一覧を取得
    const { standings, loading, error } = useStandingsApi(leagueId, season);

    // 最大のシーズンを取得
    const maxSeason = findMaxSeason(config);

    const pageError = useErrors(teamError, paginateError, playersError, error);

    return (
        <Page error={pageError}>
            {teamLoading ? (
                <Helmet>
                    <title>Football League</title>
                </Helmet>
            ) : (
                <Helmet>
                    <title>
                        {`${informations[0]?.json_information.team.name} ${season}・チーム詳細`}
                    </title>
                </Helmet>
            )}
            {(!teamLoading && !informations.length) ||
            (!teamLoading && !informations[0]?.json_statistics?.league?.id) ? (
                <NoData season={season} name={"チーム"} id={id} url={"/team"} />
            ) : (
                <div className="mx-2 sm:mx-0">
                    <Title
                        teams={informations}
                        loading={teamLoading}
                        season={maxSeason}
                    />
                    <div>
                        <TeamInformations
                            informations={informations}
                            loading={teamLoading}
                        />
                    </div>
                    <div className="mt-1 mb-6">
                        <Selecter
                            informations={informations}
                            games={games}
                            setPage={setPage}
                            lastPage={lastPage}
                            currentPage={currentPage}
                            squad={players}
                            standings={standings}
                            id={id}
                            season={season}
                            paginateLoading={paginateLoading}
                            teamLoading={teamLoading}
                            standingsLoading={loading}
                            playersLoading={playersLoading}
                            maxSeason={maxSeason}
                        />
                    </div>
                </div>
            )}
        </Page>
    );
};
