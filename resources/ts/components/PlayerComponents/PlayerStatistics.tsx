import { useContext } from "react";
import { PlayerContext } from "../../provider/PlayerProvider";
import { PlayerProfile } from "./PlayerProfile";
import { Loading } from "../atoms/Loading";

export const PlayerStatistics = () => {
    const { playerData, error } = useContext(PlayerContext);
    if (playerData.length === 0) {
        return <Loading />;
    }
    return (
        <main className="flex-grow bg-[#1d2233]">
            <PlayerProfile />
        </main>
    );
};
