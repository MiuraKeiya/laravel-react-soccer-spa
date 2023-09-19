import { useGameDetailsApi } from "../../../hooks/useGameDetailsApi";
import { useStandingsApi } from "../../../hooks/useStandingsApi";
import { useParams } from "react-router-dom";
import { GamesTitle } from "./GamesTitle";
import { Selecter } from "./Selecter";
import { GamesMessage } from "../../molecules/GamesMessage";
import config from "../../../config";
import { findMaxSeason } from "../../../functions/Utils";

export const Games = () => {
    const { gameId, leagueId, season } = useParams();

    const { games, loading } = useGameDetailsApi(gameId);

    const { standings } = useStandingsApi(leagueId, season);

    // 最大のシーズンを取得
    const maxSeason = findMaxSeason(config);

    const homeTeamId = games[0]?.json_detail?.teams.home.id;

    const awayTeamId = games[0]?.json_detail?.teams.away.id;

    const teamIds = [homeTeamId, awayTeamId];

    // games[0] が存在し、json_detail.events が存在するかどうかをチェック
    const hasEvents =
        games[0]?.json_detail?.events &&
        games[0]?.json_detail?.events.length > 0;

    return (
        <div>
            <div className="mt-6">
                <GamesTitle
                    games={games}
                    loading={loading}
                    maxSeason={maxSeason}
                />
            </div>
            <div className="mt-1 mb-6">
                {hasEvents ? (
                    // json_detail.events が存在する場合の表示
                    <Selecter
                        games={games}
                        standings={standings}
                        loading={loading}
                        teamIds={teamIds}
                        maxSeason={maxSeason}
                    />
                ) : (
                    // json_detail.events が存在しない場合の表示
                    <GamesMessage>
                        この試合にはまだイベントがありません。
                    </GamesMessage>
                )}
            </div>
        </div>
    );
};
