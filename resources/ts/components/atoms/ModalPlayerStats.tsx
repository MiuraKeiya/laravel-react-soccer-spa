import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MatchDetailsContext } from "../../provider/MatchDetailsProvider";

export const ModalPlayerStats = ({ playerId }) => {
    const { result, error } = useContext(MatchDetailsContext);

    const navigate = useNavigate();

    const handleSetPlayerIdClick = (id) => {
        navigate(`/player/${id}`);
    };

    if (result.length === 0) {
        return null;
    }

    return (
        <div className="mx-3">
            <div className="bg-[#111931] py-1">
                {result.response.map((league, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between mx-1"
                    >
                        <div className="flex items-center space-x-1 text-[12px] font-bold text-[#C8CDCD] uppercase">
                            <img
                                src={league.league.flag}
                                alt="League Photo"
                                className="h-5 w-5"
                            />
                            <span>
                                {league.league.country} - {league.league.name}
                            </span>
                        </div>
                        <span className="text-[12px] font-bold text-[#C8CDCD]">
                            {league.league.round}
                        </span>
                    </div>
                ))}
            </div>
            <div className="mt-2">
                {result.response[0].players.map((team, index) => (
                    <div key={index} className="text-[#C8CDCD]">
                        {team.players.map((player, playerIndex) => (
                            <div key={playerIndex}>
                                {player.player.id === playerId && (
                                    <div>
                                        <div className="flex items-center space-x-4 ml-3">
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    handleSetPlayerIdClick(
                                                        player.player.id
                                                    )
                                                }
                                            >
                                                <img
                                                    src={player.player.photo}
                                                    alt="League Photo"
                                                    className="h-16 w-16 rounded-lg hover:border hover:border-[#B0EE1B]"
                                                />
                                            </div>
                                            <div className="flex flex-col text-[13px] text-[#FFFFFF] space-y-1">
                                                <div className="flex items-center space-x-1">
                                                    <span className="font-bold">
                                                        {team.team.name}
                                                    </span>
                                                    <img
                                                        src={team.team.logo}
                                                        alt="League Photo"
                                                        className="h-6 w-6"
                                                    />
                                                </div>
                                                <span
                                                    className="hover:underline cursor-pointer"
                                                    onClick={() =>
                                                        handleSetPlayerIdClick(
                                                            player.player.id
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
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#C8CDCD] text-center mt-3 mb-1">
                                            概要
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>出場時間: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].games
                                                    .minutes || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>ゴール: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].goals
                                                    .total || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>アシスト: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].goals
                                                    .assist || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>キーパーセーブ: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].goals
                                                    .saves || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>失点: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].goals
                                                    .conceded || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#C8CDCD] text-center mt-3 mb-1">
                                            パス
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>パス: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].passes
                                                    .total || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>成功したパス: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].passes
                                                    .accuracy || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>キーパス: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].passes
                                                    .key || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#C8CDCD] text-center mt-3 mb-1">
                                            攻撃
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>シュート: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].shots
                                                    .total || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>枠内シュート: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].shots
                                                    .on || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#C8CDCD] text-center mt-3 mb-1">
                                            タックル
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>タックル: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].tackles
                                                    .total || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>成功したタックル: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].tackles
                                                    .blocks || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>インターセプト: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].tackles
                                                    .interceptions || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#C8CDCD] text-center mt-3 mb-1">
                                            デュエル
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>デュエル: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].duels
                                                    .total || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>勝利したデュエル: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].duels
                                                    .won || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#C8CDCD] text-center mt-3 mb-1">
                                            ドリブル
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>ドリブル: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].dribbles
                                                    .attempts || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>成功したドリブル: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].dribbles
                                                    .success || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>抜き去るドリブル: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].dribbles
                                                    .past || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#C8CDCD] text-center mt-3 mb-1">
                                            ファウル
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>ファウル: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].fouls
                                                    .committed || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>ファウルを受けた: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].fouls
                                                    .drawn || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#C8CDCD] text-center mt-3 mb-1">
                                            カード
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>イエローカード: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].cards
                                                    .yellow || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>レッドカード: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].cards
                                                    .red || 0}
                                            </span>
                                        </div>
                                        <div className="bg-[#111931] py-1 text-[12px] font-bold text-[#C8CDCD] text-center mt-3 mb-1">
                                            ペナルティーキック
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>PKを与えた: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].penalty
                                                    .commited || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>PK失敗: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].penalty
                                                    .missed || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>PKセーブ: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].penalty
                                                    .saved || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>PK成功: </span>
                                            <span className="font-bold">
                                                {player.statistics[0].penalty
                                                    .scored || 0}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mx-3 text-[13px]">
                                            <span>PK獲得: </span>
                                            <span className="font-bold">
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
