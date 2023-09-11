import { SkeletonAtom } from "../atoms/SkeletonAtom";

export const SkeletonPaginateTitle = () => {
    return (
        <>
            <SkeletonAtom
                variant={"circular"}
                width={40}
                height={40}
                backgroundColor={"#4b5563"}
                borderRadius={""}
            />
            <SkeletonAtom
                variant={"text"}
                width={130}
                height={40}
                backgroundColor={"#4b5563"}
                borderRadius={""}
            />
        </>
    );
};
