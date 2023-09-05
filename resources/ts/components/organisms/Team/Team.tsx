import { useParams } from "react-router-dom";
import { useTeamInformations } from "../../../hooks/useTeamInformationsApi";
import { TeamInformations } from "./TeamInformations";

export const Team = () => {
    // パラメータを取得
    const { id, season } = useParams();

    const { informations } = useTeamInformations(id, season);

    return (
        <div>
            <div className="mt-6">
                <TeamInformations informations={informations} />
            </div>
            <div className="mt-6">dasd</div>
        </div>
    );
};
