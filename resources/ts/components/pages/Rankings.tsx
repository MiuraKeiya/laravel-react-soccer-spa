import { Header } from "../atoms/Header";
import { Footer } from "../atoms/Footer";
import { Sidebar } from "../atoms/Sidebar";
import { TeamRankings } from "../RankingComponents/TeamRankings";

export const Rankings = () => {
    return (
        <div className="flex flex-col bg-black">
            <Header />
            <div className="container mx-auto lg:max-w-4xl flex flex-wrap border border-rose-500 min-h-screen">
                <Sidebar />
                <TeamRankings />
            </div>
            <Footer />
        </div>
    );
};
