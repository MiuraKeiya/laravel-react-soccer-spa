import { useGameDetailsApi } from "../../../hooks/useGameDetailsApi";
import { useParams } from "react-router-dom";
import { GamesTitle } from "./GamesTitle";
import { Selecter } from "./Selecter";

export const Games = () => {
    const { gameId, leagueId, season } = useParams();

    const { games, loading } = useGameDetailsApi(gameId);

    return (
        <div>
            <div className="mt-6">
                <GamesTitle games={games} />
            </div>
            <div className="mt-1 mb-6">
                <Selecter />
            </div>
        </div>
    );
};
