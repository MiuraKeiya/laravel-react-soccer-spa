import { SkeletonAtom } from "../atoms/SkeletonAtom";

export const SkeletonModal = () => {
    return (
        <div className="flex items-center justify-between mr-3 ml-2">
            <div className="flex items-center space-x-2">
                <SkeletonAtom
                    variant={"text"}
                    width={40}
                    height={70}
                    backgroundColor={"#111931"}
                    borderRadius={"7px"}
                />
                <div>
                    <SkeletonAtom
                        variant={"text"}
                        width={210}
                        height={30}
                        backgroundColor={"#111931"}
                        borderRadius={"5px"}
                    />
                    <SkeletonAtom
                        variant={"text"}
                        width={210}
                        height={10}
                        backgroundColor={"#111931"}
                        borderRadius={"5px"}
                    />
                </div>
            </div>
            <SkeletonAtom
                variant={"circular"}
                width={25}
                height={25}
                backgroundColor={"#111931"}
                borderRadius={""}
            />
        </div>
    );
};
