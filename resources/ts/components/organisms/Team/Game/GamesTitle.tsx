import { useNavigate } from "react-router-dom";
import { LoadingTitle } from "./LoadingTitle";
import { imageUrl } from "../../../../functions/Utils";

export const GamesTitle = ({ games, paginateLoading, maxSeason }) => {
    const navigate = useNavigate();

    // リーグ詳細ページへの遷移
    const handleLeagueClick = (leagueId, season) => {
        navigate(`/league/${leagueId}/season/${season}`);
    };

    return (
        <div className="text-white flex items-center space-x-3 ml-2 py-1">
            {paginateLoading ? (
                <LoadingTitle />
            ) : (
                <>
                    {games[0] && (
                        <>
                            <img
                                src={imageUrl(
                                    "leagues",
                                    games[0]?.json_detail?.league?.id,
                                    "png"
                                )}
                                alt="league"
                                className="lg:h-10 lg:w-10 h-8 w-8 bg-white rounded"
                            />
                            <p
                                className="text-[20px] font-bold uppercase hover:underline cursor-pointer"
                                onClick={() =>
                                    handleLeagueClick(
                                        games[0]?.json_detail?.league?.id,
                                        maxSeason
                                    )
                                }
                            >
                                {games[0]?.json_detail?.league?.name}
                            </p>
                        </>
                    )}
                </>
            )}
        </div>
    );
};
