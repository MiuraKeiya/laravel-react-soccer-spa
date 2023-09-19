import { StandingsTemplate } from "../components/templates/Standings/StandingsTemplate";
import { Standings } from "../components/organisms/Standings/Standings";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/atoms/footer/Footer";
import { SideBar } from "../components/organisms/SideBar/SideBar";

export const StandingsPage = () => {
    return (
        <StandingsTemplate
            header={<Header />}
            footer={<Footer />}
            sidebar={<SideBar />}
        >
            <Standings />
        </StandingsTemplate>
    );
};
