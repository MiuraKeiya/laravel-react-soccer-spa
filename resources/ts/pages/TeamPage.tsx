import { TeamTemplate } from "../components/templates/Team/TeamTemplate";
import { Team } from "../components/organisms/Team/Team";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/atoms/footer/Footer";
import { SideBar } from "../components/organisms/SideBar/SideBar";

export const TeamPage = () => {
    return (
        <TeamTemplate
            header={<Header />}
            footer={<Footer />}
            sidebar={<SideBar />}
        >
            <Team />
        </TeamTemplate>
    );
};
