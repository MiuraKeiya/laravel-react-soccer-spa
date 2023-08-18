import { Header } from "../../atoms/header/Header";
import { Footer } from "../../atoms/footer/Footer";

export const HomeTemplate = ({ children }) => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};
