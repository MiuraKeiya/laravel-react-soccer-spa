import { useParams } from "react-router-dom";
import { useLatestGamesApi } from "../../../hooks/useLatestGamesApi";
import { useStandingsApi } from "../../../hooks/useStandingsApi";
import { useLeagueGamesPaginateApi } from "../../../hooks/useLeagueGamesPaginateApi";
import { useRankingsApi } from "../../../hooks/useRankingsApi";
import { LeagueInformations } from "./LeagueInformations";
import { Selecter } from "./Selecter";

export const League = () => {
    // パラメータを取得
    const { id, season } = useParams();

    const { latestGames } = useLatestGamesApi(id, season);

    const { standings } = useStandingsApi(id, season);

    const { pagenateGames, paginateLoading, setPage, lastPage, currentPage } =
        useLeagueGamesPaginateApi(id, season);

    const { rankings } = useRankingsApi(id, season);

    return (
        <div>
            <div className="mt-6">
                <LeagueInformations latestGames={latestGames} />
            </div>
            <div className="mt-1 mb-6">
                <Selecter
                    latestGames={latestGames}
                    standings={standings}
                    pagenateGames={pagenateGames}
                    setPage={setPage}
                    lastPage={lastPage}
                    currentPage={currentPage}
                    paginateLoading={paginateLoading}
                    rankings={rankings}
                />
            </div>
        </div>
    );
};
