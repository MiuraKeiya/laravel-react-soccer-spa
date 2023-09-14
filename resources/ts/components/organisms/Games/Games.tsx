import { useGameDetailsApi } from "../../../hooks/useGameDetailsApi";
import { useStandingsApi } from "../../../hooks/useStandingsApi";
import { useParams } from "react-router-dom";
import { GamesTitle } from "./GamesTitle";
import { Selecter } from "./Selecter";

export const Games = () => {
    const { gameId, leagueId, season } = useParams();

    const { games, loading } = useGameDetailsApi(gameId);

    const { standings } = useStandingsApi(leagueId, season);

    const homeTeamId = games[0]?.json_detail?.teams.home.id;

    const awayTeamId = games[0]?.json_detail?.teams.away.id;

    const teamIds = [homeTeamId, awayTeamId];

    return (
        <div>
            <div className="mt-6">
                <GamesTitle games={games} loading={loading} />
            </div>
            <div className="mt-1 mb-6">
                <Selecter
                    games={games}
                    standings={standings}
                    loading={loading}
                    teamIds={teamIds}
                />
            </div>
        </div>
    );
};
