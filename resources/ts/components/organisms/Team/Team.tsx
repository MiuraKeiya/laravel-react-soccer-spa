import { useParams } from "react-router-dom";
import { useTeamInformations } from "../../../hooks/useTeamInformationsApi";
import { useTeamPlayersApi } from "../../../hooks/useTeamPlayersApi";
import { TeamInformations } from "./TeamInformations";
import { Selecter } from "./Selecter";

export const Team = () => {
    // パラメータを取得
    const { id, season } = useParams();

    const { informations } = useTeamInformations(id, season);

    const { players } = useTeamPlayersApi(id, season);

    return (
        <div>
            <div className="mt-6">
                <TeamInformations informations={informations} />
            </div>
            <div className="mt-1 mb-6">
                <Selecter informations={informations} squad={players}/>
            </div>
        </div>
    );
};
