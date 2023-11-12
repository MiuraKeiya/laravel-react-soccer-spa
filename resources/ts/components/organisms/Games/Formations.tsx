import { calculateAverageRating } from "../../../functions/FieldUtils/calculateAverageRating";
import { getRatingColorClass } from "../../../functions/FieldUtils/getRatingColorClass";
import { getPlayerRatingsByTeam } from "../../../functions/FieldUtils/getPlayerRatingsByTeam";
import { createPlayerElementsForLineup } from "../../../functions/FieldUtils/createPlayerElementsForLineup";

export const Formations = ({ games, season }) => {
    const homePlayerElements = createPlayerElementsForLineup(
        games[0].json_detail.lineups[0],
        true,
        games,
        season
    );
    const awayPlayerElements = createPlayerElementsForLineup(
        games[0].json_detail.lineups[1],
        false,
        games,
        season
    );

    // 選手の評価を取得
    const homePlayerRatings = getPlayerRatingsByTeam(games[0], true);
    const awayPlayerRatings = getPlayerRatingsByTeam(games[0], false);

    // 平均評価を計算
    const averageHomeRating = calculateAverageRating(homePlayerRatings);
    const averageAwayRating = calculateAverageRating(awayPlayerRatings);

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
            <div className="absolute top-0 right-0 p-2 bg-[#1d2233] text-white font-bold md:text-[20px] text-[11px] lg:w-[7rem] flex items-center justify-center h-[1rem] md:h-[2.9rem]">
                {games[0]?.json_detail?.lineups[1]?.formation}
            </div>
            <div
                className={`absolute top-0 right-[8rem] p-2 items-center space-x-1 hidden lg:flex ${getRatingColorClass(
                    averageAwayRating
                )}
                )} text-white font-bold md:text-[20px] text-[12px]`}
            >
                <p className="text-[13px]">平均評価</p>
                <p>{averageAwayRating}</p>
            </div>
            <div
                className={`absolute top-0 left-[8rem] p-2 items-center space-x-1 hidden lg:flex ${getRatingColorClass(
                    averageHomeRating
                )} text-white font-bold md:text-[20px] text-[12px]`}
            >
                <p className="text-[13px]">平均評価</p>
                <p>{averageHomeRating}</p>
            </div>
            <div className="absolute top-0 left-0 p-2 bg-[#1d2233] text-white font-bold md:text-[20px] text-[11px] lg:w-[7rem] flex items-center justify-center h-[1rem] md:h-[2.9rem]">
                {games[0]?.json_detail?.lineups[0]?.formation}
            </div>
            {homePlayerElements}
            {awayPlayerElements}
        </div>
    );
};
