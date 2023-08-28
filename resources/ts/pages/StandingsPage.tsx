import { StandingsTemplate } from "../components/templates/Standings/StandingsTemplate";
import { StandingsSelecter } from "../components/organisms/Standings/StandingsSelecter";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/atoms/footer/Footer";

export const StandingsPage = () => {
    return (
        <StandingsTemplate header={<Header />} footer={<Footer />}>
            <StandingsSelecter />
        </StandingsTemplate>
    );
};
