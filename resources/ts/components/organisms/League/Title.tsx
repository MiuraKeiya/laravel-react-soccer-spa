import { Link } from "react-router-dom";
import { TitleLoading } from "./Loading/TitleLoading";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const Title = ({ leagues, loading }) => {
    return (
        <>
            {loading ? (
                <TitleLoading />
            ) : (
                <div className="text-gray-500 my-[4px] text-[12px] font-bold flex items-center">
                    <Link to="/home" className="text-[#7A84FF]">
                        ホーム
                    </Link>
                    <ArrowRightIcon />
                    <p>
                        {leagues[0]?.json_detail?.league?.name}のスコア,詳細情報
                    </p>
                </div>
            )}
        </>
    );
};
