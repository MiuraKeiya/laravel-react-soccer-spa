import { SkeletonModal } from "../../molecules/SkeletonModal";

export const Loading = () => {
    return (
        <div>
            <SkeletonModal />
            <SkeletonModal />
            <SkeletonModal />
            <SkeletonModal />
            <SkeletonModal />
        </div>
    );
};
