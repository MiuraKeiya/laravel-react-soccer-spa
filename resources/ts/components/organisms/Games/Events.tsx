import { useNavigate } from "react-router-dom";
import LoopIcon from "@mui/icons-material/Loop";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsIcon from "@mui/icons-material/Sports";
import StadiumIcon from "@mui/icons-material/Stadium";

export const Events = ({ games, maxSeason }) => {
    const navigate = useNavigate();

    const handlePlayerClick = (playerId, maxSeason) => {
        navigate(`/player/${playerId}/season/${maxSeason}`);
    };
    return (
        <div>
            <div className="bg-[#111931] text-[#EEEEEE] text-[18px] font-bold py-1 text-center">
                試合イベント
            </div>
            <div className="bg-[#1d2233]">
                {/** 前半 */}
                {games.map((game, index) => (
                    <div
                        key={index}
                        className="bg-[#111931] text-white text-[16px] font-bold py-1 flex justify-between items-center mt-1"
                    >
                        <span className="ml-3">前半</span>
                        <span className="mr-3">
                            {game.json_detail.score.halftime.home} -{" "}
                            {game.json_detail.score.halftime.away}
                        </span>
                    </div>
                ))}
                <div className="mx-3 mt-3">
                    {games[0].json_detail?.events.map((game, index) => (
                        <div key={index}>
                            {game.team.name ===
                                games[0]?.json_detail.teams.home.name &&
                                game.time.elapsed <= 45 && (
                                    <div className="text-white flex items-center space-x-2 mb-5 sm:text-[20px]">
                                        <span>{game.time.elapsed}'</span>
                                        <span>
                                            {game.type === "Goal" && (
                                                <SportsSoccerIcon
                                                    style={{ color: "#32CD32" }}
                                                />
                                            )}
                                            {game.type === "subst" && (
                                                <LoopIcon
                                                    style={{ color: "#7B68EE" }}
                                                />
                                            )}
                                            {game.type === "Card" &&
                                                game.detail ===
                                                    "Yellow Card" && (
                                                    <div className="border rounded h-4 w-3 bg-yellow-300"></div>
                                                )}
                                            {game.type === "Card" &&
                                                game.detail === "Red Card" && (
                                                    <div className="border rounded h-4 w-3 bg-red-600"></div>
                                                )}
                                            {game.type === "Var" && (
                                                <div className="flex justify-center items-center text-[8px] border border-[#FFFFFF] rounded h-4 w-7">
                                                    VAR
                                                </div>
                                            )}
                                        </span>
                                        <span
                                            className="font-bold hover:underline cursor-pointer"
                                            onClick={() =>
                                                handlePlayerClick(
                                                    game.player.id,
                                                    maxSeason
                                                )
                                            }
                                        >
                                            {game.player.name}
                                        </span>
                                        {game.assist.name && (
                                            <span>
                                                (
                                                <a className="text-white text-opacity-40">
                                                    {game.assist.name}
                                                </a>
                                                )
                                            </span>
                                        )}
                                    </div>
                                )}
                            {game.team.name ===
                                games[0]?.json_detail.teams.away.name &&
                                game.time.elapsed <= 45 && (
                                    <div className="text-white flex items-center justify-end space-x-2 mb-5 sm:text-[20px]">
                                        {game.assist.name && (
                                            <span>
                                                (
                                                <a className="text-white text-opacity-40">
                                                    {game.assist.name}
                                                </a>
                                                )
                                            </span>
                                        )}
                                        <span
                                            className="font-bold hover:underline cursor-pointer"
                                            onClick={() =>
                                                handlePlayerClick(
                                                    game.player.id,
                                                    maxSeason
                                                )
                                            }
                                        >
                                            {game.player.name}
                                        </span>
                                        <span>
                                            {game.type === "Goal" && (
                                                <SportsSoccerIcon
                                                    style={{ color: "#32CD32" }}
                                                />
                                            )}
                                            {game.type === "subst" && (
                                                <LoopIcon
                                                    style={{ color: "#7B68EE" }}
                                                />
                                            )}
                                            {game.type === "Card" &&
                                                game.detail ===
                                                    "Yellow Card" && (
                                                    <div className="border rounded h-4 w-3 bg-yellow-300"></div>
                                                )}
                                            {game.type === "Card" &&
                                                game.detail === "Red Card" && (
                                                    <div className="border rounded h-4 w-3 bg-red-600"></div>
                                                )}
                                            {game.type === "Var" && (
                                                <div className="flex justify-center items-center text-[8px] border border-[#FFFFFF] rounded h-4 w-7">
                                                    VAR
                                                </div>
                                            )}
                                        </span>
                                        <span>{game.time.elapsed}'</span>
                                    </div>
                                )}
                        </div>
                    ))}
                </div>
                {/** 後半 */}
                {games.map((game, index) => (
                    <div
                        key={index}
                        className="bg-[#111931] text-white text-[16px] font-bold py-1 flex justify-between items-center mt-1"
                    >
                        <span className="ml-3">後半</span>
                        <span className="mr-3">
                            {game.json_detail.score.fulltime.home} -{" "}
                            {game.json_detail.score.fulltime.away}
                        </span>
                    </div>
                ))}
                <div className="mx-3 mt-3 pb-1">
                    {games[0].json_detail?.events.map((game, index) => (
                        <div key={index}>
                            {game.team.name ===
                                games[0]?.json_detail.teams.home.name &&
                                game.time.elapsed > 45 && (
                                    <div className="text-white flex items-center space-x-2 mb-5 sm:text-[20px]">
                                        <div>{game.time.elapsed}'</div>
                                        <span>
                                            {game.type === "Goal" && (
                                                <SportsSoccerIcon
                                                    style={{ color: "#32CD32" }}
                                                />
                                            )}
                                            {game.type === "subst" && (
                                                <LoopIcon
                                                    style={{ color: "#7B68EE" }}
                                                />
                                            )}
                                            {game.type === "Card" &&
                                                game.detail ===
                                                    "Yellow Card" && (
                                                    <div className="border rounded h-4 w-3 bg-yellow-300"></div>
                                                )}
                                            {game.type === "Card" &&
                                                game.detail === "Red Card" && (
                                                    <div className="border rounded h-4 w-3 bg-red-600"></div>
                                                )}
                                            {game.type === "Var" && (
                                                <div className="flex justify-center items-center text-[8px] border border-[#FFFFFF] rounded h-4 w-7">
                                                    VAR
                                                </div>
                                            )}
                                        </span>
                                        <span
                                            className="font-bold hover:underline cursor-pointer"
                                            onClick={() =>
                                                handlePlayerClick(
                                                    game.player.id,
                                                    maxSeason
                                                )
                                            }
                                        >
                                            {game.player.name}
                                        </span>
                                        <div>
                                            {game.assist.name && (
                                                <span>
                                                    (
                                                    <a className="text-white text-opacity-40">
                                                        {game.assist.name}
                                                    </a>
                                                    )
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )}
                            {game.team.name ===
                                games[0]?.json_detail.teams.away.name &&
                                game.time.elapsed > 45 && (
                                    <div className="text-white flex items-center justify-end space-x-2 mb-5 sm:text-[20px]">
                                        <div>
                                            {game.assist.name && (
                                                <span>
                                                    (
                                                    <a className="text-white text-opacity-40">
                                                        {game.assist.name}
                                                    </a>
                                                    )
                                                </span>
                                            )}
                                        </div>
                                        <span
                                            className="font-bold hover:underline cursor-pointer"
                                            onClick={() =>
                                                handlePlayerClick(
                                                    game.player.id,
                                                    maxSeason
                                                )
                                            }
                                        >
                                            {game.player.name}
                                        </span>
                                        <span>
                                            {game.type === "Goal" && (
                                                <SportsSoccerIcon
                                                    style={{ color: "#32CD32" }}
                                                />
                                            )}
                                            {game.type === "subst" && (
                                                <LoopIcon
                                                    style={{ color: "#7B68EE" }}
                                                />
                                            )}
                                            {game.type === "Card" &&
                                                game.detail ===
                                                    "Yellow Card" && (
                                                    <div className="border rounded h-4 w-3 bg-yellow-300"></div>
                                                )}
                                            {game.type === "Card" &&
                                                game.detail === "Red Card" && (
                                                    <div className="border rounded h-4 w-3 bg-red-600"></div>
                                                )}
                                            {game.type === "Var" && (
                                                <div className="flex justify-center items-center text-[8px] border border-[#FFFFFF] rounded h-4 w-7">
                                                    VAR
                                                </div>
                                            )}
                                        </span>
                                        <div>{game.time.elapsed}'</div>
                                    </div>
                                )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#111931] text-white text-[16px] font-bold py-1 flex justify-between items-center mt-1">
                <span className="ml-3">試合情報</span>
            </div>
            <div className="bg-[#1d2233]">
                <div className="text-white mx-3 pt-2 pb-2">
                    <div className="flex items-center justify-between pb-4 sm:text-[18px]">
                        <div className="flex items-center space-x-1">
                            <span>
                                <SportsIcon />
                            </span>
                            <span>レフェリー :</span>
                        </div>
                        <span className="font-bold w-[10rem] sm:w-[30rem] text-right truncate">
                            {games[0].json_detail?.fixture.referee}
                        </span>
                    </div>
                    <div className="flex items-center justify-between sm:text-[18px]">
                        <div className="flex items-center space-x-1">
                            <span>
                                <StadiumIcon />
                            </span>
                            <span>スタジアム :</span>
                        </div>
                        <span className="font-bold w-[10rem] sm:w-[30rem] text-right truncate">
                            {games[0].json_detail?.fixture.venue.name} (
                            {games[0].json_detail?.fixture.venue.city})
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
