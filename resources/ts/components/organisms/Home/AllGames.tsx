import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../functions/Utils";
import { FaCircleQuestionIcon } from "../../atoms/FaCircleQuestionIcon";
import { Message } from "../../atoms/Message";
import { ToolTip } from "../../atoms/ToolTip";
import { HomeLoading } from "./HomeLoading";

export const AllGames = ({ games, loading, maxSeason }) => {
    const navigate = useNavigate();

    // 試合詳細ページへの遷移
    const handleGameClick = (gameId, leagueId, season) => {
        navigate(`/games/${gameId}/leagues/${leagueId}/seasons/${season}`);
    };

    // 順位一覧ページへの遷移
    const handleStandingsClick = (leagueId, maxSeason) => {
        navigate(`/standings/league/${leagueId}/season/${maxSeason}`);
    };

    // リーグ詳細ページへの遷移
    const handleLeagueClick = (leagueId, maxSeason) => {
        navigate(`/league/${leagueId}/season/${maxSeason}`);
    };
    console.log(loading);
    return (
        <div className="bg-[#1d2233] rounded-lg shadow-md shadow-[#121313]">
            {Object.keys(games).length === 0 && !loading ? (
                <div className="flex justify-center items-center h-[20rem] mt-2">
                    <Message style={"text-[18px] text-[#C8CDCD]"}>
                        行われる試合はありません。
                        <br />
                        別の日付を選択してください。
                    </Message>
                </div>
            ) : loading ? (
                <HomeLoading />
            ) : (
                Object.keys(games).map((leagueName, index) => {
                    const leagueGames = games[leagueName];

                    return (
                        <div key={index} className="text-[#EEEEEE] mt-2 mb-2">
                            <div className="flex items-center justify-between bg-[#111931] h-8">
                                <div className="flex items-center space-x-2 ml-2">
                                    <img
                                        src={
                                            leagueGames[0].json_detail.league
                                                .flag
                                        }
                                        alt="league"
                                        className="h-5 w-5"
                                    />
                                    <p
                                        className="uppercase text-[20px] font-bold text-[#C8CDCD] hover:underline cursor-pointer"
                                        onClick={() =>
                                            handleLeagueClick(
                                                leagueGames[0].json_detail
                                                    .league.id,
                                                maxSeason
                                            )
                                        }
                                    >
                                        {
                                            leagueGames[0].json_detail.league
                                                .country
                                        }
                                        : {leagueName}
                                    </p>
                                </div>
                                <a
                                    className="mr-3 text-[13px] text-[#EEEEEE] underline hover:no-underline cursor-pointer"
                                    onClick={() =>
                                        handleStandingsClick(
                                            leagueGames[0].json_detail.league
                                                .id,
                                            maxSeason
                                        )
                                    }
                                >
                                    順位表
                                </a>
                            </div>
                            {leagueGames.map((game, gameIndex) => (
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
                                    <div className="flex items-center space-x-2 ml-2">
                                        <div>
                                            {formatDate(
                                                game.json_detail.fixture.date
                                            )}
                                        </div>
                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src={
                                                        game.json_detail.teams
                                                            .home.logo
                                                    }
                                                    alt="team"
                                                    className="h-5 w-5"
                                                />
                                                <div>
                                                    {
                                                        game.json_detail.teams
                                                            .home.name
                                                    }
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src={
                                                        game.json_detail.teams
                                                            .away.logo
                                                    }
                                                    alt="team"
                                                    className="h-5 w-5"
                                                />
                                                <div>
                                                    {
                                                        game.json_detail.teams
                                                            .away.name
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-5 mr-3">
                                        <div>
                                            <div>
                                                {game.json_detail.score.fulltime
                                                    .home !== null
                                                    ? game.json_detail.score
                                                          .fulltime.home
                                                    : "-"}
                                            </div>
                                            <div>
                                                {game.json_detail.score.fulltime
                                                    .away !== null
                                                    ? game.json_detail.score
                                                          .fulltime.away
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
                                            <ToolTip
                                                id={game.json_detail.fixture.id}
                                            >
                                                {
                                                    game.json_detail.fixture
                                                        .status.long
                                                }
                                            </ToolTip>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                })
            )}
        </div>
    );
};
