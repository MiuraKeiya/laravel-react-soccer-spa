import { useNavigate } from "react-router-dom";

export const PlayerStatsModal = ({ playerId, games, maxSeason }) => {
    const navigate = useNavigate();

    const handleLeagueClick = (leagueId, maxSeason) => {
        navigate(`/league/${leagueId}/season/${maxSeason}`);
    };

    const handleTeamClick = (teamId, maxSeason) => {
        navigate(`/team/${teamId}/season/${maxSeason}`);
    };

    const handlePlayerClick = (playerId, maxSeason) => {
        navigate(`/player/${playerId}/season/${maxSeason}`);
    };

    return (
        <div className="mx-3">
            <div className="bg-[#111931]">
                {games.map((league, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between mx-1"
                    >
                        <div className="flex items-center space-x-1 text-[12px] font-bold text-[#EEEEEE] uppercase">
                            <img
                                src={league.json_detail.league.flag}
                                alt="League Photo"
                                className="h-5 w-5"
                            />
                            <span
                                className="hover:underline cursor-pointer"
                                onClick={() =>
                                    handleLeagueClick(
                                        league.json_detail.league.id,
                                        maxSeason
                                    )
                                }
                            >
                                {league.json_detail.league.country} -{" "}
                                {league.json_detail.league.name}
                            </span>
                        </div>
                        <span className="text-[12px] font-bold text-[#EEEEEE]">
                            第{league.json_detail.league.round.match(/\d+/)}節
                        </span>
                    </div>
                ))}
            </div>
            <div>
                {games[0].json_detail.players.map((players, index) => (
                    <div key={index}>
                        {players.players.map((player, playerIndex) => (
                            <div key={playerIndex}>
                                {player.player.id === playerId && (
                                    <div>
                                        <div className="flex items-center space-x-4 ml-3">
                                            <div>
                                                <img
                                                    src={player.player.photo}
                                                    alt="League Photo"
                                                    className="h-16 w-16 rounded-lg hover:border hover:border-[#B0EE1B] cursor-pointer"
                                                    onClick={() =>
                                                        handlePlayerClick(
                                                            player.player.id,
                                                            maxSeason
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="flex flex-col text-[13px] text-[#FFFFFF] space-y-1 mt-2">
                                                <div className="flex items-center space-x-1">
                                                    <span
                                                        className="font-bold cursor-pointer hover:underline"
                                                        onClick={() =>
                                                            handleTeamClick(
                                                                players.team.id,
                                                                maxSeason
                                                            )
                                                        }
                                                    >
                                                        {players.team.name}
                                                    </span>
                                                    <img
                                                        src={players.team.logo}
                                                        alt="League Photo"
                                                        className="h-6 w-6 transition-transform hover:scale-110 cursor-pointer"
                                                        onClick={() =>
                                                            handleTeamClick(
                                                                players.team.id,
                                                                maxSeason
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <span
                                                    className="hover:underline cursor-pointer font-bold"
                                                    onClick={() =>
                                                        handlePlayerClick(
                                                            player.player.id,
                                                            maxSeason
                                                        )
                                                    }
                                                >
                                                    {player.player.name}
                                                </span>
                                                <div>
                                                    <span>背番号: </span>
                                                    <span>
                                                        {
                                                            player.statistics[0]
                                                                .games.number
                                                        }
                                                    </span>
                                                </div>
                                                <div>
                                                    <span>ポジション: </span>
                                                    <span>
                                                        {
                                                            player.statistics[0]
                                                                .games.position
                                                        }
                                                    </span>
                                                </div>
                                                <div>
                                                    <span>総評価: </span>
                                                    <span className="font-bold text-[#B0EE1B]">
                                                        {player.statistics[0]
                                                            .games.rating ||
                                                            "評価なし"}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#EEEEEE] text-center mt-3 mb-1">
                                            概要
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                出場時間:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].games
                                                    .minutes || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                ゴール:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].goals
                                                    .total || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                アシスト:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].goals
                                                    .assist || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                キーパーセーブ:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].goals
                                                    .saves || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                失点:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].goals
                                                    .conceded || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#EEEEEE] text-center mt-3 mb-1">
                                            パス
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                パス:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].passes
                                                    .total || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                成功したパス:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].passes
                                                    .accuracy || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                キーパス:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].passes
                                                    .key || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#EEEEEE] text-center mt-3 mb-1">
                                            攻撃
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                シュート:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].shots
                                                    .total || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                枠内シュート:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].shots
                                                    .on || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#EEEEEE] text-center mt-3 mb-1">
                                            タックル
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                タックル:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].tackles
                                                    .total || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                成功したタックル:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].tackles
                                                    .blocks || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                インターセプト:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].tackles
                                                    .interceptions || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#EEEEEE] text-center mt-3 mb-1">
                                            デュエル
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                デュエル:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].duels
                                                    .total || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                勝利したデュエル:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].duels
                                                    .won || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#EEEEEE] text-center mt-3 mb-1">
                                            ドリブル
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                ドリブル:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].dribbles
                                                    .attempts || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                成功したドリブル:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].dribbles
                                                    .success || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                抜き去るドリブル:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].dribbles
                                                    .past || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#EEEEEE] text-center mt-3 mb-1">
                                            ファウル
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                ファウル:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].fouls
                                                    .committed || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                ファウルを受けた:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].fouls
                                                    .drawn || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#EEEEEE] text-center mt-3 mb-1">
                                            カード
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                イエローカード:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].cards
                                                    .yellow || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                レッドカード:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].cards
                                                    .red || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#EEEEEE] text-center mt-3 mb-1">
                                            ペナルティーキック
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                PKを与えた:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].penalty
                                                    .commited || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                PK失敗:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].penalty
                                                    .missed || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                PKセーブ:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].penalty
                                                    .saved || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                PK成功:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].penalty
                                                    .scored || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span className="text-[#EEEEEE]">
                                                PK獲得:{" "}
                                            </span>
                                            <span className="font-bold text-white">
                                                {player.statistics[0].penalty
                                                    .won || 0}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
