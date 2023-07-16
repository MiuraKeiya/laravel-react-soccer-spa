import { useContext } from "react";
import { PlayerContext } from "../../provider/PlayerProvider";
import { PlayerProfile } from "./PlayerProfile";
import { Loading } from "../atoms/Loading";
import { PlayerGrades } from "./PlayerGrades";

export const PlayerStatistics = () => {
    const { playerData, error } = useContext(PlayerContext);
    if (playerData.length === 0) {
        return <Loading />;
    }
    return (
        <main className="flex-grow bg-[#1d2233]">
            <PlayerProfile />
            <PlayerGrades />
        </main>
    );
};
