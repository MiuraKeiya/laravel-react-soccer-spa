import { useParams } from "react-router-dom";
import { useStandingsApi } from "../../../hooks/useStandingsApi";
import { useRankingsApi } from "../../../hooks/useRankingsApi";
import { StandingsInformations } from "./StandingsInformations";
import { TopScorerSelecter } from "../League/TopScorerSelecter";

export const Standings = () => {
    const { id, season } = useParams();

    const { standings, loading, error } = useStandingsApi(id, season);

    const { rankings } = useRankingsApi(id, season);

    return (
        <div>
            <div className="mt-6">
                <StandingsInformations
                    standings={standings}
                    loading={loading}
                />
            </div>
            <div className="mb-6">
                <TopScorerSelecter
                    standings={standings}
                    rankings={rankings}
                    loading={loading}
                />
            </div>
        </div>
    );
};
