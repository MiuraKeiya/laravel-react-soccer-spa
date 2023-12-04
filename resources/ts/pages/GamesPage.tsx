import { GamesTemplate } from "../components/templates/Games/GamesTemplate";
import { Games } from "../components/organisms/Games/Games";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/organisms/Footer/Footer";
import { SideBar } from "../components/organisms/SideBar/SideBar";
import { ScrollTopButton } from "../components/molecules/ScrollTopButton";
import { ScrollRestoration } from "react-router-dom";

export const GamesPage = () => {
    return (
        <GamesTemplate
            header={<Header />}
            footer={<Footer />}
            sidebar={<SideBar />}
            scrollTopButton={<ScrollTopButton />}
        >
            <Games />
            <ScrollRestoration />
        </GamesTemplate>
    );
};
