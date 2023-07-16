import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../../provider/PlayerProvider";
import { PlayerStatistics } from "../PlayerComponents/PlayerStatistics";
import { Header } from "../atoms/Header";
import { Footer } from "../atoms/Footer";
import { Sidebar } from "../atoms/Sidebar";

export const Player = () => {
    const { playeId } = useParams();

    const { setId, error } = useContext(PlayerContext);

    useEffect(() => {
        setId(playeId);
    }, [playeId]);

    return (
        <div className="min-h-screen bg-black">
            <div className="container mx-auto lg:max-w-3xl sm:px-3">
                <Header />
                <div className="flex flex-wrap border border-rose-500">
                    <Sidebar />
                    <PlayerStatistics />
                </div>
                <Footer />
            </div>
        </div>
    );
};
