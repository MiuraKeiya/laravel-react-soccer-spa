import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../../functions/Utils";

export const PlayerInformations = ({ statistics, maxSeason }) => {
    const navigate = useNavigate();

    // チーム詳細ページへの遷移
    const handleTeamClick = (teamId, season) => {
        navigate(`/team/${teamId}/season/${season}`);
    };

    // リーグ詳細ページへの遷移
    const handleLeagueClick = (leagueId, season) => {
        navigate(`/league/${leagueId}/season/${season}`);
    };

    return (
        <div className="bg-gradient-to-br from-[#1d2233] rounded-t sm:h-60 flex items-center justify-center py-3 sm:py-0">
            {statistics.map((player, index) => (
                <div key={index}>
                    <div className="flex items-center flex-col sm:flex-row space-x-6 space-y-1 sm:space-y-0">
                        <div className="flex sm:flex-col items-center space-y-2 space-x-2 sm:space-x-0">
                            <img
                                src={imageUrl(
                                    "players",
                                    player.json_statistics.player.id,
                                    "png"
                                )}
                                onError={(e) => {
                                    // 代替の画像のURLを設定
                                    e.target.src = imageUrl(
                                        "players",
                                        "error",
                                        "png"
                                    );
                                }}
                                alt="PlayerPhoto"
                                className="rounded-full sm:h-28 sm:w-28 h-[4rem] w-[4rem]"
                            />
                            <div className="flex space-x-2">
                                <img
                                    src={imageUrl(
                                        "teams",
                                        player.json_statistics.statistics[0]
                                            .team.id,
                                        "png"
                                    )}
                                    alt="TeamLogo"
                                    className="sm:h-14 sm:w-14 h-[2rem] w-[2rem] transition-transform hover:scale-110 cursor-pointer"
                                    onClick={() =>
                                        handleTeamClick(
                                            player.json_statistics.statistics[0]
                                                .team.id,
                                            maxSeason
                                        )
                                    }
                                />
                                <img
                                    src={imageUrl(
                                        "leagues",
                                        player.json_statistics.statistics[0]
                                            .league.id,
                                        "png"
                                    )}
                                    alt="LeagueLogo"
                                    className="sm:h-14 sm:w-14 h-[2rem] w-[2rem] transition-transform hover:scale-110 cursor-pointer bg-white rounded"
                                    onClick={() =>
                                        handleLeagueClick(
                                            player.json_statistics.statistics[0]
                                                .league.id,
                                            maxSeason
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold sm:text-[30px] text-[22px] mb-3">
                                {player.json_statistics.player.name}
                            </span>
                            <div className="flex sm:space-x-14 space-x-2">
                                <div className="flex flex-col space-y-3">
                                    <div className="text-white">
                                        <span>クラブ</span> :{" "}
                                        <a
                                            className="font-bold hover:underline cursor-pointer"
                                            onClick={() =>
                                                handleTeamClick(
                                                    player.json_statistics
                                                        .statistics[0].team.id,
                                                    maxSeason
                                                )
                                            }
                                        >
                                            {
                                                player.json_statistics
                                                    .statistics[0].team.name
                                            }
                                        </a>
                                    </div>
                                    <div className="text-white">
                                        <span>誕生日</span> :{" "}
                                        <span className="font-bold">
                                            {
                                                player.json_statistics.player
                                                    .birth.date
                                            }
                                            ({player.json_statistics.player.age}
                                            歳)
                                        </span>
                                    </div>
                                    <div className="text-white">
                                        <span>身長</span> :{" "}
                                        <span className="font-bold">
                                            {
                                                player.json_statistics.player
                                                    .height
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <div className="text-white">
                                        <span>ポジション</span> :{" "}
                                        <span className="font-bold">
                                            {
                                                player.json_statistics
                                                    .statistics[0].games
                                                    .position
                                            }
                                        </span>
                                    </div>
                                    <div className="text-white">
                                        <span>国籍</span> :{" "}
                                        <span className="font-bold">
                                            {
                                                player.json_statistics.player
                                                    .nationality
                                            }
                                        </span>
                                    </div>
                                    <div className="text-white">
                                        <span>体重</span> :{" "}
                                        <span className="font-bold">
                                            {
                                                player.json_statistics.player
                                                    .weight
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
