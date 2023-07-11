import { Header } from "../atoms/Header";
import { Match } from "../MatchDetailsComponents/Match";
import { Footer } from "../atoms/Footer";

export const MatchDetails = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-col min-h-screen container mx-auto lg:max-w-2xl">
                <Header />
                <Match />
                <Footer />
            </div>
        </div>
    );
};
