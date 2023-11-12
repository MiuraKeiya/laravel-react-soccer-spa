// 選手の評価に基づいて背景色を動的に設定する
export const getRatingColorClass = (rating) => {
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
