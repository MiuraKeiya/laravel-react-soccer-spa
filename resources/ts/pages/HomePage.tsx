import { HomeTemplate } from "../components/templates/Home/HomeTemplate";
import { GamesDate } from "../components/organisms/Home/GamesDate";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/atoms/footer/Footer";
import { SideBar } from "../components/organisms/SideBar/SideBar";

export const HomePage = () => {
    return (
        <HomeTemplate
            header={<Header />}
            footer={<Footer />}
            sidebar={<SideBar />}
        >
            <GamesDate />
        </HomeTemplate>
    );
};
