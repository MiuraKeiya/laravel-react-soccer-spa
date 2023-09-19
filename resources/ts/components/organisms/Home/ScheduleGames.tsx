import { useNavigate } from "react-router-dom";
import { GamesMessage } from "../../molecules/GamesMessage";
import { formatDate } from "../../../functions/Utils";
import { FaCircleQuestionIcon } from "../../atoms/FaCircleQuestionIcon";
import { ToolTip } from "../../atoms/ToolTip";

export const ScheduleGames = ({ games, maxSeason }) => {
    const navigate = useNavigate();
    console.log(games);
    const handleGameClick = (gameId, leagueId, season) => {
        navigate(`/games/${gameId}/leagues/${leagueId}/seasons/${season}`);
    };

    const handleStandingsClick = (leagueId, maxSeason) => {
        navigate(`/standings/league/${leagueId}/season/${maxSeason}`);
    };

    return (
        <div>
            {Object.keys(games).length === 0 ? (
                <GamesMessage>
                    試合データは存在しません。
                    <br />
                    別の日付を選択してください。
                </GamesMessage>
            ) : (
                (() => {
                    // 表示フラグ
                    let hasDisplayedMessage = false;

                    return Object.keys(games).map((leagueName, index) => {
                        const leagueGames = games[leagueName];

                        // "Not Started" の試合データのみをフィルタリング
                        const notStartedGames = leagueGames.filter(
                            (game) =>
                                game.json_detail.fixture.status.long ===
                                "Not Started"
                        );

                        if (notStartedGames.length === 0) {
                            // "Not Started" の試合データが存在しない場合かつ
                            // 表示フラグがセットされていない場合にメッセージを表示し、フラグをセットする
                            if (!hasDisplayedMessage) {
                                hasDisplayedMessage = true;
                                return (
                                    <GamesMessage>
                                        開催予定の試合はありません。
                                    </GamesMessage>
                                );
                            }
                            return null;
                        }

                        return (
                            <div
                                key={index}
                                className="text-[#EEEEEE] mt-2 mb-2"
                            >
                                <div className="flex items-center justify-between bg-[#111931] h-8">
                                    <div className="flex items-center space-x-2">
                                        <img
                                            src={
                                                leagueGames[0].json_detail
                                                    .league.flag
                                            }
                                            alt="league"
                                            className="h-5 w-5"
                                        />
                                        <p className="uppercase text-[20px] font-bold text-[#C8CDCD]">
                                            {
                                                leagueGames[0].json_detail
                                                    .league.country
                                            }
                                            : {leagueName}
                                        </p>
                                    </div>
                                    <a
                                        className="mr-3 text-[13px] text-[#C8CDCD] underline hover:no-underline cursor-pointer"
                                        onClick={() =>
                                            handleStandingsClick(
                                                leagueGames[0].json_detail
                                                    .league.id,
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
                                        className="flex items-center justify-between border-b border-[#1d2233] text-[16px] hover:bg-[#3d4e81] cursor-pointer transition duration-500 h-[4rem]"
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
                                                    game.json_detail.fixture
                                                        .date
                                                )}
                                            </div>
                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <img
                                                        src={
                                                            game.json_detail
                                                                .teams.home.logo
                                                        }
                                                        alt="team"
                                                        className="h-5 w-5"
                                                    />
                                                    <div>
                                                        {
                                                            game.json_detail
                                                                .teams.home.name
                                                        }
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <img
                                                        src={
                                                            game.json_detail
                                                                .teams.away.logo
                                                        }
                                                        alt="team"
                                                        className="h-5 w-5"
                                                    />
                                                    <div>
                                                        {
                                                            game.json_detail
                                                                .teams.away.name
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-5 mr-3">
                                            <div>
                                                <div>
                                                    {game.json_detail.score
                                                        .fulltime.home !== null
                                                        ? game.json_detail.score
                                                              .fulltime.home
                                                        : "-"}
                                                </div>
                                                <div>
                                                    {game.json_detail.score
                                                        .fulltime.away !== null
                                                        ? game.json_detail.score
                                                              .fulltime.away
                                                        : "-"}
                                                </div>
                                            </div>
                                            <div className="text-[#999999]">
                                                <div>
                                                    {game.json_detail.score
                                                        .halftime.home !== null
                                                        ? `(${game.json_detail.score.halftime.home})`
                                                        : ""}
                                                </div>
                                                <div>
                                                    {game.json_detail.score
                                                        .halftime.away !== null
                                                        ? `(${game.json_detail.score.halftime.away})`
                                                        : ""}
                                                </div>
                                            </div>
                                            <div>
                                                <FaCircleQuestionIcon
                                                    id={
                                                        game.json_detail.fixture
                                                            .id
                                                    }
                                                />
                                                <ToolTip
                                                    id={
                                                        game.json_detail.fixture
                                                            .id
                                                    }
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
                    });
                })()
            )}
        </div>
    );
};
