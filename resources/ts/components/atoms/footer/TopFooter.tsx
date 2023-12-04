import { Link } from "react-router-dom";

export const TopFooter = () => {
    return (
        <div className="bg-[#111931] h-14 flex items-center justify-center space-x-2">
            <span className="text-[#B0EE1B] text-sm">
                &copy; {new Date().getFullYear()} Football League
            </span>
            <Link
                to="/tos"
                className="text-white text-opacity-80 text-sm font-semibold hover:text-opacity-50"
            >
                利用規約
            </Link>
        </div>
    );
};
