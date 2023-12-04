import { LeagueTemplate } from "../components/templates/League/LeagueTemplate";
import { League } from "../components/organisms/League/League";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/organisms/Footer/Footer";
import { SideBar } from "../components/organisms/SideBar/SideBar";
import { ScrollTopButton } from "../components/molecules/ScrollTopButton";
import { ScrollRestoration } from "react-router-dom";

export const LeaguePage = () => {
    return (
        <LeagueTemplate
            header={<Header />}
            footer={<Footer />}
            sidebar={<SideBar />}
            scrollTopButton={<ScrollTopButton />}
        >
            <ScrollRestoration />
            <League />
        </LeagueTemplate>
    );
};
