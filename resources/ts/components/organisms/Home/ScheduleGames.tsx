import { useNavigate } from "react-router-dom";
import { GamesMessage } from "../../molecules/GamesMessage";
import { formatDate } from "../../../functions/Utils";
import { HomeLoading } from "./HomeLoading";
import { FaCircleQuestionIcon } from "../../atoms/FaCircleQuestionIcon";
import { imageUrl } from "../../../functions/Utils";
import { ToolTip } from "../../atoms/ToolTip";
import SportsIcon from "@mui/icons-material/Sports";

export const ScheduleGames = ({ games, loading, maxSeason }) => {
    const navigate = useNavigate();

    const notStartedGames = Object.keys(games).reduce((result, league) => {
        const filteredGames = games[league].filter(
            (game) => game.json_detail.fixture.status.long === "Not Started"
        );
        if (filteredGames.length > 0) {
            result[league] = filteredGames;
        }
        return result;
    }, {});

    const handleGameClick = (gameId, leagueId, season) => {
        navigate(`/games/${gameId}/leagues/${leagueId}/seasons/${season}`);
    };

    const handleStandingsClick = (leagueId, maxSeason) => {
        navigate(`/standings/league/${leagueId}/season/${maxSeason}`);
    };

    // ローディング表示
    if (loading) {
        return (
            <div className="bg-[#1d2233]">
                <HomeLoading />
            </div>
        );
    }

    // gamesが空の場合
    if (Object.keys(games).length === 0) {
        return (
            <div className="flex justify-center items-center h-[20rem] mt-2 bg-[#1d2233]">
                <GamesMessage>
                    行われる試合はありません。
                    <br />
                    別の日付を選択してください。
                </GamesMessage>
            </div>
        );
    }

    // notStartedGamesが空の場合
    if (Object.keys(notStartedGames).length === 0) {
        return (
            <div className="mt-2 flex items-center justify-center space-x-2 bg-[#1d2233]">
                <SportsIcon className="text-[#EEEEEE]" />
                <GamesMessage>開催予定の試合はありません。</GamesMessage>
            </div>
        );
    }

    return (
        <div className="bg-[#1d2233]">
            {Object.keys(notStartedGames).map((leagueName, index) => (
                <div key={index} className="text-[#EEEEEE] mt-2 mb-2">
                    <div className="flex items-center justify-between bg-[#111931] h-8">
                        <div className="flex items-center space-x-2 ml-2">
                            <img
                                src={imageUrl(
                                    "country",
                                    notStartedGames[leagueName][0].json_detail
                                        .league.id,
                                    "svg"
                                )}
                                alt="league"
                                className="h-5 w-5"
                            />
                            <p className="uppercase text-[20px] font-bold text-[#C8CDCD]">
                                {
                                    notStartedGames[leagueName][0].json_detail
                                        .league.country
                                }
                                : {leagueName}
                            </p>
                        </div>
                        <a
                            className="mr-3 text-[13px] text-[#7A84FF] underline hover:no-underline cursor-pointer"
                            onClick={() =>
                                handleStandingsClick(
                                    notStartedGames[leagueName][0].json_detail
                                        .league.id,
                                    maxSeason
                                )
                            }
                        >
                            順位表
                        </a>
                    </div>
                    {notStartedGames[leagueName].map((game, gameIndex) => (
                        <div
                            key={gameIndex}
                            className="flex items-center justify-between border-b border-[#111931] text-[16px] hover:bg-[#3d4e81] cursor-pointer transition duration-300 h-[4rem]"
                            onClick={() =>
                                handleGameClick(
                                    game.json_detail.fixture.id,
                                    game.json_detail.league.id,
                                    game.json_detail.league.season
                                )
                            }
                        >
                            <div className="flex items-center space-x-2 sm:space-x-3 ml-2">
                                <div className="flex flex-col items-center">
                                    <div>
                                        {formatDate(
                                            game.json_detail.fixture.date
                                        )}
                                    </div>
                                    <span className="text-[#EEEEEE] text-opacity-40">
                                        {game.json_detail.fixture.status
                                            .short !== null
                                            ? game.json_detail.fixture.status
                                                  .short
                                            : "-"}
                                    </span>
                                </div>
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <img
                                            src={imageUrl(
                                                "teams",
                                                game.json_detail.teams.home.id,
                                                "png"
                                            )}
                                            alt="team"
                                            className="h-5 w-5"
                                        />
                                        <div className="font-semibold truncate sm:w-full w-[9rem]">
                                            {game.json_detail.teams.home.name}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <img
                                            src={imageUrl(
                                                "teams",
                                                game.json_detail.teams.away.id,
                                                "png"
                                            )}
                                            alt="team"
                                            className="h-5 w-5"
                                        />
                                        <div className="font-semibold truncate sm:w-full w-[9rem]">
                                            {game.json_detail.teams.away.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-5 mr-3">
                                <div>
                                    <div>
                                        {game.json_detail.score.fulltime
                                            .home !== null
                                            ? game.json_detail.score.fulltime
                                                  .home
                                            : "-"}
                                    </div>
                                    <div>
                                        {game.json_detail.score.fulltime
                                            .away !== null
                                            ? game.json_detail.score.fulltime
                                                  .away
                                            : "-"}
                                    </div>
                                </div>
                                <div className="text-[#999999]">
                                    <div>
                                        {game.json_detail.score.halftime
                                            .home !== null
                                            ? `(${game.json_detail.score.halftime.home})`
                                            : ""}
                                    </div>
                                    <div>
                                        {game.json_detail.score.halftime
                                            .away !== null
                                            ? `(${game.json_detail.score.halftime.away})`
                                            : ""}
                                    </div>
                                </div>
                                <div>
                                    <FaCircleQuestionIcon
                                        id={game.json_detail.fixture.id}
                                    />
                                    <ToolTip id={game.json_detail.fixture.id}>
                                        {game.json_detail.fixture.status.long}
                                    </ToolTip>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
