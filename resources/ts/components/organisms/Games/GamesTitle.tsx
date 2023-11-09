import { useNavigate } from "react-router-dom";
import { formatAllDate } from "../../../functions/Utils";
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
        <div className="bg-gradient-to-r from-[#1d2233] rounded-t h-60 flex justify-center items-center">
            {games.map((game, index) => (
                <div
                    key={index}
                    className="flex flex-col justify-center items-center"
                >
                    <div className="mb-1">
                        <div className="flex items-center text-[#EEEEEE] font-semibold">
                            <img
                                src={game.json_detail.league.flag}
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
                                第{game.json_detail.league.round.match(/\d+/)}節
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center sm:w-64 w-[6rem]">
                            <img
                                src={game.json_detail.teams.home.logo}
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
                                <span>
                                    {game.json_detail.score.fulltime.home}
                                </span>
                                <span>-</span>
                                <span>
                                    {game.json_detail.score.fulltime.away}
                                </span>
                            </div>
                            <span className="font-bold text-[13px] sm:text-[16px]">
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
                                src={game.json_detail.teams.away.logo}
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
