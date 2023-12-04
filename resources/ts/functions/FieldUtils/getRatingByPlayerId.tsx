// 選手のIDと評価を取得する関数
export const getRatingByPlayerId = (data, playerId) => {
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
};
