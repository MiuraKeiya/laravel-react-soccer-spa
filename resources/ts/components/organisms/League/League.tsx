import { useParams } from "react-router-dom";
import { useAllGamesApi } from "../../../hooks/useAllGamesApi";
import { LeagueInformations } from "./LeagueInformations";

export const League = () => {
    // パラメータを取得
    const { id, season } = useParams();

    const { games } = useAllGamesApi(id, season);

    return (
        <div>
            <div className="mt-6">
                <LeagueInformations games={games} />
            </div>
        </div>
    );
};
