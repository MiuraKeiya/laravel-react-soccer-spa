import { useState } from "react";
import { PositionPieCharts } from "./PositionPieCharts";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";
import { getRatingColorClass } from "../../../../functions/FieldUtils/getRatingColorClass";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { BoxLoading } from "../Loading/BoxLoading";
import { ListLoading } from "../Loading/ListLoading";
import { imageUrl } from "../../../../functions/Utils";

export const Squad = ({ squad, loading, maxSeason }) => {
    const navigate = useNavigate();

    // 選手詳細ページへ遷移
    const handleClick = (playerId, maxSeason) => {
        navigate(`/player/${playerId}/season/${maxSeason}`);
    };

    const [isInnerCircleVisibleBox, setIsInnerCircleVisibleBox] =
        useState(true);
    const [isInnerCircleVisibleList, setIsInnerCircleVisibleList] =
        useState(false);

    const toggleInnerCircleBox = () => {
        if (!isInnerCircleVisibleBox) {
            setIsInnerCircleVisibleBox(true);
            setIsInnerCircleVisibleList(false);
        }
    };

    const toggleInnerCircleList = () => {
        if (!isInnerCircleVisibleList) {
            setIsInnerCircleVisibleList(true);
            setIsInnerCircleVisibleBox(false);
        }
    };

    // ポジションごとの優先度を指定
    const positionPriority = {
        Attacker: 1,
        Midfielder: 2,
        Defender: 3,
        Goalkeeper: 4,
    };

    // squadをポジションごとにソート
    const sortedSquad = squad.sort((a, b) => {
        const positionA = a.json_statistics.statistics[0]?.games.position;
        const positionB = b.json_statistics.statistics[0]?.games.position;

        // nullの場合は後ろにソートされるようにする
        if (positionA === null && positionB === null) {
            return 0;
        } else if (positionA === null) {
            return 1;
        } else if (positionB === null) {
            return -1;
        }

        // それ以外の場合は通常のソートを行う
        return positionPriority[positionA] - positionPriority[positionB];
    });

    const positionColors = {
        Attacker: "text-[#E73B3B] font-semibold",
        Midfielder: "text-[#46C252] font-semibold",
        Defender: "text-[#7A84FF] font-semibold",
        Goalkeeper: "text-[#E8B345] font-semibold",
    };

    return (
        <div className="bg-[#1d2233] mt-2 rounded overflow-x-auto">
            <div className="text-white flex items-center pl-4 space-x-2 mt-3 mb-3 justify-between">
                <div className="flex items-center space-x-2">
                    <PeopleIcon />
                    <h1 className="font-bold text-[20px]">在籍選手</h1>
                </div>
                <div className="flex sm:space-x-10 space-x-3">
                    <div className="flex space-x-4 items-center">
                        <div
                            className="w-[1.5rem] h-[1.5rem] border-2 border-[#7A84FF] rounded-full flex items-center justify-center cursor-pointer relative bg-[#1d2233]"
                            onClick={toggleInnerCircleBox}
                        >
                            {isInnerCircleVisibleBox && (
                                <div className="w-[0.95rem] h-[0.95rem] bg-[#7A84FF] rounded-full absolute"></div>
                            )}
                        </div>
                        <p className="text-[14px] font-semibold text-[#C8CDCD]">
                            ボックス
                        </p>
                    </div>
                    <div className="flex space-x-4 items-center pr-4">
                        <div
                            className="w-[1.5rem] h-[1.5rem] border-2 border-[#7A84FF] rounded-full flex items-center justify-center cursor-pointer relative bg-[#1d2233]"
                            onClick={toggleInnerCircleList}
                        >
                            {isInnerCircleVisibleList && (
                                <div className="w-[0.95rem] h-[0.95rem] bg-[#7A84FF] rounded-full absolute"></div>
                            )}
                        </div>
                        <p className="text-[14px] font-semibold text-[#C8CDCD]">
                            リスト
                        </p>
                    </div>
                </div>
            </div>
            {/** リスト */}
            {isInnerCircleVisibleList && (
                <div className="text-gray-300 mx-3 mb-3">
                    {loading ? (
                        <ListLoading />
                    ) : (
                        <>
                            <div className="mx-3 flex sm:items-center sm:space-x-3 sm:flex-row flex-col">
                                <h1 className="font-semibold">
                                    ポジション統計
                                </h1>
                                <div className="flex items-center space-x-2 text-[12px] bg-[#10161c] rounded-lg py-2 px-2 w-[24.7rem] sm:mt-0 mt-2">
                                    <InfoOutlinedIcon />
                                    <p>
                                        チーム全体の人数に対する各ポジションの割合を示しています。
                                    </p>
                                </div>
                            </div>
                            <PositionPieCharts squad={squad} />
                            <table
                                style={{
                                    backgroundColor: "rgba(14, 17, 21, 0.4)",
                                    border: "1px solid rgba(255, 255, 255, 0.15)",
                                }}
                                className="w-full"
                            >
                                <thead>
                                    <tr>
                                        <th
                                            style={{
                                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                                padding: "10px",
                                            }}
                                            className="text-left"
                                        >
                                            <div className="ml-2">選手</div>
                                        </th>
                                        <th
                                            style={{
                                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                                padding: "10px",
                                            }}
                                        >
                                            ポジション
                                        </th>
                                        <th
                                            style={{
                                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                                padding: "10px",
                                            }}
                                        >
                                            年齢
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedSquad.map((player, index) => (
                                        <tr key={index}>
                                            <td
                                                style={{
                                                    border: "1px solid rgba(255, 255, 255, 0.15)",
                                                    padding: "8px",
                                                }}
                                                className="hover:bg-slate-800 cursor-pointer transition duration-300 sm:w-[40rem] w-[10rem]"
                                                onClick={() =>
                                                    handleClick(
                                                        player.json_statistics
                                                            .player.id,
                                                        maxSeason
                                                    )
                                                }
                                            >
                                                <div className="ml-2 truncate">
                                                    {
                                                        player.json_statistics
                                                            .player.name
                                                    }
                                                </div>
                                            </td>
                                            <td
                                                className={`${
                                                    positionColors[
                                                        player.json_statistics
                                                            .statistics[0].games
                                                            .position
                                                    ]
                                                } p-2 text-center`}
                                                style={{
                                                    border: "1px solid rgba(255, 255, 255, 0.15)",
                                                    padding: "8px",
                                                }}
                                            >
                                                {
                                                    player.json_statistics
                                                        .statistics[0].games
                                                        .position
                                                }
                                            </td>
                                            <td
                                                style={{
                                                    border: "1px solid rgba(255, 255, 255, 0.15)",
                                                    padding: "8px",
                                                }}
                                                className="text-center"
                                            >
                                                {
                                                    player.json_statistics
                                                        .player.age
                                                }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )}
                </div>
            )}
            {/** ボックス */}
            {isInnerCircleVisibleBox && (
                <div className="mx-3 my-3">
                    {loading ? (
                        <BoxLoading />
                    ) : (
                        <>
                            <div className="text-[12px] text-[#C8CDCD] flex items-center space-x-2 bg-[#10161c] rounded-lg py-2 px-2 mt-3 mb-3 sm:w-[30rem]">
                                <p>
                                    <InfoOutlinedIcon />
                                </p>
                                <p>
                                    完全な選手のプロフィールを確認したい場合はカードをクリックしてください。
                                </p>
                            </div>
                            <div className="pb-2">
                                <span className="text-[#E73B3B] font-semibold">
                                    フォワード
                                </span>
                            </div>
                            <div className="flex flex-wrap">
                                {squad.map((player, index) => (
                                    <div key={index}>
                                        {player.json_statistics.statistics[0]
                                            .games.position === "Attacker" && (
                                            <>
                                                <div
                                                    className="rounded-t-lg h-[9rem] w-[9rem] flex items-center justify-center mr-2 cursor-pointer"
                                                    style={{
                                                        backgroundColor:
                                                            "rgba(14, 17, 21, 0.4)",
                                                    }}
                                                    onClick={() =>
                                                        handleClick(
                                                            player
                                                                .json_statistics
                                                                .player.id,
                                                            maxSeason
                                                        )
                                                    }
                                                >
                                                    <div className="flex flex-col items-center space-y-5">
                                                        <div className="relative">
                                                            <img
                                                                src={imageUrl(
                                                                    "players",
                                                                    player
                                                                        .json_statistics
                                                                        .player
                                                                        .id,
                                                                    "png"
                                                                )}
                                                                className="w-[4.5rem] h-[4.5rem] rounded-full"
                                                            />
                                                            <div
                                                                className={`absolute left-12 bottom-0 flex items-center justify-center ${getRatingColorClass(
                                                                    player
                                                                        .json_statistics
                                                                        .statistics[0]
                                                                        .games
                                                                        .rating !==
                                                                        null
                                                                        ? parseFloat(
                                                                              player
                                                                                  .json_statistics
                                                                                  .statistics[0]
                                                                                  .games
                                                                                  .rating
                                                                          ).toFixed(
                                                                              1
                                                                          )
                                                                        : "0"
                                                                )} rounded-lg h-[1.2rem] w-[2rem]`}
                                                            >
                                                                <p className="text-black font-semibold text-[13px]">
                                                                    {player
                                                                        .json_statistics
                                                                        .statistics[0]
                                                                        .games
                                                                        .rating !==
                                                                    null
                                                                        ? parseFloat(
                                                                              player
                                                                                  .json_statistics
                                                                                  .statistics[0]
                                                                                  .games
                                                                                  .rating
                                                                          ).toFixed(
                                                                              1
                                                                          )
                                                                        : "0"}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="w-[8rem] text-center">
                                                            <p className="text-gray-300 font-semibold text-[14px] truncate">
                                                                {
                                                                    player
                                                                        .json_statistics
                                                                        .player
                                                                        .name
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-[9rem] h-[2rem] bg-[#10161c] rounded-b-lg mb-2">
                                                    <div className="flex justify-between mx-3 py-1">
                                                        <div>
                                                            <p className="text-[#E73B3B] font-semibold">
                                                                F
                                                            </p>
                                                        </div>
                                                        <div className="text-gray-300 uppercase">
                                                            {player.json_statistics.player.birth.country.slice(
                                                                0,
                                                                3
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="pb-2 pt-4">
                                <span className="text-[#46C252] font-semibold">
                                    ミッドフィルダー
                                </span>
                            </div>
                            <div className="flex flex-wrap">
                                {squad.map((player, index) => (
                                    <div key={index}>
                                        {player.json_statistics.statistics[0]
                                            .games.position ===
                                            "Midfielder" && (
                                            <>
                                                <div
                                                    className="rounded-t-lg h-[9rem] w-[9rem] flex items-center justify-center mr-2 cursor-pointer"
                                                    style={{
                                                        backgroundColor:
                                                            "rgba(14, 17, 21, 0.4)",
                                                    }}
                                                    onClick={() =>
                                                        handleClick(
                                                            player
                                                                .json_statistics
                                                                .player.id,
                                                            maxSeason
                                                        )
                                                    }
                                                >
                                                    <div className="flex flex-col items-center space-y-5">
                                                        <div className="relative">
                                                            <img
                                                                src={imageUrl(
                                                                    "players",
                                                                    player
                                                                        .json_statistics
                                                                        .player
                                                                        .id,
                                                                    "png"
                                                                )}
                                                                className="w-[4.5rem] h-[4.5rem] rounded-full"
                                                            />
                                                            <div
                                                                className={`absolute left-12 bottom-0 flex items-center justify-center ${getRatingColorClass(
                                                                    player
                                                                        .json_statistics
                                                                        .statistics[0]
                                                                        .games
                                                                        .rating !==
                                                                        null
                                                                        ? parseFloat(
                                                                              player
                                                                                  .json_statistics
                                                                                  .statistics[0]
                                                                                  .games
                                                                                  .rating
                                                                          ).toFixed(
                                                                              1
                                                                          )
                                                                        : "0"
                                                                )} rounded-lg h-[1.2rem] w-[2rem]`}
                                                            >
                                                                <p className="text-black font-semibold text-[13px]">
                                                                    {player
                                                                        .json_statistics
                                                                        .statistics[0]
                                                                        .games
                                                                        .rating !==
                                                                    null
                                                                        ? parseFloat(
                                                                              player
                                                                                  .json_statistics
                                                                                  .statistics[0]
                                                                                  .games
                                                                                  .rating
                                                                          ).toFixed(
                                                                              1
                                                                          )
                                                                        : "0"}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="w-[8rem] text-center">
                                                            <p className="text-gray-300 font-semibold text-[14px] truncate">
                                                                {
                                                                    player
                                                                        .json_statistics
                                                                        .player
                                                                        .name
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-[9rem] h-[2rem] bg-[#10161c] rounded-b-lg mb-2">
                                                    <div className="flex justify-between mx-3 py-1">
                                                        <div>
                                                            <p className="text-[#46C252] font-semibold">
                                                                M
                                                            </p>
                                                        </div>
                                                        <div className="text-gray-300 uppercase">
                                                            {player.json_statistics.player.birth.country.slice(
                                                                0,
                                                                3
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="pb-2 pt-4">
                                <span className="text-[#7A84FF] font-semibold">
                                    ディフェンダー
                                </span>
                            </div>
                            <div className="flex flex-wrap">
                                {squad.map((player, index) => (
                                    <div key={index}>
                                        {player.json_statistics.statistics[0]
                                            .games.position === "Defender" && (
                                            <>
                                                <div
                                                    className="rounded-t-lg h-[9rem] w-[9rem] flex items-center justify-center mr-2 cursor-pointer"
                                                    style={{
                                                        backgroundColor:
                                                            "rgba(14, 17, 21, 0.4)",
                                                    }}
                                                    onClick={() =>
                                                        handleClick(
                                                            player
                                                                .json_statistics
                                                                .player.id,
                                                            maxSeason
                                                        )
                                                    }
                                                >
                                                    <div className="flex flex-col items-center space-y-5">
                                                        <div className="relative">
                                                            <img
                                                                src={imageUrl(
                                                                    "players",
                                                                    player
                                                                        .json_statistics
                                                                        .player
                                                                        .id,
                                                                    "png"
                                                                )}
                                                                className="w-[4.5rem] h-[4.5rem] rounded-full"
                                                            />
                                                            <div
                                                                className={`absolute left-12 bottom-0 flex items-center justify-center ${getRatingColorClass(
                                                                    player
                                                                        .json_statistics
                                                                        .statistics[0]
                                                                        .games
                                                                        .rating !==
                                                                        null
                                                                        ? parseFloat(
                                                                              player
                                                                                  .json_statistics
                                                                                  .statistics[0]
                                                                                  .games
                                                                                  .rating
                                                                          ).toFixed(
                                                                              1
                                                                          )
                                                                        : "0"
                                                                )} rounded-lg h-[1.2rem] w-[2rem]`}
                                                            >
                                                                <p className="text-black font-semibold text-[13px]">
                                                                    {player
                                                                        .json_statistics
                                                                        .statistics[0]
                                                                        .games
                                                                        .rating !==
                                                                    null
                                                                        ? parseFloat(
                                                                              player
                                                                                  .json_statistics
                                                                                  .statistics[0]
                                                                                  .games
                                                                                  .rating
                                                                          ).toFixed(
                                                                              1
                                                                          )
                                                                        : "0"}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="w-[8rem] text-center">
                                                            <p className="text-gray-300 font-semibold text-[14px] truncate">
                                                                {
                                                                    player
                                                                        .json_statistics
                                                                        .player
                                                                        .name
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-[9rem] h-[2rem] bg-[#10161c] rounded-b-lg mb-2">
                                                    <div className="flex justify-between mx-3 py-1">
                                                        <div>
                                                            <p className="text-[#7A84FF] font-semibold">
                                                                D
                                                            </p>
                                                        </div>
                                                        <div className="text-gray-300 uppercase">
                                                            {player.json_statistics.player.birth.country.slice(
                                                                0,
                                                                3
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="pb-2 pt-4">
                                <span className="text-[#E8B345] font-semibold">
                                    ゴールキーパー
                                </span>
                            </div>
                            <div className="flex flex-wrap">
                                {squad.map((player, index) => (
                                    <div key={index}>
                                        {player.json_statistics.statistics[0]
                                            .games.position ===
                                            "Goalkeeper" && (
                                            <>
                                                <div
                                                    className="rounded-t-lg h-[9rem] w-[9rem] flex items-center justify-center mr-2 cursor-pointer"
                                                    style={{
                                                        backgroundColor:
                                                            "rgba(14, 17, 21, 0.4)",
                                                    }}
                                                    onClick={() =>
                                                        handleClick(
                                                            player
                                                                .json_statistics
                                                                .player.id,
                                                            maxSeason
                                                        )
                                                    }
                                                >
                                                    <div className="flex flex-col items-center space-y-5">
                                                        <div className="relative">
                                                            <img
                                                                src={imageUrl(
                                                                    "players",
                                                                    player
                                                                        .json_statistics
                                                                        .player
                                                                        .id,
                                                                    "png"
                                                                )}
                                                                className="w-[4.5rem] h-[4.5rem] rounded-full"
                                                            />
                                                            <div
                                                                className={`absolute left-12 bottom-0 flex items-center justify-center ${getRatingColorClass(
                                                                    player
                                                                        .json_statistics
                                                                        .statistics[0]
                                                                        .games
                                                                        .rating !==
                                                                        null
                                                                        ? parseFloat(
                                                                              player
                                                                                  .json_statistics
                                                                                  .statistics[0]
                                                                                  .games
                                                                                  .rating
                                                                          ).toFixed(
                                                                              1
                                                                          )
                                                                        : "0"
                                                                )} rounded-lg h-[1.2rem] w-[2rem]`}
                                                            >
                                                                <p className="text-black font-semibold text-[13px]">
                                                                    {player
                                                                        .json_statistics
                                                                        .statistics[0]
                                                                        .games
                                                                        .rating !==
                                                                    null
                                                                        ? parseFloat(
                                                                              player
                                                                                  .json_statistics
                                                                                  .statistics[0]
                                                                                  .games
                                                                                  .rating
                                                                          ).toFixed(
                                                                              1
                                                                          )
                                                                        : "0"}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="w-[8rem] text-center">
                                                            <p className="text-gray-300 font-semibold text-[14px] truncate">
                                                                {
                                                                    player
                                                                        .json_statistics
                                                                        .player
                                                                        .name
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-[9rem] h-[2rem] bg-[#10161c] rounded-b-lg mb-2">
                                                    <div className="flex justify-between mx-3 py-1">
                                                        <div>
                                                            <p className="text-[#E8B345] font-semibold">
                                                                G
                                                            </p>
                                                        </div>
                                                        <div className="text-gray-300 uppercase">
                                                            {player.json_statistics.player.birth.country.slice(
                                                                0,
                                                                3
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
