import { LinkButton } from "../atoms/LinkButton";

export const HeaderLink = () => {
    return (
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <LinkButton
                text="アカウント"
                className="mr-5 hover:text-gray-900"
            />
            <LinkButton
                text="ログアウト"
                className="mr-5 hover:text-gray-900"
            />
        </nav>
    );
};
