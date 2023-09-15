import { useParams } from "react-router-dom";
import { useAllGamesApi } from "../../../hooks/useAllGamesApi";
import { useStandingsApi } from "../../../hooks/useStandingsApi";
import { LeagueInformations } from "./LeagueInformations";
import { Selecter } from "./Selecter";

export const League = () => {
    // パラメータを取得
    const { id, season } = useParams();

    const { games } = useAllGamesApi(id, season);

    const { standings } = useStandingsApi(id, season);

    return (
        <div>
            <div className="mt-6">
                <LeagueInformations games={games} />
            </div>
            <div className="mt-1 mb-6">
                <Selecter games={games} standings={standings} />
            </div>
        </div>
    );
};
