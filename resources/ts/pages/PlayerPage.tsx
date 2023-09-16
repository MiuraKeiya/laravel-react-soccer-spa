import { PlayerTemplate } from "../components/templates/Player/PlayerTemplate";
import { Player } from "../components/organisms/Player/Player";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/atoms/footer/Footer";
import { SideBar } from "../components/organisms/SideBar/SideBar";

export const PlayerPage = () => {
    return (
        <PlayerTemplate
            header={<Header />}
            footer={<Footer />}
            sidebar={<SideBar />}
        >
            <Player />
        </PlayerTemplate>
    );
};
