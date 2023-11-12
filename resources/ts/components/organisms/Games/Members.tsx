import { useNavigate } from "react-router-dom";
import { Formations } from "./Formations";

export const Members = ({ games, maxSeason }) => {
    const navigate = useNavigate();

    const handleTeamClick = (teamId, maxSeason) => {
        navigate(`/team/${teamId}/season/${maxSeason}`);
    };

    const handlePlayerClick = (playerId, maxSeason) => {
        navigate(`/player/${playerId}/season/${maxSeason}`);
    };

    return (
        <div>
            <div className="bg-[#111931] py-1 flex justify-center text-[#EEEEEE] text-[18px] font-bold">
                ラインナップ
            </div>
            <Formations games={games} season={maxSeason} />
            <div className="mt-2 flex sm:space-x-10 flex-col sm:flex-row mx-1 sm:mx-0 space-y-2 sm:space-y-0">
                <div className="w-full">
                    <div
                        style={{
                            borderLeftColor: `#${games[0].json_detail.lineups[0].team.colors.player.primary}`,
                        }}
                        className="bg-[#111931] py-8 flex justify-center border-l-4"
                    >
                        <img
                            src={games[0].json_detail?.teams.home.logo}
                            alt="teamLogo"
                            className="h-[4.375rem] w-[4.375rem] cursor-pointer transition-transform hover:scale-110"
                            onClick={() =>
                                handleTeamClick(
                                    games[0].json_detail.teams.home.id,
                                    maxSeason
                                )
                            }
                        />
                    </div>
                    <div className="bg-[#1d2233]">
                        <div className="h-16 flex items-center">
                            <span
                                style={{
                                    borderBottomColor: `#${games[0].json_detail.lineups[0].team.colors.player.primary}`,
                                    borderBottomWidth: "2px",
                                    paddingBottom: "1px",
                                }}
                                className={`text-[#EEEEEE] font-bold text-[18px] ml-5`}
                            >
                                スターティングメンバー
                            </span>
                        </div>
                        <div>
                            {games[0].json_detail?.lineups[0].startXI.map(
                                (game, index) => (
                                    <div
                                        key={index}
                                        className="text-white text-[18px] font-bold border-b border-[#111931] h-20 flex items-center justify-between mx-3"
                                    >
                                        <span
                                            className="cursor-pointer hover:underline"
                                            onClick={() =>
                                                handlePlayerClick(
                                                    game.player.id,
                                                    maxSeason
                                                )
                                            }
                                        >
                                            {game.player.name}
                                        </span>
                                        <span>{game.player.number}</span>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="h-20 flex items-center">
                            <span
                                style={{
                                    borderBottomColor: `#${games[0].json_detail.lineups[0].team.colors.player.primary}`,
                                    borderBottomWidth: "2px",
                                    paddingBottom: "1px",
                                }}
                                className="text-[#EEEEEE] font-bold text-[18px] ml-5"
                            >
                                ベンチメンバー
                            </span>
                        </div>
                        <div>
                            {games[0].json_detail?.lineups[0].substitutes.map(
                                (game, index) => (
                                    <div
                                        key={index}
                                        className="text-white text-[18px] font-bold border-b border-[#111931] h-20 flex items-center justify-between mx-3"
                                    >
                                        <span
                                            className="cursor-pointer hover:underline"
                                            onClick={() =>
                                                handlePlayerClick(
                                                    game.player.id,
                                                    maxSeason
                                                )
                                            }
                                        >
                                            {game.player.name}
                                        </span>
                                        <span>{game.player.number}</span>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="h-20 flex items-center">
                            <span
                                style={{
                                    borderBottomColor: `#${games[0].json_detail.lineups[0].team.colors.player.primary}`,
                                    borderBottomWidth: "2px",
                                    paddingBottom: "1px",
                                }}
                                className="text-[#EEEEEE] font-bold text-[18px] ml-5"
                            >
                                監督
                            </span>
                        </div>
                        <div>
                            <div className="text-white text-[18px] font-bold border-b border-[#111931] h-20 flex items-center justify-between mx-3">
                                <span>
                                    {
                                        games[0].json_detail?.lineups[0].coach
                                            .name
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div
                        style={{
                            borderLeftColor: `#${games[0].json_detail.lineups[1].team.colors.player.primary}`,
                        }}
                        className="bg-[#111931] py-8 flex justify-center border-l-4"
                    >
                        <img
                            src={games[0].json_detail?.teams.away.logo}
                            alt="teamLogo"
                            className="h-[4.375rem] w-[4.375rem] cursor-pointer transition-transform hover:scale-110"
                            onClick={() =>
                                handleTeamClick(
                                    games[0].json_detail.teams.away.id,
                                    maxSeason
                                )
                            }
                        />
                    </div>
                    <div className="bg-[#1d2233]">
                        <div className="h-16 flex items-center">
                            <span
                                style={{
                                    borderBottomColor: `#${games[0].json_detail.lineups[1].team.colors.player.primary}`,
                                    borderBottomWidth: "2px",
                                    paddingBottom: "1px",
                                }}
                                className="text-[#EEEEEE] font-bold text-[18px] ml-5"
                            >
                                スターティングメンバー
                            </span>
                        </div>
                        <div>
                            {games[0].json_detail?.lineups[1].startXI.map(
                                (game, index) => (
                                    <div
                                        key={index}
                                        className="text-white text-[18px] font-bold border-b border-[#111931] h-20 flex items-center justify-between mx-3"
                                    >
                                        <span
                                            className="cursor-pointer hover:underline"
                                            onClick={() =>
                                                handlePlayerClick(
                                                    game.player.id,
                                                    maxSeason
                                                )
                                            }
                                        >
                                            {game.player.name}
                                        </span>
                                        <span>{game.player.number}</span>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="h-20 flex items-center">
                            <span
                                style={{
                                    borderBottomColor: `#${games[0].json_detail.lineups[1].team.colors.player.primary}`,
                                    borderBottomWidth: "2px",
                                    paddingBottom: "1px",
                                }}
                                className="text-[#EEEEEE] font-bold text-[18px] ml-5"
                            >
                                ベンチメンバー
                            </span>
                        </div>
                        <div>
                            {games[0].json_detail?.lineups[1].substitutes.map(
                                (game, index) => (
                                    <div
                                        key={index}
                                        className="text-white text-[18px] font-bold border-b border-[#111931] h-20 flex items-center justify-between mx-3"
                                    >
                                        <span
                                            className="cursor-pointer hover:underline"
                                            onClick={() =>
                                                handlePlayerClick(
                                                    game.player.id,
                                                    maxSeason
                                                )
                                            }
                                        >
                                            {game.player.name}
                                        </span>
                                        <span>{game.player.number}</span>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="h-20 flex items-center">
                            <span
                                style={{
                                    borderBottomColor: `#${games[0].json_detail.lineups[1].team.colors.player.primary}`,
                                    borderBottomWidth: "2px",
                                    paddingBottom: "1px",
                                }}
                                className="text-[#EEEEEE] font-bold text-[18px] ml-5"
                            >
                                監督
                            </span>
                        </div>
                        <div>
                            <div className="text-white text-[18px] font-bold border-b border-[#111931] h-20 flex items-center justify-between mx-3">
                                <span>
                                    {
                                        games[0].json_detail?.lineups[1].coach
                                            .name
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
