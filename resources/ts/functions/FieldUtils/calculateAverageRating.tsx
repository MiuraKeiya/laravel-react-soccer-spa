// 選手評価数値の平均を計算する関数
export const calculateAverageRating = (ratings) => {
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
