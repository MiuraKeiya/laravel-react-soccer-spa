import { FixtureResult } from "../HomeComponents/FixtureResult";
import { Header } from "../atoms/Header";
import { Footer } from "../atoms/Footer";
import { Sidebar } from "../atoms/Sidebar";

export const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Header />
            <div className="container mx-auto lg:max-w-4xl sm:px-3 py-5 flex flex-wrap border border-rose-500">
                <Sidebar />
                <FixtureResult />
            </div>
            <Footer />
        </div>
    );
};
