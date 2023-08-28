import { Icon } from "../atoms/Icon";
import { Link } from "react-router-dom";

export const HeaderLogo = () => {
    return (
        <a>
            <Icon
                src="/images/Original.png"
                alt="FootballLeague"
                className="h-10 w-hull"
            />
        </a>
    );
};
