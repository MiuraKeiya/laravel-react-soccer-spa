import { SkeletonAtom } from "../../../atoms/SkeletonAtom";

export const GameStatusHeaderLoading = () => {
    return (
        <div className="flex sm:space-x-[9rem] space-x-[3rem] items-center">
            <SkeletonAtom
                variant={"circular"}
                width={50}
                height={50}
                backgroundColor={"#4b5563"}
                borderRadius={""}
            />
            <div className="flex flex-col items-center space-y-2 mt-3">
                <div className="font-custom text-[#EEEEEE] text-[32px] font-bold flex items-center space-x-2 h-[1rem]">
                    <SkeletonAtom
                        variant={"text"}
                        width={25}
                        height={50}
                        backgroundColor={"#4b5563"}
                        borderRadius={""}
                    />
                    <p>-</p>
                    <SkeletonAtom
                        variant={"text"}
                        width={25}
                        height={50}
                        backgroundColor={"#4b5563"}
                        borderRadius={""}
                    />
                </div>
                <SkeletonAtom
                    variant={"text"}
                    width={85}
                    height={20}
                    backgroundColor={"#4b5563"}
                    borderRadius={""}
                />
            </div>
            <SkeletonAtom
                variant={"circular"}
                width={50}
                height={50}
                backgroundColor={"#4b5563"}
                borderRadius={""}
            />
        </div>
    );
};
