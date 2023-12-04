import { useState, useEffect } from "react";

export const useScroll = () => {
    // 前回のスクロール位置と表示/非表示を管理
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        // 現在のスクロール位置を取得
        const currentScrollPos = window.scrollY;

        // スクロール方向を判定
        const isScrolledDown = prevScrollPos < currentScrollPos;

        // ページ上部からの距離が指定されたpx以下かどうかを判定
        const isTopReached = currentScrollPos <= 290;

        // 表示/非表示を決定し、状態を更新
        setVisible(!isTopReached || (isScrolledDown && currentScrollPos > 290));

        // 前回のスクロール位置を更新
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        handleScroll();

        // スクロールイベントリスナーを追加
        window.addEventListener("scroll", handleScroll);

        // コンポーネントがアンマウントされる際にイベントリスナーを削除
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    // 表示状態を返す
    return visible;
};
