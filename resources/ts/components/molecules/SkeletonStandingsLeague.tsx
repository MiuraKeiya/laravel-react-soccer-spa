import { SkeletonAtom } from "../atoms/SkeletonAtom";

export const SkeletonStandingsLeague = () => {
    return (
        <div className="flex items-center ml-6 space-x-2">
            <SkeletonAtom
                variant={"text"}
                width={55}
                height={80}
                backgroundColor={"#4b5563"}
                borderRadius={"5px"}
            />
            <SkeletonAtom
                variant={"text"}
                width={240}
                height={50}
                backgroundColor={"#4b5563"}
                borderRadius={"5px"}
            />
        </div>
    );
};
