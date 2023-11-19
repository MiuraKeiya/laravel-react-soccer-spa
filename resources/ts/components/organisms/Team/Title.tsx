import { Link } from "react-router-dom";
import { TitleLoading } from "./Loading/TitleLoading";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const Title = ({ teams, loading, season }) => {
    return (
        <>
            {loading ? (
                <TitleLoading />
            ) : (
                <div className="text-gray-500 my-[4px] text-[12px] font-bold flex items-center">
                    <Link to="/" className="text-[#7A84FF]">
                        ホーム
                    </Link>
                    <ArrowRightIcon />
                    <Link
                        to={`/league/${teams[0]?.json_statistics?.league?.id}/season/${season}`}
                        className="text-[#7A84FF]"
                    >
                        {teams[0]?.json_statistics?.league?.name}
                    </Link>
                    <ArrowRightIcon />
                    <p className="truncate sm:w-[30rem] w-[12rem]">
                        {teams[0]?.json_information?.team?.name}
                        の試合日程,統計,順位表
                    </p>
                </div>
            )}
        </>
    );
};
