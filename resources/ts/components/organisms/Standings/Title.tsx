import { Link } from "react-router-dom";
import { TitleLoading } from "./TitleLoading";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const Title = ({ standings, loading, season }) => {
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
                        to={`/league/${standings?.league?.id}/season/${season}`}
                        className="text-[#7A84FF]"
                    >
                        {standings?.league?.name}
                    </Link>
                    <ArrowRightIcon />
                    <p className="truncate w-[11rem] sm:w-[20rem]">
                        {standings?.league?.name}の順位表,各ランキング
                    </p>
                </div>
            )}
        </>
    );
};
