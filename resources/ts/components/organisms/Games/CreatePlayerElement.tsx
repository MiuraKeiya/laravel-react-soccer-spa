import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRatingColorClass } from "../../../functions/FieldUtils/getRatingColorClass";
import ReactCardFlip from "react-card-flip";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LoopIcon from "@mui/icons-material/Loop";

export const CreatePlayerElement = (
    player,
    x,
    y,
    key,
    rating,
    goal,
    card,
    subst,
    redcard,
    varIds,
    teamColor,
    numberColor,
    teamColorForGK,
    numberColorForGK,
    season
) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // 選手詳細ページへの遷移
    const navigate = useNavigate();
    const handlePlayerClick = (id, season) => {
        navigate(`/player/${id}/season/${season}`);
    };

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
    };

    const ratingColorClass = getRatingColorClass(rating);

    const shouldShowGoalIcon = goal && goal.includes(player.player.id);
    const shouldShowYellowCardIcon = card && card.includes(player.player.id);
    const shouldShowSubstIcon = subst && subst.includes(player.player.id);
    const shouldShowRedCardIcon = redcard && redcard.includes(player.player.id);
    const shouldShowVarIcon = varIds && varIds.includes(player.player.id);

    return (
        <div
            key={key}
            className="flex flex-col items-center space-y-0.5"
            style={{ position: "absolute", left: `${x}%`, top: `${y}%` }}
        >
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div
                    style={{
                        backgroundColor:
                            player.player.pos === "G"
                                ? `#${teamColorForGK}`
                                : `#${teamColor}`,
                        color:
                            player.player.pos === "G"
                                ? `#${numberColorForGK}`
                                : `#${numberColor}`,
                    }}
                    className={`rounded-full lg:h-[3.5rem] lg:w-[3.5rem] lg:text-[25px] md:h-[2.5rem] md:w-[2.5rem] md:text-[21px] h-6 w-6 font-bold flex items-center justify-center cursor-pointer`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {player.player.number}
                </div>
                <img
                    src={`https://media-3.api-sports.io/football/players/${player.player.id}.png`}
                    className="rounded-full lg:h-[3.5rem] lg:w-[3.5rem] lg:text-[25px] md:h-[2.5rem] md:w-[2.5rem] md:text-[21px] h-6 w-6 cursor-pointer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handlePlayerClick(player.player.id, season)}
                />
            </ReactCardFlip>
            <div className="relative">
                <div className="text-center lg:w-[6.5rem] md:w-[4rem] hidden md:block font-semibold text-white bg-[#111931] rounded-full text-[14px]">
                    <p className="truncate px-2">{player.player.name}</p>
                </div>
                <div
                    className={`text-center w-[2rem] hidden lg:block font-semibold text-white rounded-lg text-[14px] absolute left-[4rem] bottom-5 ${ratingColorClass}`}
                >
                    <p>{rating}</p>
                </div>
                {shouldShowGoalIcon && (
                    <div className="w-[1.5rem] h-[1.5rem] hidden lg:flex bg-black rounded-lg border absolute right-[4.6rem] bottom-5 justify-center items-center">
                        <SportsSoccerIcon style={{ color: "#32CD32" }} />
                    </div>
                )}
                {shouldShowYellowCardIcon && !shouldShowRedCardIcon && (
                    <div className="w-[1.5rem] h-[1.5rem] hidden lg:flex text-white bg-black rounded-lg border items-center justify-center absolute right-[4.6rem] bottom-[2.2rem]">
                        <div className="border rounded h-4 w-3 bg-yellow-300"></div>
                    </div>
                )}
                {shouldShowSubstIcon && (
                    <div className="w-[1.5rem] h-[1.5rem] hidden lg:flex bg-black rounded-lg border items-center justify-center absolute right-[4.6rem] bottom-[3.2rem]">
                        <LoopIcon style={{ color: "#7B68EE" }} />
                    </div>
                )}
                {shouldShowRedCardIcon && (
                    <div className="w-[1.5rem] h-[1.5rem] hidden lg:flex text-white bg-black rounded-lg border items-center justify-center absolute right-[4.6rem] bottom-[2.1rem]">
                        <div className="border rounded h-4 w-3 bg-red-600"></div>
                    </div>
                )}
                {shouldShowVarIcon && (
                    <div className="w-[1.5rem] h-[1.5rem] hidden lg:flex text-white bg-black rounded-lg border items-center justify-center absolute left-[4.3rem] bottom-[3rem]">
                        <div className="flex justify-center items-center text-[8px] border border-[#FFFFFF] rounded h-4 w-5">
                            VAR
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
