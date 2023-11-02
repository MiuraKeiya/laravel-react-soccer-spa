import { HomeTemplate } from "../components/templates/Home/HomeTemplate";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/organisms/Footer/Footer";
import { SideBar } from "../components/organisms/SideBar/SideBar";
import { Home } from "../components/organisms/Home/Home";
import { ScrollTopButton } from "../components/molecules/ScrollTopButton";
import { ScrollRestoration } from "react-router-dom";

export const HomePage = () => {
    return (
        <HomeTemplate
            header={<Header />}
            footer={<Footer />}
            sidebar={<SideBar />}
            scrollTopButton={<ScrollTopButton />}
        >
            <ScrollRestoration />
            <Home />
        </HomeTemplate>
    );
};
