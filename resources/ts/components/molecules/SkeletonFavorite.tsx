import { SkeletonAtom } from "../atoms/SkeletonAtom";

export const SkeletonFavorite = () => {
    return (
        <div className="flex items-center justify-between mr-2 mb-2">
            <div className="flex items-center space-x-1">
                <SkeletonAtom
                    variant={"circular"}
                    width={25}
                    height={25}
                    backgroundColor={"#1d2233"}
                    borderRadius={""}
                />
                <SkeletonAtom
                    variant={"text"}
                    width={70}
                    height={20}
                    backgroundColor={"#1d2233"}
                    borderRadius={"5px"}
                />
            </div>
            <SkeletonAtom
                variant={"circular"}
                width={20}
                height={20}
                backgroundColor={"#1d2233"}
                borderRadius={""}
            />
        </div>
    );
};
