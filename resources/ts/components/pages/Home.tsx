import { FixtureResult } from "../HomeComponents/FixtureResult";
import { Header } from "../atoms/Header";
import { Footer } from "../atoms/Footer";

export const Home = () => {
    return (
        <div>
            <Header />
            <FixtureResult />
            <Footer />
        </div>
    );
};
