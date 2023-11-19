import { Link } from "react-router-dom";
import { TitleLoading } from "./Loading/TitleLoading";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const Title = ({ games, loading, season }) => {
    return (
        <>
            {loading ? (
                <TitleLoading />
            ) : games.length > 0 ? (
                <div className="text-gray-500 my-[4px] text-[12px] font-bold flex items-center">
                    <Link to="/" className="text-[#7A84FF]">
                        ホーム
                    </Link>
                    <ArrowRightIcon />
                    <Link
                        to={`/league/${games[0]?.json_detail?.league?.id}/season/${season}`}
                        className="text-[#7A84FF]"
                    >
                        {games[0]?.json_detail?.league?.name},
                        {games[0]?.json_detail?.league?.round ===
                        "Relegation Round"
                            ? "降格戦"
                            : games[0]?.json_detail?.league?.round ===
                              "Relegation Decider"
                            ? "追加試合"
                            : games[0]?.json_detail?.league?.round &&
                              games[0]?.json_detail?.league?.round.match(/\d+/)
                            ? `第${games[0]?.json_detail?.league?.round.match(
                                  /\d+/
                              )}節`
                            : games[0]?.json_detail?.league?.round}
                    </Link>
                    <ArrowRightIcon />
                    <p className="sm:w-[30rem] w-[9rem] truncate">
                        {games[0]?.json_detail?.teams?.home?.name} vs{" "}
                        {games[0]?.json_detail?.teams?.away?.name}の試合詳細
                    </p>
                </div>
            ) : (
                <div className="mt-7"></div>
            )}
        </>
    );
};
