/**
 * 指定されたイベントタイプおよび詳細情報に基づいて、選手のIDリストを取得する関数
 * @param {object} data - イベントデータを含むデータオブジェクト
 * @param {number} playerId - 選手のID
 * @param {string} eventType - イベントのタイプ ("Goal", "Card", "subst", "Var" のいずれか)
 * @param {string} eventDetail - イベントの詳細情報 (詳細情報を無視する場合は undefined を指定)
 * @returns {Array} 選手のIDリスト
 */
export const getPlayerIdsByEvent = (data, playerId, eventType, eventDetail) => {
    // イベントデータをフィルタリング
    const events = data.json_detail.events.filter(
        (event) =>
            event.type === eventType &&
            (!eventDetail || event.detail === eventDetail)
    );

    // 選手のIDを格納するための配列
    const playerIds = [];

    // イベントを反復処理して選手のIDを収集
    events.forEach((event) => {
        if (event.player.id === playerId) {
            playerIds.push(event.player.id);
        }
    });

    return playerIds;
};
