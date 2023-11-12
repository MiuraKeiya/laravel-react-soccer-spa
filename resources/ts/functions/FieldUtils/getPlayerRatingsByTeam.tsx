/**
 * チームの選手の評価（レーティング）を取得する関数
 * @param {object} data - チームと選手のデータを含むデータオブジェクト
 * @param {boolean} isHome - チームがホームチームかどうかを示すフラグ (true: ホームチーム, false: アウェイチーム)
 * @returns {Array} チームの選手の評価（レーティング）リスト
 */
export const getPlayerRatingsByTeam = (data, isHome) => {
    // チームのインデックスを決定
    const teamIndex = isHome ? 0 : 1;

    // チームの選手データを取得
    const teamPlayersData = data.json_detail.players[teamIndex];

    // 選手の評価（レーティング）を格納するための配列
    const ratings = [];

    // 選手データを反復処理
    teamPlayersData.players.forEach((player) => {
        const playerRating = player.statistics[0]?.games.rating;

        // レーティングが null でないか確認
        if (playerRating !== null) {
            const numericRating = parseFloat(playerRating);

            // レーティングが数値であるか確認
            if (!isNaN(numericRating)) {
                ratings.push(numericRating);
            }
        }
    });

    return ratings;
};
