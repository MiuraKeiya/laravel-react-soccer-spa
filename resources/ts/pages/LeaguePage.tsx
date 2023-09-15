import { LeagueTemplate } from "../components/templates/League/LeagueTemplate";
import { League } from "../components/organisms/League/League";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/atoms/footer/Footer";
import { SideBar } from "../components/organisms/SideBar/SideBar";

export const LeaguePage = () => {
    return (
        <LeagueTemplate
            header={<Header />}
            footer={<Footer />}
            sidebar={<SideBar />}
        >
            <League />
        </LeagueTemplate>
    );
};
