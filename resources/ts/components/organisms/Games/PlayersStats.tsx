import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useModal } from "react-hooks-use-modal";
import { PlayerStatsModal } from "./PlayerStatsModal";
import { getRatingColorClass } from "../../../functions/FieldUtils/getRatingColorClass";

export const PlayersStats = ({ games, maxSeason }) => {
    // モーダルに渡すId
    const [playerId, setPlayerId] = useState(null);

    const navigate = useNavigate();

    const handleOpenModal = (Id) => {
        open();
        setPlayerId(Id);
    };

    const handlePlayerClick = (playerId, maxSeason) => {
        navigate(`/player/${playerId}/season/${maxSeason}`);
    };

    const handleTeamClick = (teamId, maxSeason) => {
        navigate(`/team/${teamId}/season/${maxSeason}`);
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
                <div key={index} className="overflow-x-auto">
                    <table className="sm:w-full w-[35rem] flex-none">
                        <thead>
                            <tr className="text-[14px] text-[#C8CDCD] bg-[#111931] h-8 cursor-default">
                                <th>
                                    <span
                                        className="flex items-center space-x-2 sm:ml-1 hover:underline cursor-pointer"
                                        onClick={() =>
                                            handleTeamClick(
                                                players.team.id,
                                                maxSeason
                                            )
                                        }
                                    >
                                        <img
                                            src={players.team.logo}
                                            alt="TeamLogo"
                                            className="h-6 w-6 rounded-full"
                                        />
                                        <span>{players.team.name}</span>
                                    </span>
                                </th>
                                <Tooltip title="ポジション">
                                    <th className="w-[2rem] sm:w-[3rem]">P</th>
                                </Tooltip>
                                <Tooltip title="総評価">
                                    <th className="w-[2rem] sm:w-[3rem]">R</th>
                                </Tooltip>
                                <Tooltip title="出場時間">
                                    <th className="w-[2rem] sm:w-[3rem]">M</th>
                                </Tooltip>
                                <Tooltip title="得点">
                                    <th className="w-[2rem] sm:w-[3rem]">G</th>
                                </Tooltip>
                                <Tooltip title="アシスト">
                                    <th className="w-[2rem] sm:w-[3rem]">GA</th>
                                </Tooltip>
                                <Tooltip title="失点">
                                    <th className="w-[2rem] sm:w-[3rem]">GC</th>
                                </Tooltip>
                                <Tooltip title="セーブ数">
                                    <th className="w-[2rem] sm:w-[3rem]">GS</th>
                                </Tooltip>
                                <Tooltip title="シュート数">
                                    <th className="w-[2rem] sm:w-[3rem]">TS</th>
                                </Tooltip>
                                <Tooltip title="枠内シュート">
                                    <th className="w-[2rem] sm:w-[3rem]">SO</th>
                                </Tooltip>
                                <Tooltip title="パス数">
                                    <th className="w-[2rem] sm:w-[3rem]">TP</th>
                                </Tooltip>
                                <Tooltip title="キーパス">
                                    <th className="w-[2rem] sm:w-[3rem]">KP</th>
                                </Tooltip>
                                <Tooltip title="パス成功">
                                    <th className="w-[2rem] sm:w-[3rem]">PA</th>
                                </Tooltip>
                                <Tooltip title="イエローカード">
                                    <th className="w-[2rem] sm:w-[3rem]">YC</th>
                                </Tooltip>
                                <Tooltip title="レッドカード">
                                    <th className="w-[2rem] sm:w-[3rem]">RC</th>
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
                                    <td className="w-[35rem] sm:w-[25rem]">
                                        <span className="flex items-center space-x-2 sm:ml-2">
                                            <img
                                                src={player.player.photo}
                                                alt="Player Photo"
                                                className="h-11 w-11 rounded-full"
                                            />
                                            <span
                                                className="text-[15px] text-white font-bold hover:underline"
                                                onClick={() =>
                                                    handlePlayerClick(
                                                        player.player.id,
                                                        maxSeason
                                                    )
                                                }
                                            >
                                                {player.player.name}
                                            </span>
                                        </span>
                                    </td>
                                    <td>
                                        {player.statistics[0]?.games.position ||
                                            0}
                                    </td>
                                    <td className="font-bold">
                                        <div
                                            className={`rounded-md ${getRatingColorClass(
                                                player.statistics[0]?.games
                                                    .rating || 0
                                            )}`}
                                        >
                                            {player.statistics[0]?.games
                                                .rating || 0}
                                        </div>
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
                        <PlayerStatsModal
                            playerId={playerId}
                            games={games}
                            maxSeason={maxSeason}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};
