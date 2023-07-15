import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../../provider/PlayerProvider";
import { PlayerStatistics } from "../PlayerComponents/PlayerStatistics";
import { Header } from "../atoms/Header";
import { Footer } from "../atoms/Footer";

export const Player = () => {
    const { playeId } = useParams();

    const { setId, error } = useContext(PlayerContext);
    
    useEffect(() => {
        setId(playeId);
    }, [playeId]);

    return (
        <div className="bg-black">
            <div className="flex flex-col min-h-screen container mx-auto lg:max-w-2xl">
                <Header />
                <PlayerStatistics />
                <Footer />
            </div>
        </div>
    );
};
