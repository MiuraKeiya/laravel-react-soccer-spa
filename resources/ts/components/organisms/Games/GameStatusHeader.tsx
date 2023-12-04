import { useScroll } from "../../../hooks/useScroll";
import { useNavigate } from "react-router-dom";
import { GameStatusHeaderLoading } from "./Loading/GameStatusHeaderLoading";
import { imageUrl } from "../../../functions/Utils";

export const GameStatusHeader = ({ games, loading, maxSeason }) => {
    const visible = useScroll();
    const navigate = useNavigate();

    // チーム詳細ページへ遷移
    const handleTeamClick = (teamId, season) => {
        navigate(`/team/${teamId}/season/${season}`);
    };

    return (
        <header
            className={`flex items-center justify-center fixed top-0 transition-transform duration-500 container mx-auto h-[4.5rem] bg-[#111931] bg-opacity-90 border-b border-black z-50 ${
                visible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            {loading ? (
                <GameStatusHeaderLoading />
            ) : (
                <div className="flex sm:space-x-[9rem] space-x-[3rem] items-center">
                    <img
                        src={imageUrl(
                            "teams",
                            games[0]?.json_detail?.teams?.home?.id,
                            "png"
                        )}
                        alt="homeTeam"
                        className="w-12 h-12 cursor-pointer transition-transform hover:scale-110"
                        onClick={() =>
                            handleTeamClick(
                                games[0]?.json_detail?.teams?.home?.id,
                                maxSeason
                            )
                        }
                    />
                    <div className="flex flex-col items-center space-y-2 mt-3">
                        <div className="font-custom text-[#EEEEEE] text-[32px] font-bold flex items-center space-x-2 h-[1rem]">
                            <p
                                className={`${
                                    games[0]?.json_detail?.teams?.home
                                        ?.winner === false ||
                                    games[0]?.json_detail?.teams?.home
                                        ?.winner === null
                                        ? "text-[#EEEEEE] text-opacity-60"
                                        : "text-[#EEEEEE]"
                                }`}
                            >
                                {games[0]?.json_detail?.score?.fulltime?.home}
                            </p>
                            <p className="text-opacity-60 text-[#EEEEEE]">-</p>
                            <p
                                className={`${
                                    games[0]?.json_detail?.teams?.away
                                        ?.winner === false ||
                                    games[0]?.json_detail?.teams?.away
                                        ?.winner === null
                                        ? "text-[#EEEEEE] text-opacity-60"
                                        : "text-[#EEEEEE]"
                                }`}
                            >
                                {games[0]?.json_detail?.score?.fulltime?.away}
                            </p>
                        </div>
                        <span className="font-bold text-[13px] sm:text-[14px] text-[#EEEEEE] text-opacity-60">
                            {games[0]?.json_detail?.fixture?.status?.long}
                        </span>
                    </div>
                    <img
                        src={imageUrl(
                            "teams",
                            games[0]?.json_detail?.teams?.away?.id,
                            "png"
                        )}
                        alt="homeTeam"
                        className="w-12 h-12 cursor-pointer transition-transform hover:scale-110"
                        onClick={() =>
                            handleTeamClick(
                                games[0]?.json_detail?.teams?.away?.id,
                                maxSeason
                            )
                        }
                    />
                </div>
            )}
        </header>
    );
};
