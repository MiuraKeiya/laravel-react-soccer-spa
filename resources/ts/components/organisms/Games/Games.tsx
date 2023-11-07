import { useGameDetailsApi } from "../../../hooks/useGameDetailsApi";
import { useStandingsApi } from "../../../hooks/useStandingsApi";
import { useParams } from "react-router-dom";
import { Page } from "../../../Page";
import { useErrors } from "../../../hooks/useErrors";
import { GamesTitle } from "./GamesTitle";
import { Selecter } from "./Selecter";
import { GamesMessage } from "../../molecules/GamesMessage";
import config from "../../../config";
import { findMaxSeason } from "../../../functions/Utils";
import { Helmet } from "react-helmet-async";

export const Games = () => {
    const { gameId, leagueId, season } = useParams();

    const [games, gamesLoading, gamesError] = useGameDetailsApi(gameId);

    const { standings, loading, error } = useStandingsApi(leagueId, season);

    // 最大のシーズンを取得
    const maxSeason = findMaxSeason(config);

    const homeTeamId = games[0]?.json_detail?.teams.home.id;

    const awayTeamId = games[0]?.json_detail?.teams.away.id;

    const teamIds = [homeTeamId, awayTeamId];

    // games[0] が存在し、json_detail.events が存在するかどうかをチェック
    const hasEvents =
        games[0]?.json_detail?.events &&
        games[0]?.json_detail?.events.length > 0;

    // 各エラーをまとめる
    const pageError = useErrors(gamesError, error);

    return (
        <Page error={pageError}>
            <div>
                {gamesLoading ? (
                    <Helmet>
                        <title>Football League</title>
                    </Helmet>
                ) : (
                    <Helmet>
                        <title>
                            {`${games[0]?.json_detail?.teams.home.name} - ${games[0]?.json_detail?.teams.away.name} ${season}・試合詳細`}
                        </title>
                    </Helmet>
                )}
                <div className="mt-6">
                    <GamesTitle
                        games={games}
                        loading={gamesLoading}
                        maxSeason={maxSeason}
                    />
                </div>
                <div className="mt-1 mb-6">
                    {hasEvents ? (
                        <Selecter
                            games={games}
                            standings={standings}
                            loading={gamesLoading}
                            standingsLoading={loading}
                            teamIds={teamIds}
                            maxSeason={maxSeason}
                        />
                    ) : (
                        !gamesLoading && (
                            <GamesMessage>
                                この試合にはまだイベントがありません。
                            </GamesMessage>
                        )
                    )}
                </div>
            </div>
        </Page>
    );
};
