import { Link } from "react-router-dom";
import { TitleLoading } from "./Loading/TitleLoading";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const Title = ({ statistics, loading, season }) => {
    return (
        <>
            {loading ? (
                <TitleLoading />
            ) : statistics.length > 0 ? (
                <div className="text-gray-500 my-[4px] text-[12px] font-bold flex items-center">
                    <Link to="/" className="text-[#7A84FF]">
                        ホーム
                    </Link>
                    <ArrowRightIcon />
                    <Link
                        to={`/league/${statistics[0]?.json_statistics?.statistics[0]?.league?.id}/season/${season}`}
                        className="text-[#7A84FF]"
                    >
                        {
                            statistics[0]?.json_statistics?.statistics[0]
                                ?.league?.name
                        }
                    </Link>
                    <ArrowRightIcon />
                    <p className="truncate w-[11rem] sm-[25rem]">
                        {statistics[0]?.json_statistics?.player?.name}の統計詳細
                    </p>
                </div>
            ) : null}
        </>
    );
};
