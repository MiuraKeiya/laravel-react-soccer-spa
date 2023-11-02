import { StandingsTemplate } from "../components/templates/Standings/StandingsTemplate";
import { Standings } from "../components/organisms/Standings/Standings";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/organisms/Footer/Footer";
import { SideBar } from "../components/organisms/SideBar/SideBar";
import { ScrollTopButton } from "../components/molecules/ScrollTopButton";
import { ScrollRestoration } from "react-router-dom";

export const StandingsPage = () => {
    return (
        <StandingsTemplate
            header={<Header />}
            footer={<Footer />}
            sidebar={<SideBar />}
            scrollTopButton={<ScrollTopButton />}
        >
            <ScrollRestoration />
            <Standings />
        </StandingsTemplate>
    );
};
