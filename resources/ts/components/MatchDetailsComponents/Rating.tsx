import { TopPlayer } from "./TopPlayer";

export const Rating = () => {
    return (
        <div>
            <div className="bg-[#111931] text-[#C8CDCD] text-[11px] font-bold py-1 mt-3">
                <span className="ml-3">トッププレイヤー</span>
            </div>
            <TopPlayer />
        </div>
    );
};
