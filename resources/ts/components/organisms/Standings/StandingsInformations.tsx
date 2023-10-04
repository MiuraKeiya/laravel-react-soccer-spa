import { SkeletonStandingsLeague } from "../../molecules/SkeletonStandingsLeague";

export const StandingsInformations = ({ standings, loading }) => {
    return (
        <div className="bg-gradient-to-r from-[#1d2233] rounded h-[7rem] flex items-center">
            {loading ? (
                <SkeletonStandingsLeague />
            ) : (
                <div className="flex items-center space-x-3 ml-6">
                    <img src={standings.league?.logo} className="h-12 w-12" />
                    <h1 className="text-white text-[25px] uppercase font-semibold">
                        {standings.league?.name}
                    </h1>
                    <p className="uppercase font-semibold text-[#C8CDCD] text-[18px] self-start mt-[14px] ml-2">
                        {standings.league?.country}
                    </p>
                </div>
            )}
        </div>
    );
};
