import { useContext } from "react";
import { MatchDetailsContext } from "../../provider/MatchDetailsProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export const TeamMembers = () => {
    const { result, error } = useContext(MatchDetailsContext);

    if (result.length === 0) {
        return null;
    }

    return (
        <div>
            <div className="bg-[#111931] py-1 flex items-center justify-center">
                <span className="text-[11px] font-bold text-[#C8CDCD]">
                    スターティングメンバー
                </span>
            </div>
            <div className="flex justify-between">
                {/** home */}
                <div>
                    {result.response[0].lineups[0].startXI.map(
                        (startXI, index) => (
                            <div
                                key={index}
                                className="flex items-center mt-3 mb-5 ml-2 sm:ml-2 md:ml-8 lg:ml-10"
                            >
                                <div className="flex items-center justify-center w-4 h-4 mr-1">
                                    <span className="text-[12px] text-[#FFFFFF]">
                                        {startXI.player.number}
                                    </span>
                                </div>
                                {result.response[0].players[0].players.map(
                                    (player, playerIndex) => (
                                        <div key={playerIndex}>
                                            {player.player.id ===
                                                startXI.player.id && (
                                                <img
                                                    src={player.player.photo}
                                                    alt="Player Photo"
                                                    className="h-6 w-6 rounded-full"
                                                />
                                            )}
                                        </div>
                                    )
                                )}
                                <span className="text-[12px] text-[#FFFFFF] font-bold ml-1 mr-1">
                                    {startXI.player.name}
                                </span>
                                {result.response[0].events.map(
                                    (event, eventIndex) => (
                                        <span key={eventIndex}>
                                            {event.player.id ===
                                                startXI.player.id &&
                                                event.type === "Goal" && (
                                                    <div className="border border-[#C8CDCD] rounded-md w-5 h-5 flex items-center justify-center">
                                                        <FontAwesomeIcon
                                                            icon={faFutbol}
                                                            className="text-[#FFFFFF]"
                                                        />
                                                    </div>
                                                )}
                                            {event.player.id ===
                                                startXI.player.id &&
                                                event.type === "subst" && (
                                                    <div className="border border-[#C8CDCD] rounded-md w-5 h-5 flex items-center justify-center">
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faArrowsRotate
                                                            }
                                                            className="h-3 w-3 text-[#FFFFFF]"
                                                        />
                                                    </div>
                                                )}
                                            {event.player.id ===
                                                startXI.player.id &&
                                                event.type === "Card" && (
                                                    <div className="border border-[#C8CDCD] rounded-md w-5 h-5 flex items-center justify-center">
                                                        <div className="border rounded h-4 w-3 bg-yellow-300"></div>
                                                    </div>
                                                )}
                                            {event.player.id ===
                                                startXI.player.id &&
                                                event.type === "Var" && (
                                                    <div className="flex justify-center items-center text-[8px] border border-[#FFFFFF] rounded h-4 w-7 text-[#FFFFFF]">
                                                        VAR
                                                    </div>
                                                )}
                                        </span>
                                    )
                                )}
                            </div>
                        )
                    )}
                </div>
                {/** away */}
                <div>
                    {result.response[0].lineups[1].startXI.map(
                        (startXI, index) => (
                            <div
                                key={index}
                                className="flex items-center flex-row-reverse mb-5 mr-2 sm:mr-2 md:mr-8 lg:mr-10 mt-3"
                            >
                                <div className="flex items-center justify-center w-4 h-4 ml-1">
                                    <span className="text-[12px] text-[#FFFFFF]">
                                        {startXI.player.number}
                                    </span>
                                </div>
                                {result.response[0].players[1].players.map(
                                    (player, playerIndex) => (
                                        <div key={playerIndex}>
                                            {player.player.id ===
                                                startXI.player.id && (
                                                <img
                                                    src={player.player.photo}
                                                    alt="Player Photo"
                                                    className="h-6 w-6 rounded-full"
                                                />
                                            )}
                                        </div>
                                    )
                                )}
                                <span className="text-[12px] text-[#FFFFFF] font-bold mr-1 ml-1">
                                    {startXI.player.name}
                                </span>
                                {result.response[0].events.map(
                                    (event, eventIndex) => (
                                        <span key={eventIndex}>
                                            {event.player.id ===
                                                startXI.player.id &&
                                                event.type === "Goal" && (
                                                    <div className="border border-[#C8CDCD] rounded-md w-5 h-5 flex items-center justify-center">
                                                        <FontAwesomeIcon
                                                            icon={faFutbol}
                                                            className="text-[#FFFFFF]"
                                                        />
                                                    </div>
                                                )}
                                            {event.player.id ===
                                                startXI.player.id &&
                                                event.type === "subst" && (
                                                    <div className="border border-[#C8CDCD] rounded-md w-5 h-5 flex items-center justify-center">
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faArrowsRotate
                                                            }
                                                            className="h-3 w-3 text-[#FFFFFF]"
                                                        />
                                                    </div>
                                                )}
                                            {event.player.id ===
                                                startXI.player.id &&
                                                event.type === "Card" && (
                                                    <div className="border border-[#C8CDCD] rounded-md w-5 h-5 flex items-center justify-center">
                                                        <div className="border rounded h-4 w-3 bg-yellow-300"></div>
                                                    </div>
                                                )}
                                            {event.player.id ===
                                                startXI.player.id &&
                                                event.type === "Var" && (
                                                    <div className="flex justify-center items-center text-[8px] border-[#FFFFFF] border rounded h-4 w-7 text-[#FFFFFF]">
                                                        VAR
                                                    </div>
                                                )}
                                        </span>
                                    )
                                )}
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="bg-[#111931] py-1 flex items-center justify-center">
                <span className="text-[11px] font-bold text-[#C8CDCD]">
                    ベンチメンバー
                </span>
            </div>
            <div className="flex justify-between">
                {/** home */}
                <div>
                    {result.response[0].lineups[0].substitutes.map(
                        (substitutes, index) => (
                            <div
                                key={index}
                                className="flex items-center mt-3 mb-5 ml-2 sm:ml-2 md:ml-8 lg:ml-10"
                            >
                                <div className="flex items-center justify-center w-4 h-4 mr-1">
                                    <span className="text-[12px] text-[#FFFFFF]">
                                        {substitutes.player.number}
                                    </span>
                                </div>
                                {result.response[0].players[0].players.map(
                                    (player, playerIndex) => (
                                        <div key={playerIndex}>
                                            {player.player.id ===
                                                substitutes.player.id && (
                                                <img
                                                    src={player.player.photo}
                                                    alt="Player Photo"
                                                    className="h-6 w-6 rounded-full"
                                                />
                                            )}
                                        </div>
                                    )
                                )}
                                <span className="text-[12px] text-[#FFFFFF] font-bold ml-1 mr-1">
                                    {substitutes.player.name}
                                </span>
                                {result.response[0].events.map(
                                    (event, eventIndex) => (
                                        <span key={eventIndex}>
                                            {event.player.id ===
                                                substitutes.player.id &&
                                                event.type === "Goal" && (
                                                    <div className="border border-[#C8CDCD] rounded-md w-5 h-5 flex items-center justify-center">
                                                        <FontAwesomeIcon
                                                            icon={faFutbol}
                                                            className="text-[#FFFFFF]"
                                                        />
                                                    </div>
                                                )}
                                            {event.player.id ===
                                                substitutes.player.id &&
                                                event.type === "subst" && (
                                                    <div className="border border-[#C8CDCD] rounded-md w-5 h-5 flex items-center justify-center">
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faArrowsRotate
                                                            }
                                                            className="h-3 w-3 text-[#FFFFFF]"
                                                        />
                                                    </div>
                                                )}
                                            {event.player.id ===
                                                substitutes.player.id &&
                                                event.type === "Card" && (
                                                    <div className="border border-[#C8CDCD] rounded-md w-5 h-5 flex items-center justify-center">
                                                        <div className="border rounded h-4 w-3 bg-yellow-300"></div>
                                                    </div>
                                                )}
                                            {event.player.id ===
                                                substitutes.player.id &&
                                                event.type === "Var" && (
                                                    <div className="flex justify-center items-center text-[8px] border border-[#FFFFFF] rounded h-4 w-7 text-[#FFFFFF]">
                                                        VAR
                                                    </div>
                                                )}
                                        </span>
                                    )
                                )}
                            </div>
                        )
                    )}
                </div>
                {/** away */}
                <div>
                    {result.response[0].lineups[1].substitutes.map(
                        (substitutes, index) => (
                            <div
                                key={index}
                                className="flex items-center flex-row-reverse mb-5 mr-2 sm:mr-2 md:mr-8 lg:mr-10 mt-3"
                            >
                                <div className="flex items-center justify-center w-4 h-4 ml-1">
                                    <span className="text-[12px] text-[#FFFFFF]">
                                        {substitutes.player.number}
                                    </span>
                                </div>
                                {result.response[0].players[1].players.map(
                                    (player, playerIndex) => (
                                        <div key={playerIndex}>
                                            {player.player.id ===
                                                substitutes.player.id && (
                                                <img
                                                    src={player.player.photo}
                                                    alt="Player Photo"
                                                    className="h-6 w-6 rounded-full"
                                                />
                                            )}
                                        </div>
                                    )
                                )}
                                <span className="text-[12px] text-[#FFFFFF] font-bold mr-1 ml-1">
                                    {substitutes.player.name}
                                </span>
                                {result.response[0].events.map(
                                    (event, eventIndex) => (
                                        <span key={eventIndex}>
                                            {event.player.id ===
                                                substitutes.player.id &&
                                                event.type === "Goal" && (
                                                    <div className="border border-[#C8CDCD] rounded-md w-5 h-5 flex items-center justify-center">
                                                        <FontAwesomeIcon
                                                            icon={faFutbol}
                                                            className="text-[#FFFFFF]"
                                                        />
                                                    </div>
                                                )}
                                            {event.player.id ===
                                                substitutes.player.id &&
                                                event.type === "subst" && (
                                                    <div className="border border-[#C8CDCD] rounded-md w-5 h-5 flex items-center justify-center">
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faArrowsRotate
                                                            }
                                                            className="h-3 w-3 text-[#FFFFFF]"
                                                        />
                                                    </div>
                                                )}
                                            {event.player.id ===
                                                substitutes.player.id &&
                                                event.type === "Card" && (
                                                    <div className="border border-[#C8CDCD] rounded-md w-5 h-5 flex items-center justify-center">
                                                        <div className="border rounded h-4 w-3 bg-yellow-300"></div>
                                                    </div>
                                                )}
                                            {event.player.id ===
                                                substitutes.player.id &&
                                                event.type === "Var" && (
                                                    <div className="flex justify-center items-center text-[8px] border border-[#FFFFFF] rounded h-4 w-7 text-[#FFFFFF]">
                                                        VAR
                                                    </div>
                                                )}
                                        </span>
                                    )
                                )}
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="bg-[#111931] py-1 flex items-center justify-center">
                <span className="text-[11px] font-bold text-[#C8CDCD]">
                    監督
                </span>
            </div>
            <div className="flex justify-between">
                {/** home */}
                {result.response[0].lineups.map((coach, index) => (
                    <div
                        key={index}
                        className="flex items-center mt-3 mb-5 ml-2 sm:ml-2 md:ml-8 lg:ml-10"
                    >
                        {result.response[0].lineups[0].coach.name ===
                            coach.coach.name && (
                            <img
                                src={coach.coach.photo}
                                alt="Player Photo"
                                className="h-6 w-6 rounded-full"
                            />
                        )}

                        <span className="text-[12px] font-bold text-[#FFFFFF] ml-1">
                            {result.response[0].lineups[0].coach.name ===
                                coach.coach.name && coach.coach.name}
                        </span>
                    </div>
                ))}
                {/** away*/}
                {result.response[0].lineups.map((coach, index) => (
                    <div
                        key={index}
                        className="flex items-center flex-row-reverse mb-5 mr-2 sm:mr-2 md:mr-8 lg:mr-10 mt-3"
                    >
                        {result.response[0].lineups[1].coach.name ===
                            coach.coach.name && (
                            <img
                                src={coach.coach.photo}
                                alt="Player Photo"
                                className="h-6 w-6 rounded-full"
                            />
                        )}

                        <span className="text-[12px] font-bold text-[#FFFFFF] mr-1">
                            {result.response[0].lineups[1].coach.name ===
                                coach.coach.name && coach.coach.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
