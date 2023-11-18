import { SkeletonStandingsLeague } from "../../molecules/SkeletonStandingsLeague";
import { useNavigate } from "react-router-dom";

export const StandingsInformations = ({ standings, loading, season, id }) => {
    const navigate = useNavigate();

    const handleLeagueClick = (id, season) => {
        navigate(`/league/${id}/season/${season}`);
    };

    // 各リーグIDに対応する背景色
    const gradientColors = {
        39: "from-[#330066]",
        140: "from-[#993300]",
        135: "from-[#3366CC]",
        78: "from-[#CC3300]",
        61: "from-[#99CC00]",
    };

    // リーグIDに対応する背景色を取得
    const gradientColor = gradientColors[id] || "from-[#1d2233]";

    return (
        <div
            className={`bg-gradient-to-br ${gradientColor} rounded h-[7rem] flex items-center`}
        >
            {loading ? (
                <SkeletonStandingsLeague />
            ) : (
                <div className="flex items-center space-x-3 ml-6">
                    <img
                        src={standings.league?.logo}
                        className="sm:h-[4rem] sm:w-[4rem] h-12 w-12 bg-white rounded"
                    />
                    <button
                        className="text-white sm:text-[30px] text-[23px] uppercase font-semibold hover:underline"
                        onClick={() =>
                            handleLeagueClick(standings.league?.id, season)
                        }
                    >
                        {standings.league?.name}
                    </button>
                    <p className="uppercase font-semibold text-[#C8CDCD] sm:text-[20px] text-[16px] self-start sm:mt-[20px] mt-[14px] ml-2">
                        {standings.league?.country}
                    </p>
                </div>
            )}
        </div>
    );
};
