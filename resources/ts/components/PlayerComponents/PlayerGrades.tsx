import { useContext } from "react";
import { PlayerContext } from "../../provider/PlayerProvider";
import { PlayerSeason } from "./PlayerSeason";

export const PlayerGrades = () => {
    const { playerData, error } = useContext(PlayerContext);

    const playerData2023 = playerData[2023];
    const playerData2022 = playerData[2022];

    return (
        <div className="mt-3">
            <div className="border-b border-[#111931] mb-2"></div>
            <div className="bg-[#111931] py-1 flex items-center">
                <span className="text-[#C8CDCD] text-[12px] font-bold ml-3">
                    選手統計
                </span>
            </div>
            <div className="mt-2">
                <div className="text-[13px] font-bold text-[#C8CDCD] ml-3">
                    シーズン 2023 - 2024
                </div>
                <PlayerSeason />
            </div>
        </div>
    );
};
