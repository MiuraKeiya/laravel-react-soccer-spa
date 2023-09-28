import { GamesSelecter } from "./GamesSelecter";
import { HomeInformations } from "./HomeInformations";
import config from "../../../config";
import { findMaxSeason } from "../../../functions/Utils";

export const Home = () => {
    // 最大のシーズンを取得
    const maxSeason = findMaxSeason(config);

    return (
        <div>
            <div className="mt-6">
                <HomeInformations />
            </div>
            <div className="mt-1 mb-6">
                <GamesSelecter maxSeason={maxSeason} />
            </div>
        </div>
    );
};
