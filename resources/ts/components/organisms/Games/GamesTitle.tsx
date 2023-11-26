import { useNavigate } from "react-router-dom";
import { formatAllDate } from "../../../functions/Utils";
import { imageUrl } from "../../../functions/Utils";
import StadiumIcon from "@mui/icons-material/Stadium";

export const GamesTitle = ({ games, maxSeason }) => {
    const navigate = useNavigate();

    const handleLeagueClick = (leagueId, season) => {
        navigate(`/league/${leagueId}/season/${season}`);
    };

    const handleTeamClick = (teamId, maxSeason) => {
        navigate(`/team/${teamId}/season/${maxSeason}`);
    };

    return (
        <div className="bg-gradient-to-tr from-[#1d2233] rounded-t h-60 flex justify-center items-center">
            {games.map((game, index) => (
                <div
                    key={index}
                    className="flex flex-col justify-center items-center"
                >
                    <div className="mb-1">
                        <div className="flex items-center text-[#EEEEEE] font-semibold">
                            <img
                                src={imageUrl(
                                    "country",
                                    game.json_detail.league.id,
                                    "svg"
                                )}
                                className="w-5 h-5 m-1"
                            />
                            <div className="uppercase">
                                {game.json_detail.league.country}
                            </div>
                            <div className="p-1">-</div>
                            <div
                                className="uppercase hover:underline cursor-pointer"
                                onClick={() =>
                                    handleLeagueClick(
                                        game.json_detail.league.id,
                                        game.json_detail.league.season
                                    )
                                }
                            >
                                {game.json_detail.league.name}
                            </div>
                            <div className="p-1">-</div>
                            <span className="text-[#EEEEEE]">
                                {game.json_detail.league.round ===
                                "Relegation Round"
                                    ? "降格戦"
                                    : game.json_detail.league.round ===
                                      "Relegation Decider"
                                    ? "追加試合"
                                    : game.json_detail.league.round &&
                                      game.json_detail.league.round.match(/\d+/)
                                    ? `第${game.json_detail.league.round.match(
                                          /\d+/
                                      )}節`
                                    : game.json_detail.league.round}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center sm:w-64 w-[6rem]">
                            <img
                                src={imageUrl(
                                    "teams",
                                    game.json_detail.teams.home.id,
                                    "png"
                                )}
                                alt="homeTeam"
                                className="sm:w-24 sm:h-24 w-16 h-16 cursor-pointer transition-transform hover:scale-110"
                                onClick={() =>
                                    handleTeamClick(
                                        game.json_detail.teams.home.id,
                                        maxSeason
                                    )
                                }
                            />
                            <span
                                className="text-white font-bold sm:text-[20px] text-[15px] mt-1 hover:underline cursor-pointer sm:w-64 w-[6rem] truncate text-center"
                                onClick={() =>
                                    handleTeamClick(
                                        game.json_detail.teams.home.id,
                                        maxSeason
                                    )
                                }
                            >
                                {game.json_detail.teams.home.name}
                            </span>
                        </div>
                        <div className="text-white flex flex-col items-center mb-1 mx-3">
                            <span className="text-[#C8CDCD]">
                                {formatAllDate(game.json_detail.fixture.date)}
                            </span>
                            <div className="sm:text-[50px] text-[35px] font-custom space-x-2">
                                <span
                                    className={`${
                                        game.json_detail.teams.home.winner ===
                                            false ||
                                        game.json_detail.teams.home.winner ===
                                            null
                                            ? "text-white text-opacity-40"
                                            : "text-white"
                                    }`}
                                >
                                    {game.json_detail.score.fulltime.home}
                                </span>
                                <span className="text-white text-opacity-40">
                                    -
                                </span>
                                <span
                                    className={`${
                                        game.json_detail.teams.away.winner ===
                                            false ||
                                        game.json_detail.teams.away.winner ===
                                            null
                                            ? "text-white text-opacity-40"
                                            : "text-white"
                                    }`}
                                >
                                    {game.json_detail.score.fulltime.away}
                                </span>
                            </div>
                            <span className="font-bold text-[13px] sm:text-[16px] text-white text-opacity-40">
                                {game.json_detail.fixture.status.long}
                            </span>
                            <div className="flex items-center space-x-1 text-[#EEEEEE] mt-1 sm:w-[12.5rem] w-[7rem] justify-center">
                                <StadiumIcon />
                                <span className="truncate">
                                    {game.json_detail.fixture.venue.name}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center sm:w-64 w-[6rem]">
                            <img
                                src={imageUrl(
                                    "teams",
                                    game.json_detail.teams.away.id,
                                    "png"
                                )}
                                alt="awayTeam"
                                className="sm:w-24 sm:h-24 w-16 h-16 cursor-pointer transition-transform hover:scale-110"
                                onClick={() =>
                                    handleTeamClick(
                                        game.json_detail.teams.away.id,
                                        maxSeason
                                    )
                                }
                            />
                            <span
                                className="text-white font-bold sm:text-[20px] text-[15px] mt-1 hover:underline cursor-pointer sm:w-64 w-[6rem] truncate text-center"
                                onClick={() =>
                                    handleTeamClick(
                                        game.json_detail.teams.away.id,
                                        maxSeason
                                    )
                                }
                            >
                                {game.json_detail.teams.away.name}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
