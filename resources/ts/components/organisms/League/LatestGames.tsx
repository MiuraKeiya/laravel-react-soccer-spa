import { formatDatePart } from "../../../functions/Utils";
import { formatDate } from "../../../functions/Utils";
import { LatestGamesLoading } from "./Loading/LatestGamesLoading";
import { useNavigate } from "react-router-dom";
import BarChartIcon from "@mui/icons-material/BarChart";

export const LatestGames = ({ latestGames, latestGamesLoading }) => {
    const navigate = useNavigate();

    const handleGamesClick = (fixtureId, leagueId, season) => {
        navigate(`/games/${fixtureId}/leagues/${leagueId}/seasons/${season}`);
    };

    return (
        <>
            {latestGamesLoading ? (
                <LatestGamesLoading />
            ) : (
                <div className="mt-2">
                    <div className="bg-[#111931] py-1 text-[#EEEEEE] text-[18px] font-bold rounded">
                        <h1 className="ml-3">最新スコア</h1>
                    </div>
                    <div className="overflow-x-auto">
                        {latestGames.map((game, index) => (
                            <div key={index} className="text-white">
                                <div className="flex justify-between mt-3">
                                    <div className="flex space-x-1 items-center">
                                        <p className="text-[#EEEEEE] font-bold lg:text-[16px] text-[14px]">
                                            {game.json_detail.league.round ===
                                            "Relegation Round"
                                                ? "降格戦"
                                                : game.json_detail.league
                                                      .round ===
                                                  "Relegation Decider"
                                                ? "追加試合"
                                                : game.json_detail.league
                                                      .round &&
                                                  game.json_detail.league.round.match(
                                                      /\d+/
                                                  )
                                                ? `第${game.json_detail.league.round.match(
                                                      /\d+/
                                                  )}節`
                                                : game.json_detail.league.round}
                                            <span className="ml-1">
                                                {formatDatePart(
                                                    game.json_detail.fixture
                                                        .date
                                                )}
                                            </span>
                                        </p>
                                        <p className="text-[#EEEEEE] lg:text-[16px] text-[14px]">
                                            {formatDate(
                                                game.json_detail.fixture.date
                                            )}
                                        </p>
                                        <p className="text-[#46C252] text-[12px] hidden sm:inline pl-2">
                                            FootballLeague ratings
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        {game.json_detail.fixture.status
                                            .short == "FT" && (
                                            <div className="hidden sm:inline">
                                                <BarChartIcon className="text-[#46C252]" />
                                            </div>
                                        )}
                                        <p className="text-[#EEEEEE] lg:text-[16px] text-[14px]">
                                            {
                                                game.json_detail.fixture.status
                                                    .long
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="flex bg-[#1d2233] mt-1 justify-center h-[3.25rem] hover:bg-[#3d4e81] cursor-pointer transition duration-500"
                                    onClick={() =>
                                        handleGamesClick(
                                            game.json_detail.fixture.id,
                                            game.json_detail.league.id,
                                            game.json_detail.league.season
                                        )
                                    }
                                >
                                    <div className="flex items-center sm:w-52 w-[7rem] justify-end lg:space-x-6 space-x-2">
                                        <p
                                            className={`${
                                                game.json_detail.teams.home
                                                    .winner === false
                                                    ? "text-white text-opacity-40"
                                                    : "text-white"
                                            } lg:text-[15px] text-[12px] truncate font-semibold`}
                                        >
                                            {game.json_detail.teams.home.name}
                                        </p>
                                        <img
                                            src={
                                                game.json_detail.teams.home.logo
                                            }
                                            alt="league"
                                            className="lg:h-[40px] lg:w-[40px] h-7 w-7"
                                        />
                                    </div>
                                    <div className="flex items-center space-x-1 mx-6">
                                        <div className="w-11 h-12 bg-[#111931] text-center">
                                            <p
                                                className={`${
                                                    game.json_detail.teams.home
                                                        .winner === false
                                                        ? "text-[#EEEEEE] text-opacity-40"
                                                        : "text-[#EEEEEE]"
                                                } font-bold text-[30px]`}
                                            >
                                                {game.json_detail.score.fulltime
                                                    .home ?? "-"}
                                            </p>
                                        </div>
                                        <div className="w-11 h-12 bg-[#111931] text-center">
                                            <p
                                                className={`${
                                                    game.json_detail.teams.away
                                                        .winner === false
                                                        ? "text-[#EEEEEE] text-opacity-40"
                                                        : "text-[#EEEEEE]"
                                                } font-bold text-[30px]`}
                                            >
                                                {game.json_detail.score.fulltime
                                                    .away ?? "-"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center sm:w-52 w-[7rem] lg:space-x-6 space-x-2">
                                        <img
                                            src={
                                                game.json_detail.teams.away.logo
                                            }
                                            alt="league"
                                            className="lg:h-[40px] lg:w-[40px] h-7 w-7"
                                        />
                                        <p
                                            className={`${
                                                game.json_detail.teams.away
                                                    .winner === false
                                                    ? "text-white text-opacity-40"
                                                    : "text-white"
                                            } lg:text-[15px] text-[12px] truncate font-semibold`}
                                        >
                                            {game.json_detail.teams.away.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
