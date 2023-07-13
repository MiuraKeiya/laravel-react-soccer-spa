import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { MatchDetailsContext } from "../../provider/MatchDetailsProvider";

export const MatchProgress = () => {
    const { result, error } = useContext(MatchDetailsContext);

    if (result.length === 0) {
        return null;
    }

    return (
        <div>
            {/** 前半 */}
            {result.response.map((match, index) => (
                <div
                    key={index}
                    className="bg-[#111931] text-[#C8CDCD] text-[11px] font-bold py-1 flex justify-between items-center mb-1"
                >
                    <span className="ml-3">前半</span>
                    <span className="mr-3">
                        {match.score.halftime.home}-{match.score.halftime.away}
                    </span>
                </div>
            ))}
            <div>
                {result.response[0].events.map((event, index) => (
                    <div key={index}>
                        {/** home */}
                        {event.team.name ===
                            result.response[0].teams.home.name &&
                            event.time.elapsed <= 45 && (
                                <div className="flex justify-start flex-row ml-3 space-x-2 mb-3">
                                    <div className="text-[13px] text-[#C8CDCD] font-bold">
                                        {event.time.elapsed}'
                                    </div>
                                    <div className="text-[13px] text-[#FFFFFF] font-bold flex space-x-2 items-center">
                                        {event.type === "Goal" && (
                                            <FontAwesomeIcon icon={faFutbol} />
                                        )}
                                        {event.type === "subst" && (
                                            <FontAwesomeIcon
                                                icon={faArrowsRotate}
                                            />
                                        )}
                                        {event.type === "Card" && (
                                            <div className="border rounded h-4 w-3 bg-yellow-300"></div>
                                        )}
                                        {event.type === "Var" && (
                                            <div className="flex justify-center items-center text-[8px] border border-black rounded h-4 w-7">
                                                VAR
                                            </div>
                                        )}
                                        <a>{event.player.name}</a>
                                    </div>
                                    <div className="text-[13px] text-[#C8CDCD]">
                                        {event.assist.name && (
                                            <a>({event.assist.name})</a>
                                        )}
                                    </div>
                                </div>
                            )}
                        {/** away */}
                        {event.team.name ===
                            result.response[0].teams.away.name &&
                            event.time.elapsed <= 45 && (
                                <div className="flex justify-end flex-row mr-3 space-x-2 mb-3">
                                    <div className="text-[13px] text-[#C8CDCD]">
                                        {event.assist.name && (
                                            <a>({event.assist.name})</a>
                                        )}
                                    </div>
                                    <div className="text-[13px] text-[#FFFFFF] font-bold flex space-x-2 items-center">
                                        <a>{event.player.name}</a>
                                        {event.type === "Goal" && (
                                            <FontAwesomeIcon icon={faFutbol} />
                                        )}
                                        {event.type === "subst" && (
                                            <FontAwesomeIcon
                                                icon={faArrowsRotate}
                                            />
                                        )}
                                        {event.type === "Card" && (
                                            <div className="border rounded h-4 w-3 bg-yellow-300"></div>
                                        )}
                                        {event.type === "Var" && (
                                            <div className="flex justify-center items-center text-[8px] border border-[#FFFFFF] rounded h-4 w-7">
                                                VAR
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-[13px] text-[#C8CDCD] font-bold">
                                        {event.time.elapsed}'
                                    </div>
                                </div>
                            )}
                    </div>
                ))}
            </div>
            {/** 後半 */}
            {result.response.map((match, index) => (
                <div
                    key={index}
                    className="bg-[#111931] text-[#C8CDCD] text-[11px] font-bold py-1 flex justify-between items-center mb-1"
                >
                    <span className="ml-3">後半</span>
                    <span className="mr-3">
                        {match.score.fulltime.home}-{match.score.fulltime.away}
                    </span>
                </div>
            ))}
            <div>
                {result.response[0].events.map((event, index) => (
                    <div key={index}>
                        {/** home */}
                        {event.team.name ===
                            result.response[0].teams.home.name &&
                            event.time.elapsed > 45 && (
                                <div className="flex justify-start flex-row ml-3 space-x-2 mb-3">
                                    <div className="text-[13px] text-[#C8CDCD] font-bold">
                                        {event.time.elapsed}'
                                    </div>
                                    <div className="text-[13px] text-[#FFFFFF] font-bold flex space-x-2 items-center">
                                        {event.type === "Goal" && (
                                            <FontAwesomeIcon icon={faFutbol} />
                                        )}
                                        {event.type === "subst" && (
                                            <FontAwesomeIcon
                                                icon={faArrowsRotate}
                                            />
                                        )}
                                        {event.type === "Card" && (
                                            <div className="border rounded h-4 w-3 bg-yellow-300"></div>
                                        )}
                                        {event.type === "Var" && (
                                            <div className="flex justify-center items-center text-[8px] border border-black rounded h-4 w-7">
                                                VAR
                                            </div>
                                        )}
                                        <a>{event.player.name}</a>
                                    </div>
                                    <div className="text-[13px] text-[#C8CDCD]">
                                        {event.assist.name && (
                                            <a>({event.assist.name})</a>
                                        )}
                                    </div>
                                </div>
                            )}
                        {/** away */}
                        {event.team.name ===
                            result.response[0].teams.away.name &&
                            event.time.elapsed > 45 && (
                                <div className="flex justify-end flex-row mr-3 space-x-2 mb-3">
                                    <div className="text-[13px] text-[#C8CDCD]">
                                        {event.assist.name && (
                                            <a>({event.assist.name})</a>
                                        )}
                                    </div>
                                    <div className="text-[13px] text-[#FFFFFF] font-bold flex space-x-2 items-center">
                                        <a>{event.player.name}</a>
                                        {event.type === "Goal" && (
                                            <FontAwesomeIcon icon={faFutbol} />
                                        )}
                                        {event.type === "subst" && (
                                            <FontAwesomeIcon
                                                icon={faArrowsRotate}
                                            />
                                        )}
                                        {event.type === "Card" && (
                                            <div className="border rounded h-4 w-3 bg-yellow-300"></div>
                                        )}
                                        {event.type === "Var" && (
                                            <div className="flex justify-center items-center text-[8px] border border-[#FFFFFF] rounded h-4 w-7">
                                                VAR
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-[13px] text-[#C8CDCD] font-bold">
                                        {event.time.elapsed}'
                                    </div>
                                </div>
                            )}
                    </div>
                ))}
            </div>
        </div>
    );
};
