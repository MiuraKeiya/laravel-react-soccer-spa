import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useModal } from "react-hooks-use-modal";
import { PlayerStatsModal } from "./PlayerStatsModal";

export const PlayersStats = ({ games }) => {
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

    return (
        <div>
            <div className="bg-[#111931] text-[#EEEEEE] text-[18px] font-bold py-1 text-center">
                選手スタッツ
            </div>
            <p className="text-[14px] text-[#969a9a] py-2 ml-2">
                ※ 各行をクリックすると全てのスタッツを確認することができます。
            </p>
            {games[0].json_detail.players.map((players, index) => (
                <div key={index}>
                    <table className="w-full">
                        <thead>
                            <tr className="text-[14px] text-[#C8CDCD] bg-[#111931] h-8 cursor-default">
                                <th>
                                    <span className="flex items-center space-x-2 sm:w-[6rem] md:w-[9rem] lg:w-[11rem] sm:ml-1">
                                        <img
                                            src={players.team.logo}
                                            alt="TeamLogo"
                                            className="h-6 w-6 rounded-full"
                                        />
                                        <span>{players.team.name}</span>
                                    </span>
                                </th>
                                <Tooltip title="ポジション">
                                    <th>P</th>
                                </Tooltip>
                                <Tooltip title="総評価">
                                    <th>R</th>
                                </Tooltip>
                                <Tooltip title="出場時間">
                                    <th>M</th>
                                </Tooltip>
                                <Tooltip title="得点">
                                    <th>G</th>
                                </Tooltip>
                                <Tooltip title="アシスト">
                                    <th>GA</th>
                                </Tooltip>
                                <Tooltip title="失点">
                                    <th>GC</th>
                                </Tooltip>
                                <Tooltip title="セーブ数">
                                    <th>GS</th>
                                </Tooltip>
                                <Tooltip title="シュート数">
                                    <th>TS</th>
                                </Tooltip>
                                <Tooltip title="枠内シュート">
                                    <th>SO</th>
                                </Tooltip>
                                <Tooltip title="パス数">
                                    <th>TP</th>
                                </Tooltip>
                                <Tooltip title="キーパス">
                                    <th>KP</th>
                                </Tooltip>
                                <Tooltip title="パス成功">
                                    <th>PA</th>
                                </Tooltip>
                                <Tooltip title="イエローカード">
                                    <th>YC</th>
                                </Tooltip>
                                <Tooltip title="レッドカード">
                                    <th>RC</th>
                                </Tooltip>
                            </tr>
                        </thead>
                        <tbody>
                            {players.players.map((player, playerIndex) => (
                                <tr
                                    key={playerIndex}
                                    className={
                                        "text-[15px] text-[#FFFFFF] text-center border-b border-[#111931] h-16 hover:bg-[#3d4e81] cursor-pointer transition duration-500 bg-[#1d2233]"
                                    }
                                    onClick={() =>
                                        handleOpenModal(player.player.id)
                                    }
                                >
                                    <td>
                                        <span className="flex items-center space-x-2 sm:ml-2">
                                            <img
                                                src={player.player.photo}
                                                alt="Player Photo"
                                                className="h-11 w-11 rounded-full"
                                            />
                                            <span className="text-[15px] text-white font-bold hover:underline">
                                                {player.player.name}
                                            </span>
                                        </span>
                                    </td>
                                    <td>
                                        {player.statistics[0]?.games.position ||
                                            0}
                                    </td>
                                    <td>
                                        {player.statistics[0]?.games.rating ||
                                            0}
                                    </td>
                                    <td>
                                        {player.statistics[0]?.games.minutes ||
                                            0}
                                    </td>
                                    <td>
                                        {player.statistics[0]?.goals.total || 0}
                                    </td>
                                    <td>
                                        {player.statistics[0]?.goals.assists ||
                                            0}
                                    </td>
                                    <td>
                                        {player.statistics[0]?.goals.conceded ||
                                            0}
                                    </td>
                                    <td>
                                        {player.statistics[0]?.goals.saves || 0}
                                    </td>
                                    <td>
                                        {player.statistics[0]?.shots.total || 0}
                                    </td>
                                    <td>
                                        {player.statistics[0]?.shots.on || 0}
                                    </td>
                                    <td>
                                        {player.statistics[0]?.passes.total ||
                                            0}
                                    </td>
                                    <td>
                                        {player.statistics[0]?.passes.key || 0}
                                    </td>
                                    <td>
                                        {player.statistics[0]?.passes
                                            .accuracy || 0}
                                    </td>
                                    <td>
                                        {player.statistics[0]?.cards.yellow ||
                                            0}
                                    </td>
                                    <td>
                                        {player.statistics[0]?.cards.red || 0}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
            <Modal>
                <div className="border-2 border-[#111931] bg-[#1d2233] h-[33rem] sm:h-[34rem] md:h-[35rem] lg:h-[35rem] w-[20rem] sm:w-[33rem] md:w-[34rem] lg:w-[34rem] overflow-y-scroll">
                    <div className="mb-4">
                        <div className="flex flex-row-reverse">
                            <IconButton
                                color="inherit"
                                aria-label="close"
                                onClick={close}
                                sx={{ color: "#C8CDCD" }}
                            >
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <PlayerStatsModal playerId={playerId} games={games} />
                    </div>
                </div>
            </Modal>
        </div>
    );
};
