import { useContext, useState } from "react";
import { MatchDetailsContext } from "../../provider/MatchDetailsProvider";
import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "react-hooks-use-modal";
import { ModalPlayerStats } from "../atoms/ModalPlayerStats";

export const PlayerStats = () => {
    const { result, error } = useContext(MatchDetailsContext);

    // モーダルに渡すId
    const [playerId, setPlayerId] = useState(null);

    const handleOpenModal = (Id) => {
        open();
        setPlayerId(Id);
    };

    //　モーダルオプション
    const [Modal, open, close] = useModal("app", {
        preventScroll: true,
        focusTrapOptions: {
            clickOutsideDeactivates: false,
        },
    });

    if (result.length === 0) {
        return null;
    }

    return (
        <div>
            <div className="bg-[#111931] text-[#C8CDCD] text-[11px] font-bold py-1 text-center">
                選手スタッツ
            </div>
            <p className="text-[11px] text-[#969a9a] py-2 ml-2">
                ※ 各行をクリックすると全てのスタッツを確認することができます。
            </p>
            {result.response[0].players.map((players, index) => (
                <div key={index} className="mb-5">
                    <table className="w-full">
                        <thead>
                            <tr className="text-[14px] text-[#C8CDCD] bg-[#111931] h-8 cursor-default">
                                <th>
                                    <span className="flex items-center space-x-2 sm:w-[6rem] md:w-[9rem] lg:w-[11rem] sm:ml-1">
                                        <img
                                            src={players.team.logo}
                                            alt="Team Photo"
                                            className="h-6 w-6 rounded-full"
                                        />
                                        <span>{players.team.name}</span>
                                    </span>
                                </th>
                                <th className="P">P</th>
                                <th className="R">R</th>
                                <th className="M">M</th>
                                <th className="G">G</th>
                                <th className="GA">GA</th>
                                <th className="GC">GC</th>
                                <th className="GS">GS</th>
                                <th className="TS">TS</th>
                                <th className="SO">SO</th>
                                <th className="TP">TP</th>
                                <th className="KP">KP</th>
                                <th className="PA">PA</th>
                                <th className="YC">YC</th>
                                <th className="RC">RC</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players.players.map((player, playerIndex) => (
                                <tr
                                    key={playerIndex}
                                    onClick={() =>
                                        handleOpenModal(player.player.id)
                                    }
                                    className={
                                        "text-[12px] text-[#FFFFFF] text-center border-b border-[#111931] h-8 hover:bg-[#3d4e81] cursor-pointer transition duration-500"
                                    }
                                >
                                    <td>
                                        <span className="flex items-center space-x-2 sm:ml-2">
                                            <img
                                                src={player.player.photo}
                                                alt="Player Photo"
                                                className="h-5 w-5 rounded-full"
                                            />
                                            <span className="text-[11px] text-[#FFFFFF] font-bold">
                                                {player.player.name}
                                            </span>
                                        </span>
                                    </td>
                                    <td>
                                        {player.statistics[0].games.position}
                                    </td>
                                    <td>{player.statistics[0].games.rating}</td>
                                    <td>
                                        {player.statistics[0].games.minutes}
                                    </td>
                                    <td>{player.statistics[0].goals.total}</td>
                                    <td>
                                        {player.statistics[0].goals.assists}
                                    </td>
                                    <td>
                                        {player.statistics[0].goals.conceded}
                                    </td>
                                    <td>{player.statistics[0].goals.saves}</td>
                                    <td>{player.statistics[0].shots.total}</td>
                                    <td>{player.statistics[0].shots.on}</td>
                                    <td>{player.statistics[0].passes.total}</td>
                                    <td>{player.statistics[0].passes.key}</td>
                                    <td>
                                        {player.statistics[0].passes.accuracy}
                                    </td>
                                    <td>{player.statistics[0].cards.yellow}</td>
                                    <td>{player.statistics[0].cards.red}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
            <Tooltip anchorSelect=".P" place="left">
                <span className="text-[11px] text-[#B0EE1B] font-bold">
                    ポジション
                </span>
            </Tooltip>
            <Tooltip anchorSelect=".R" place="left">
                <span className="text-[11px] text-[#B0EE1B] font-bold">
                    総評価
                </span>
            </Tooltip>
            <Tooltip anchorSelect=".M" place="left">
                <span className="text-[11px] text-[#B0EE1B] font-bold">
                    出場時間
                </span>
            </Tooltip>
            <Tooltip anchorSelect=".G" place="left">
                <span className="text-[11px] text-[#B0EE1B] font-bold">
                    得点
                </span>
            </Tooltip>
            <Tooltip anchorSelect=".GA" place="left">
                <span className="text-[11px] text-[#B0EE1B] font-bold">
                    アシスト
                </span>
            </Tooltip>
            <Tooltip anchorSelect=".GC" place="left">
                <span className="text-[11px] text-[#B0EE1B] font-bold">
                    失点
                </span>
            </Tooltip>
            <Tooltip anchorSelect=".GS" place="left">
                <span className="text-[11px] text-[#B0EE1B] font-bold">
                    セーブ数
                </span>
            </Tooltip>
            <Tooltip anchorSelect=".TS" place="left">
                <span className="text-[11px] text-[#B0EE1B] font-bold">
                    シュート数
                </span>
            </Tooltip>
            <Tooltip anchorSelect=".SO" place="left">
                <span className="text-[11px] text-[#B0EE1B] font-bold">
                    枠内シュート
                </span>
            </Tooltip>
            <Tooltip anchorSelect=".TP" place="left">
                <span className="text-[11px] text-[#B0EE1B] font-bold">
                    パス数
                </span>
            </Tooltip>
            <Tooltip anchorSelect=".KP" place="left">
                <span className="text-[11px] text-[#B0EE1B] font-bold">
                    キーパス
                </span>
            </Tooltip>
            <Tooltip anchorSelect=".PA" place="left">
                <span className="text-[11px] text-[#B0EE1B] font-bold">
                    パス成功
                </span>
            </Tooltip>
            <Tooltip anchorSelect=".YC" place="left">
                <span className="text-[11px] text-[#B0EE1B] font-bold">
                    イエローカード
                </span>
            </Tooltip>
            <Tooltip anchorSelect=".RC" place="left">
                <span className="text-[11px] text-[#B0EE1B] font-bold">
                    レッドカード
                </span>
            </Tooltip>
            <Modal>
                <div className="border-2 border-[#111931] bg-[#1d2233] h-[33rem] sm:h-[34rem] md:h-[35rem] lg:h-[35rem] w-[20rem] sm:w-[33rem] md:w-[34rem] lg:w-[34rem] overflow-y-scroll">
                    <div className="mb-4">
                        <div className="flex flex-row-reverse mt-1">
                            <button onClick={close} className="mr-4">
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    className="text-[#111931] text-[23px] hover:text-[#C8CDCD] cursor-pointer"
                                />
                            </button>
                        </div>
                        <ModalPlayerStats playerId={playerId} />
                    </div>
                </div>
            </Modal>
        </div>
    );
};
