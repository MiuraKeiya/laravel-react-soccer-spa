import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const ScrollTopButton = () => {
    // 表示切り替えフラグ
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    // スクロールイベント
    useEffect(() => {
        window.addEventListener("scroll", watchScroll);
        return () => {
            window.removeEventListener("scroll", watchScroll);
        };
    }, []);

    // スクロールを検知しボタン表示のフラグを切り替える
    const watchScroll = () => {
        const basePosition = 200;
        const scrollPosition = window.scrollY;
        setShowScrollToTop(basePosition <= scrollPosition);
    };

    return (
        <>
            {showScrollToTop && (
                <button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="text-[#B0EE1B] bg-[#1d2233] rounded-full flex items-center justify-center h-11 w-11"
                >
                    <KeyboardArrowUpIcon style={{ fontSize: "2.5rem" }} />
                </button>
            )}
        </>
    );
};
