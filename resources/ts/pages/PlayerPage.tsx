import { PlayerTemplate } from "../components/templates/Player/PlayerTemplate";
import { Player } from "../components/organisms/Player/Player";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/organisms/Footer/Footer";
import { SideBar } from "../components/organisms/SideBar/SideBar";
import { ScrollRestoration } from "react-router-dom";

export const PlayerPage = () => {
    return (
        <PlayerTemplate
            header={<Header />}
            footer={<Footer />}
            sidebar={<SideBar />}
        >
            <ScrollRestoration />
            <Player />
        </PlayerTemplate>
    );
};
