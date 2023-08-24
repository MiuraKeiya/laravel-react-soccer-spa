import { HeaderLogo } from "../molecules/HeaderLogo";
import { HeaderLink } from "../molecules/HeaderLink";

export const Header = () => {
    return (
        <header className="text-gray-600 body-font bg-[#111931] border-b-[2px] border-[#B0EE1B]">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <HeaderLogo />
                <HeaderLink />
            </div>
        </header>
    );
};
