import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LoopIcon from "@mui/icons-material/Loop";

export const Formations = ({ games, loading }) => {
    const calculatePlayerPosition = (formation, isHome, grid) => {
        // フィールドの寸法に合わせて調整
        let fieldWidth, fieldHeight;

        if (isHome) {
            fieldWidth = 100;
            fieldHeight = 100;
        } else {
            fieldWidth = 95.5;
            fieldHeight = 94;
        }

        // フォーメーションごとの選手の基本位置情報
        const basePositions = {
            "4-2-3-1": {
                "1:1": { x: 4.5, y: 45.5 }, // GK!
                "2:4": { x: 14, y: 76 }, // 右サイドバック!
                "2:3": { x: 14, y: 60 }, // 右DF!
                "2:2": { x: 14, y: 32 }, // 左DF!
                "2:1": { x: 14, y: 13 }, // 左サイドバック!
                "3:2": { x: 25, y: 68 }, // 右MF!
                "3:1": { x: 25, y: 25 }, // 左MF!
                "4:3": { x: 38, y: 13 }, // 左W!
                "4:2": { x: 29, y: 45.5 }, // センターMF!
                "4:1": { x: 38, y: 76 }, // 右W!
                "5:1": { x: 40, y: 45.5 }, // FW
            },
            "4-3-3": {
                "1:1": { x: 4.5, y: 45.5 }, // GK!
                "2:4": { x: 14, y: 76 }, // 右サイドバック!
                "2:3": { x: 14, y: 60 }, // 右DF!
                "2:2": { x: 14, y: 32 }, // 左DF!
                "2:1": { x: 14, y: 15 }, // 左サイドバック!
                "3:3": { x: 25, y: 67 }, // 右MF!
                "3:2": { x: 25, y: 45.5 }, // MF!
                "3:1": { x: 25, y: 24 }, // 左MF!
                "4:3": { x: 40, y: 67 }, // 右W
                "4:2": { x: 40, y: 45.5 }, // FW!
                "4:1": { x: 40, y: 24 }, // 左W!
            },
            "5-4-1": {
                "1:1": { x: 4.5, y: 45.5 }, // GK
                "2:5": { x: 14, y: 76 }, // 右サイドバック
                "2:4": { x: 14, y: 60 }, // 右DF
                "2:3": { x: 14, y: 32 }, // 左DF
                "2:2": { x: 14, y: 45.5 }, // DF
                "2:1": { x: 14, y: 15 }, // 右サイドバック
                "3:4": { x: 27, y: 68 }, // 右MF
                "3:3": { x: 27, y: 54 }, // MF
                "3:2": { x: 27, y: 40 }, // MF
                "3:1": { x: 27, y: 24 }, // 左MF
                "4:1": { x: 39, y: 45.5 }, // FW
            },
            "4-4-2": {
                "1:1": { x: 4.5, y: 45.5 }, // GK
                "2:4": { x: 14, y: 76 }, // 右サイドバック
                "2:3": { x: 14, y: 60 }, // 右DF
                "2:2": { x: 14, y: 32 }, // 左DF
                "2:1": { x: 14, y: 16 }, // 左サイドバック
                "3:4": { x: 27, y: 76 }, // 右MF
                "3:3": { x: 27, y: 60 }, // MF
                "3:2": { x: 27, y: 32 }, // 左MF
                "3:1": { x: 27, y: 16 }, // 左W
                "4:2": { x: 40, y: 55 }, // 右FW
                "4:1": { x: 40, y: 36 }, // 左FW
            },
            "5-3-2": {
                "1:1": { x: 4.5, y: 45.5 }, // GK
                "2:5": { x: 14, y: 76 }, // 右サイドバック
                "2:4": { x: 14, y: 60 }, // 右DF
                "2:3": { x: 14, y: 45.5 }, // DF
                "2:2": { x: 14, y: 32 }, // DF
                "2:1": { x: 14, y: 13 }, // 左サイドバック
                "3:3": { x: 27, y: 69 }, // 右MF
                "3:2": { x: 27, y: 24 }, // 左MF
                "3:1": { x: 27, y: 45.5 }, // MF
                "4:2": { x: 40, y: 55 }, // 右FW
                "4:1": { x: 40, y: 36 }, // 左FW
            },
            "3-2-4-1": {
                "1:1": { x: 4.5, y: 45.5 }, // GK
                "2:3": { x: 14, y: 76 }, // 右DF
                "2:2": { x: 14, y: 16 }, // 左DF
                "2:1": { x: 14, y: 45.5 }, // DF
                "3:2": { x: 23, y: 66 }, // 右MF
                "3:1": { x: 23, y: 27 }, // 左MF
                "4:4": { x: 42, y: 81 }, // 右W!
                "4:3": { x: 42, y: 12 }, // MF
                "4:2": { x: 30, y: 54 }, // MF
                "4:1": { x: 30, y: 38 }, // MF
                "5:1": { x: 40, y: 45.5 }, // FW!
            },
            "3-4-1-2": {
                "1:1": { x: 4.5, y: 45.5 }, // GK
                "2:3": { x: 14, y: 76 }, // 右DF
                "2:2": { x: 14, y: 16 }, // 左DF
                "2:1": { x: 14, y: 45.5 }, // DF
                "3:4": { x: 28, y: 76 }, // 右MF
                "3:3": { x: 28, y: 16 }, // 左MF
                "3:2": { x: 25, y: 57 }, // 右W!
                "3:1": { x: 25, y: 35 }, // MF
                "4:1": { x: 32, y: 45.5 }, // MF
                "5:2": { x: 40, y: 56 }, // MF
                "5:1": { x: 40, y: 35 }, // FW
            },
            "3-4-2-1": {
                "1:1": { x: 4.5, y: 45.5 }, // GK
                "2:3": { x: 14, y: 76 }, // 右DF
                "2:2": { x: 14, y: 16 }, // 左DF
                "2:1": { x: 14, y: 45.5 }, // DF
                "3:4": { x: 29, y: 76 }, // 右MF
                "3:3": { x: 29, y: 16 }, // 左MF
                "3:2": { x: 22, y: 63 }, // 右W!
                "3:1": { x: 22, y: 30 }, // MF
                "4:2": { x: 31, y: 55 }, // MF
                "4:1": { x: 31, y: 39 }, // MF
                "5:1": { x: 41, y: 45.5 }, // FW
            },
            "3-3-3-1": {
                "1:1": { x: 4.5, y: 45.5 }, // GK
                "2:3": { x: 14, y: 76 }, // 右DF
                "2:2": { x: 14, y: 16 }, // 左DF
                "2:1": { x: 14, y: 45.5 }, // DF
                "3:3": { x: 23, y: 16 }, // 右MF
                "3:2": { x: 23, y: 76 }, // 左MF
                "3:1": { x: 23, y: 45.5 }, // 右W!
                "4:3": { x: 32, y: 27 }, // MF
                "4:2": { x: 32, y: 65 }, // MF
                "4:1": { x: 32, y: 45.5 }, // MF
                "5:1": { x: 42, y: 45.5 }, // FW
            },
            "3-4-3": {
                "1:1": { x: 4.5, y: 45.5 }, // GK
                "2:3": { x: 14, y: 76 }, // 右DF
                "2:2": { x: 14, y: 45.5 }, // 左DF
                "2:1": { x: 14, y: 16 }, // DF
                "3:4": { x: 28, y: 76 }, // 右MF
                "3:3": { x: 28, y: 57 }, // 左MF
                "3:2": { x: 28, y: 35 }, // 右W!
                "3:1": { x: 28, y: 16 }, // MF
                "4:3": { x: 40, y: 67 }, // 右W
                "4:2": { x: 40, y: 45.5 }, // FW!
                "4:1": { x: 40, y: 24 }, // 左W!
            },
            "4-3-1-2": {
                "1:1": { x: 4.5, y: 45.5 }, // GK
                "2:4": { x: 14, y: 76 }, // 右サイドバック
                "2:3": { x: 14, y: 60 }, // 右DF
                "2:2": { x: 14, y: 32 }, // 左DF
                "2:1": { x: 14, y: 16 }, // 左サイドバック
                "3:3": { x: 25, y: 24 }, // 右MF!
                "3:2": { x: 25, y: 67 }, // MF!
                "3:1": { x: 25, y: 45.5 }, // 左MF!
                "4:1": { x: 38, y: 45.5 }, // 右W
                "5:2": { x: 40, y: 76 }, // FW!
                "5:1": { x: 40, y: 16 }, // 左W!
            },
            "4-1-4-1": {
                "1:1": { x: 4.5, y: 45.5 }, // GK
                "2:4": { x: 14, y: 76 }, // 右サイドバック
                "2:3": { x: 14, y: 60 }, // 右DF
                "2:2": { x: 14, y: 32 }, // 左DF
                "2:1": { x: 14, y: 16 }, // 左サイドバック
                "3:1": { x: 24, y: 45.5 }, // 右MF!
                "4:4": { x: 33, y: 76 }, // MF!
                "4:3": { x: 33, y: 32 }, // 左MF!
                "4:2": { x: 33, y: 60 }, // 右W
                "4:1": { x: 33, y: 16 }, // FW!
                "5:1": { x: 39, y: 45.5 }, // 左W!
            },
            "3-1-4-2": {
                "1:1": { x: 4.5, y: 45.5 }, // GK
                "2:3": { x: 14, y: 70 }, // 右サイドバック
                "2:2": { x: 14, y: 45.5 }, // 右DF
                "2:1": { x: 14, y: 19 }, // 左DF
                "3:1": { x: 23, y: 45.5 }, // 左サイドバック
                "4:4": { x: 31, y: 76 }, // 右MF!
                "4:3": { x: 31, y: 55 }, // MF!
                "4:2": { x: 31, y: 35 }, // 左MF!
                "4:1": { x: 31, y: 12.5 }, // 右W
                "5:2": { x: 40, y: 26 }, // FW!
                "5:1": { x: 40, y: 63 }, // 左W!
            },
        };

        // 選手がhomeの場合、x座標はそのまま、awayの場合はフィールド幅から引く
        const playerX = isHome
            ? basePositions[formation]
                ? basePositions[formation][grid].x
                : basePositions["4-2-3-1"][grid].x
            : fieldWidth -
              (basePositions[formation]
                  ? basePositions[formation][grid].x
                  : basePositions["4-2-3-1"][grid].x);

        const playerY = isHome
            ? basePositions[formation]
                ? basePositions[formation][grid].y
                : basePositions["4-2-3-1"][grid].y
            : fieldHeight -
              (basePositions[formation]
                  ? basePositions[formation][grid].y
                  : basePositions["4-2-3-1"][grid].y);

        // レスポンシブ対応: フィールドサイズに合わせて位置を調整
        const responsiveX = (playerX / 100) * fieldWidth;
        const responsiveY = (playerY / 100) * fieldHeight;

        return { x: responsiveX, y: responsiveY };
    };

    // 選手評価数値の平均を計算する関数
    const calculateAverageRating = (ratings) => {
        console.log(ratings);
        // 評価がない場合、デフォルト値 0 を返す
        if (ratings.length === 0) {
            return 0;
        }

        // 評価の合計を計算
        const sum = ratings.reduce((acc, rating) => acc + rating, 0);

        // 平均評価を計算
        const average = sum / ratings.length;

        // 小数点以下を一の位までの数値に丸める
        return parseFloat(average.toFixed(1));
    };

    // 選手の評価に基づいて背景色を動的に設定する
    const getRatingColorClass = (rating) => {
        if (rating >= 8) {
            return "bg-[#FF00FF]"; // 評価が8以上の場合、緑色の背景
        } else if (rating >= 7.6) {
            return "bg-green-400"; // 評価が7.6以上の場合、より明るい緑色の背景
        } else if (rating >= 7) {
            return "bg-[#FF6928]"; // 評価が7以上の場合、黄色の背景
        } else if (rating >= 6.6) {
            return "bg-[#7B3CFF]"; // 評価が6.6以上の場合、より明るい黄色の背景
        } else if (rating >= 6) {
            return "bg-[#555555]"; // 評価が6以上の場合、オレンジ色の背景
        } else if (rating >= 5) {
            return "bg-red-500"; // 評価が5以上の場合、赤色の背景
        } else {
            return "bg-[#800000]"; // それ以外の場合
        }
    };

    const createPlayerElement = (
        player,
        x,
        y,
        key,
        rating,
        goal,
        card,
        subst,
        redcard,
        varIds,
        teamColor,
        numberColor,
        teamColorForGK,
        numberColorForGK
    ) => {
        const [isFlipped, setIsFlipped] = useState(false);

        const handleMouseEnter = () => {
            setIsFlipped(true);
        };

        const handleMouseLeave = () => {
            setIsFlipped(false);
        };

        const ratingColorClass = getRatingColorClass(rating);

        const shouldShowGoalIcon = goal && goal.includes(player.player.id);
        const shouldShowYellowCardIcon =
            card && card.includes(player.player.id);
        const shouldShowSubstIcon = subst && subst.includes(player.player.id);
        const shouldShowRedCardIcon =
            redcard && redcard.includes(player.player.id);
        const shouldShowVarIcon = varIds && varIds.includes(player.player.id);

        return (
            <div
                key={key}
                className="flex flex-col items-center space-y-0.5"
                style={{ position: "absolute", left: `${x}%`, top: `${y}%` }}
            >
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div
                        style={{
                            backgroundColor:
                                player.player.pos === "G"
                                    ? `#${teamColorForGK}`
                                    : `#${teamColor}`,
                            color:
                                player.player.pos === "G"
                                    ? `#${numberColorForGK}`
                                    : `#${numberColor}`,
                        }}
                        className={`rounded-full lg:h-[3.5rem] lg:w-[3.5rem] lg:text-[25px] md:h-[2.5rem] md:w-[2.5rem] md:text-[21px] h-6 w-6 font-bold flex items-center justify-center cursor-pointer`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {player.player.number}
                    </div>
                    <img
                        src={`https://media-3.api-sports.io/football/players/${player.player.id}.png`}
                        className="rounded-full lg:h-[3.5rem] lg:w-[3.5rem] lg:text-[25px] md:h-[2.5rem] md:w-[2.5rem] md:text-[21px] h-6 w-6 cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                </ReactCardFlip>
                <div className="relative">
                    <div className="text-center lg:w-[6.5rem] md:w-[4rem] hidden md:block font-semibold text-white bg-[#111931] rounded-full text-[14px]">
                        <p className="truncate px-2">{player.player.name}</p>
                    </div>
                    <div
                        className={`text-center w-[2rem] hidden lg:block font-semibold text-white rounded-lg text-[14px] absolute left-[4rem] bottom-5 ${ratingColorClass}`}
                    >
                        <p>{rating}</p>
                    </div>
                    {shouldShowGoalIcon && (
                        <div className="w-[1.5rem] h-[1.5rem] hidden lg:flex text-white bg-black rounded-lg border absolute right-[4.6rem] bottom-5 justify-center items-center">
                            <SportsSoccerIcon />
                        </div>
                    )}
                    {shouldShowYellowCardIcon && !shouldShowRedCardIcon && (
                        <div className="w-[1.5rem] h-[1.5rem] hidden lg:flex text-white bg-black rounded-lg border items-center justify-center absolute right-[4.6rem] bottom-[2.2rem]">
                            <div className="border rounded h-4 w-3 bg-yellow-300"></div>
                        </div>
                    )}
                    {shouldShowSubstIcon && (
                        <div className="w-[1.5rem] h-[1.5rem] hidden lg:flex text-white bg-black rounded-lg border items-center justify-center absolute right-[4.6rem] bottom-[3.2rem]">
                            <LoopIcon />
                        </div>
                    )}
                    {shouldShowRedCardIcon && (
                        <div className="w-[1.5rem] h-[1.5rem] hidden lg:flex text-white bg-black rounded-lg border items-center justify-center absolute right-[4.6rem] bottom-[2.1rem]">
                            <div className="border rounded h-4 w-3 bg-red-600"></div>
                        </div>
                    )}
                    {shouldShowVarIcon && (
                        <div className="w-[1.5rem] h-[1.5rem] hidden lg:flex text-white bg-black rounded-lg border items-center justify-center absolute left-[4.3rem] bottom-[3rem]">
                            <div className="flex justify-center items-center text-[8px] border border-[#FFFFFF] rounded h-4 w-5">
                                VAR
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    // 選手のIDと評価を取得する関数
    function getRatingByPlayerId(data, playerId) {
        // JSON内の選手情報を取得
        const playersData = data.json_detail.players;

        // 評価を格納するための配列
        const ratings = [];

        // 選手情報を反復処理して評価を収集
        playersData.forEach((playerData) => {
            playerData.players.forEach((player) => {
                const playerRating = player.statistics[0]?.games.rating;
                ratings.push({ id: player.player.id, rating: playerRating });
            });
        });

        // 指定された選手IDに対応する評価を見つけて返す
        const rating = ratings.find((entry) => entry.id === playerId)?.rating;

        return rating;
    }

    // ゴールを決めた選手のIDリストを取得する関数
    function getGoalScorerIdsByPlayerId(data, playerId) {
        // ゴールイベントのデータを取得
        const goalEvents = data.json_detail.events.filter(
            (event) => event.type === "Goal"
        );

        // ゴールを決めた選手のIDを格納するための配列
        const goalScorerIds = [];

        // ゴールイベントを反復処理してゴールを決めた選手のIDを収集
        goalEvents.forEach((event) => {
            if (event.player.id === playerId) {
                // ゴールを決めた選手のIDを配列に追加
                goalScorerIds.push(event.player.id);
            }
        });

        return goalScorerIds;
    }

    // イエローカードを貰った選手のIDリストを取得する関数
    function getYellowCardIdsByPlayerId(data, playerId) {
        // イエローカードイベントのデータを取得
        const cardEvents = data.json_detail.events.filter(
            (event) => event.type === "Card" && event.detail === "Yellow Card"
        );

        // イエローカードを貰った選手のIDを格納するための配列
        const yellowcardIds = [];

        // ゴールイベントを反復処理してゴールを決めた選手のIDを収集
        cardEvents.forEach((event) => {
            if (event.player.id === playerId) {
                // ゴールを決めた選手のIDを配列に追加
                yellowcardIds.push(event.player.id);
            }
        });

        return yellowcardIds;
    }

    // 交代した選手のIDリストを取得する関数
    function getSubstByPlayerId(data, playerId) {
        // 選手交代イベントのデータを取得
        const substEvents = data.json_detail.events.filter(
            (event) => event.type === "subst"
        );

        // 交代した選手のIDを格納するための配列
        const substIds = [];

        // ゴールイベントを反復処理してゴールを決めた選手のIDを収集
        substEvents.forEach((event) => {
            if (event.player.id === playerId) {
                // ゴールを決めた選手のIDを配列に追加
                substIds.push(event.player.id);
            }
        });

        return substIds;
    }

    // レッドカードを貰った選手のIDリストを取得する関数
    function getRedCardIdsByPlayerId(data, playerId) {
        // レッドカードイベントのデータを取得
        const redcardEvents = data.json_detail.events.filter(
            (event) => event.type === "Card" && event.detail === "Red Card"
        );

        // レッドカードを貰った選手のIDを格納するための配列
        const redcardIds = [];

        // ゴールイベントを反復処理してゴールを決めた選手のIDを収集
        redcardEvents.forEach((event) => {
            if (event.player.id === playerId) {
                // ゴールを決めた選手のIDを配列に追加
                redcardIds.push(event.player.id);
            }
        });

        return redcardIds;
    }

    // VARを貰った選手のIDリストを取得する関数
    function getVarIdsByPlayerId(data, playerId) {
        // VARイベントのデータを取得
        const varEvents = data.json_detail.events.filter(
            (event) => event.type === "Var"
        );

        // VARを貰った選手のIDを格納するための配列
        const varIds = [];

        // ゴールイベントを反復処理してゴールを決めた選手のIDを収集
        varEvents.forEach((event) => {
            if (event.player.id === playerId) {
                // ゴールを決めた選手のIDを配列に追加
                varIds.push(event.player.id);
            }
        });

        return varIds;
    }

    const createPlayerElementsForLineup = (lineup, isHome) => {
        const formation = lineup.formation;
        const teamColors = lineup.team.colors;

        const playerElements = lineup.startXI.map((player, index) => {
            const { x, y } = calculatePlayerPosition(
                formation,
                isHome,
                player.player.grid
            );
            const playerId = player.player.id;
            const rating = getRatingByPlayerId(games[0], playerId);
            const goalScorerIds = getGoalScorerIdsByPlayerId(
                games[0],
                playerId
            );
            const yellowcardIds = getYellowCardIdsByPlayerId(
                games[0],
                playerId
            );
            const substIds = getSubstByPlayerId(games[0], playerId);
            const redcardIds = getRedCardIdsByPlayerId(games[0], playerId);
            const varIds = getVarIdsByPlayerId(games[0], playerId);

            const teamColor = teamColors.player.primary;
            const numberColor = teamColors.player.number;
            const teamforGKColor = teamColors.goalkeeper.primary;
            const numberforGKColor = teamColors.goalkeeper.number;

            return createPlayerElement(
                player,
                x,
                y,
                index,
                rating,
                goalScorerIds,
                yellowcardIds,
                substIds,
                redcardIds,
                varIds,
                teamColor,
                numberColor,
                teamforGKColor,
                numberforGKColor
            );
        });

        return playerElements;
    };

    const homePlayerElements = createPlayerElementsForLineup(
        games[0].json_detail.lineups[0],
        true
    );
    const awayPlayerElements = createPlayerElementsForLineup(
        games[0].json_detail.lineups[1],
        false
    );

    const getPlayerRatingsByTeam = (data, isHome) => {
        const teamIndex = isHome ? 0 : 1;
        const teamPlayersData = data.json_detail.players[teamIndex];

        const ratings = [];

        teamPlayersData.players.forEach((player) => {
            const playerRating = player.statistics[0]?.games.rating;
            if (playerRating !== null) {
                const numericRating = parseFloat(playerRating);
                if (!isNaN(numericRating)) {
                    ratings.push(numericRating);
                }
            }
        });

        return ratings;
    };
    // 選手の評価を取得
    const homePlayerRatings = getPlayerRatingsByTeam(games[0], true);
    const awayPlayerRatings = getPlayerRatingsByTeam(games[0], false);

    // 平均評価を計算
    const averageHomeRating = calculateAverageRating(homePlayerRatings);
    const averageAwayRating = calculateAverageRating(awayPlayerRatings);

    return (
        <div
            className="mt-2 pb-3"
            style={{ position: "relative", width: "100%" }}
        >
            <img
                src="/images/soccer_field.png"
                alt="Soccer Field"
                className="h-full w-full"
            />
            <div className="absolute top-0 right-0 p-2 bg-[#1d2233] text-white font-bold md:text-[20px] text-[11px] lg:w-[7rem] flex items-center justify-center h-[1rem] md:h-[2.9rem]">
                {games[0]?.json_detail?.lineups[1]?.formation}
            </div>
            <div
                className={`absolute top-0 right-[8rem] p-2 items-center space-x-1 hidden lg:flex ${getRatingColorClass(
                    averageAwayRating
                )}
                )} text-white font-bold md:text-[20px] text-[12px]`}
            >
                <p className="text-[13px]">平均評価</p>
                <p>{averageAwayRating}</p>
            </div>
            <div
                className={`absolute top-0 left-[8rem] p-2 items-center space-x-1 hidden lg:flex ${getRatingColorClass(
                    averageHomeRating
                )} text-white font-bold md:text-[20px] text-[12px]`}
            >
                <p className="text-[13px]">平均評価</p>
                <p>{averageHomeRating}</p>
            </div>
            <div className="absolute top-0 left-0 p-2 bg-[#1d2233] text-white font-bold md:text-[20px] text-[11px] lg:w-[7rem] flex items-center justify-center h-[1rem] md:h-[2.9rem]">
                {games[0]?.json_detail?.lineups[0]?.formation}
            </div>
            {homePlayerElements}
            {awayPlayerElements}
        </div>
    );
};
