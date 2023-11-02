import { TeamTemplate } from "../components/templates/Team/TeamTemplate";
import { Team } from "../components/organisms/Team/Team";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/organisms/Footer/Footer";
import { SideBar } from "../components/organisms/SideBar/SideBar";
import { ScrollTopButton } from "../components/molecules/ScrollTopButton";
import { ScrollRestoration } from "react-router-dom";

export const TeamPage = () => {
    return (
        <TeamTemplate
            header={<Header />}
            footer={<Footer />}
            sidebar={<SideBar />}
            scrollTopButton={<ScrollTopButton />}
        >
            <ScrollRestoration />
            <Team />
        </TeamTemplate>
    );
};
