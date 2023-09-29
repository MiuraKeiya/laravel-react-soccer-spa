import { SkeletonAtom } from "../atoms/SkeletonAtom";

export const SkeletonDatePicker = () => {
    return (
        <SkeletonAtom
            variant={"text"}
            width={90}
            height={50}
            backgroundColor={"#111931"}
            borderRadius={"7px"}
        />
    );
};
