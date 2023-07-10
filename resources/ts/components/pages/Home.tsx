import { FixtureResult } from "../HomeComponents/FixtureResult";
import { Header } from "../atoms/Header";
import { Footer } from "../atoms/Footer";

export const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="container mx-auto border border-red-500">
                <FixtureResult />
            </div>
            <Footer />
        </div>
    );
};
