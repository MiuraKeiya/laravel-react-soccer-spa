import { SkeletonTeamStatistics } from "../../../molecules/SkeletonTeamStatistics";

export const StatisticLoading = () => {
    return (
        <div className="bg-[#1d2233] mt-2 rounded">
            <SkeletonTeamStatistics />
        </div>
    );
};
