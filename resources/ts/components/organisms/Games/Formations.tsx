export const Formations = ({ games }) => {
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
                "2:1": { x: 14, y: 15 }, // 左サイドバック!
                "3:2": { x: 25, y: 68 }, // 右MF!
                "3:1": { x: 25, y: 25 }, // 左MF!
                "4:3": { x: 38, y: 15 }, // 左W!
                "4:2": { x: 30, y: 45.5 }, // センターMF!
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
                "2:1": { x: 14, y: 16 }, // 左サイドバック
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
                "4:1": { x: 37, y: 45.5 }, // 右W
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
                "5:1": { x: 41.5, y: 45.5 }, // 左W!
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
            ? basePositions[formation][grid].x
            : fieldWidth - basePositions[formation][grid].x;

        const playerY = isHome
            ? basePositions[formation][grid].y
            : fieldHeight - basePositions[formation][grid].y;

        // レスポンシブ対応: フィールドサイズに合わせて位置を調整
        const responsiveX = (playerX / 100) * fieldWidth;
        const responsiveY = (playerY / 100) * fieldHeight;

        return { x: responsiveX, y: responsiveY };
    };

    const homePlayerElements = games[0].json_detail?.lineups[0].startXI.map(
        (player, index) => {
            const { x, y } = calculatePlayerPosition(
                games[0].json_detail.lineups[0].formation,
                true,
                player.player.grid
            );
            return (
                <div
                    key={index}
                    className="flex flex-col items-center"
                    style={{
                        position: "absolute",
                        left: `${x}%`,
                        top: `${y}%`,
                    }}
                >
                    <div className="bg-red-600 rounded-full text-white lg:h-[3.5rem] lg:w-[3.5rem] lg:text-[25px] h-6 w-6 font-bold flex items-center justify-center">
                        {player.player.number}
                    </div>
                    <p className="text-center w-[7rem] truncate hidden md:block font-semibold">
                        {player.player.name}
                    </p>
                </div>
            );
        }
    );

    const awayPlayerElements = games[0].json_detail?.lineups[1].startXI.map(
        (player, index) => {
            const { x, y } = calculatePlayerPosition(
                games[0].json_detail.lineups[1].formation,
                false,
                player.player.grid
            );
            return (
                <div
                    key={index}
                    className="flex flex-col items-center"
                    style={{
                        position: "absolute",
                        left: `${x}%`,
                        top: `${y}%`,
                    }}
                >
                    <div className="bg-blue-600 rounded-full text-white lg:h-[3.5rem] lg:w-[3.5rem] lg:text-[25px] h-6 w-6 font-bold flex items-center justify-center">
                        {player.player.number}
                    </div>
                    <p className="text-center w-[7rem] truncate hidden md:block font-semibold">
                        {player.player.name}
                    </p>
                </div>
            );
        }
    );
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
            {homePlayerElements}
            {awayPlayerElements}
        </div>
    );
};
