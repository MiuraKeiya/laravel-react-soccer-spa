import { useParams } from "react-router-dom";
import { useTeamInformations } from "../../../hooks/useTeamInformationsApi";
import { useTeamPlayersApi } from "../../../hooks/useTeamPlayersApi";
import { useStandingsApi } from "../../../hooks/useStandingsApi";
import { useGamesPaginateApi } from "../../../hooks/useGamesPaginateApi";
import { TeamInformations } from "./TeamInformations";
import { Selecter } from "./Selecter";

export const Team = () => {
    // パラメータを取得
    const { id, season } = useParams();

    // チーム情報を取得
    const { informations } = useTeamInformations(id, season);

    // 試合日程・結果一覧を取得
    const { games, setPage, lastPage, currentPage } = useGamesPaginateApi(
        id,
        season
    );

    // 選手一覧を取得
    const { players } = useTeamPlayersApi(id, season);

    // チーム情報からリーグIDを取得
    const leagueId = informations[0]?.json_statistics.league.id;

    // 順位一覧を取得
    const { standings } = useStandingsApi(leagueId, season);

    return (
        <div>
            <div className="mt-6">
                <TeamInformations informations={informations} />
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
                />
            </div>
        </div>
    );
};
