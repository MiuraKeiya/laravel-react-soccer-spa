import { useContext } from "react";
import { PlayerContext } from "../../provider/PlayerProvider";

export const PlayerSeason = () => {
    const { playerData, error } = useContext(PlayerContext);

    const playerData2023 = playerData[2023];

    return (
        <div className="mb-3 text-[#FFFFFF] mt-2">
            {playerData2023.response &&
            playerData2023.response[0] &&
            playerData2023.response[0].statistics[0] ? (
                <div>
                    <div className="mb-2">
                        <div className="bg-[#111931] py-1 mb-1">
                            <p className="text-[12px] font-bold text-[#C8CDCD] text-center">
                                試合
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">出場数</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .games.appearences || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">出場時間(分)</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .games.minutes || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">先発出場数</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .games.lineups || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">総合評価</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .games.rating || 0}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="bg-[#111931] py-1 mb-1">
                            <p className="text-[12px] font-bold text-[#C8CDCD] text-center">
                                交代
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">ベンチ</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .substitutes.bench || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">途中出場</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .substitutes.on || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">交代</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .substitutes.out || 0}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="bg-[#111931] py-1 mb-1">
                            <p className="text-[12px] font-bold text-[#C8CDCD] text-center">
                                ゴール
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">ゴール</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .goals.total || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">アシスト</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .goals.assists || 0}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="bg-[#111931] py-1 mb-1">
                            <p className="text-[12px] font-bold text-[#C8CDCD] text-center">
                                シュート
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">シュート</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .shots.total || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">枠内シュート</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .shots.on || 0}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="bg-[#111931] py-1 mb-1">
                            <p className="text-[12px] font-bold text-[#C8CDCD] text-center">
                                パス
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">パス</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .passes.total || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">パス成功率</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .passes.accuracy || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">キーパス</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .passes.key || 0}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="bg-[#111931] py-1 mb-1">
                            <p className="text-[12px] font-bold text-[#C8CDCD] text-center">
                                ドリブル
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">ドリブル</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .dribbles.attempts || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">成功</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .dribbles.success || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">ドリブルパス</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .dribbles.past || 0}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="bg-[#111931] py-1 mb-1">
                            <p className="text-[12px] font-bold text-[#C8CDCD] text-center">
                                デュエル
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">デュエル</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .duels.total || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">勝利</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .duels.won || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">ドリブルパス</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .dribbles.past || 0}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="bg-[#111931] py-1 mb-1">
                            <p className="text-[12px] font-bold text-[#C8CDCD] text-center">
                                タックル
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">タックル</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .tackles.total || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">ブロック</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .tackles.blocks || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">インターセプト</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .tackles.interceptions || 0}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="bg-[#111931] py-1 mb-1">
                            <p className="text-[12px] font-bold text-[#C8CDCD] text-center">
                                ファウル
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">ファウル</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .fouls.committed || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">受けたファウル</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .fouls.drawn || 0}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="bg-[#111931] py-1 mb-1">
                            <p className="text-[12px] font-bold text-[#C8CDCD] text-center">
                                セーブ
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">セーブ</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .goals.saves || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">失点</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .goals.conceded || 0}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="bg-[#111931] py-1 mb-1">
                            <p className="text-[12px] font-bold text-[#C8CDCD] text-center">
                                警告
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">イエローカード</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .cards.yellow || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">レッドカード</p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .cards.red || 0}
                                </p>
                            </div>
                            <div className="flex justify-between mx-3">
                                <p className="text-[14px]">
                                    ダブルイエローカード
                                </p>
                                <p className="text-[#FF4B44]">
                                    {playerData2023.response[0].statistics[0]
                                        .cards.yellowred || 0}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-[5rem]">
                    <p className="text-[#6e6f6f] text-[13px]">
                        今シーズンの統計データはありません。
                    </p>
                </div>
            )}
        </div>
    );
};
