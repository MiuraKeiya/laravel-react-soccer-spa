import { StandingsTemplate } from "../components/templates/Standings/StandingsTemplate";
import { Standings } from "../components/organisms/Standings/Standings";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/atoms/footer/Footer";
import { SideBar } from "../components/organisms/SideBar/SideBar";
import { ScrollRestoration } from "react-router-dom";

export const StandingsPage = () => {
    return (
        <StandingsTemplate
            header={<Header />}
            footer={<Footer />}
            sidebar={<SideBar />}
        >
            <ScrollRestoration />
            <Standings />
        </StandingsTemplate>
    );
};
