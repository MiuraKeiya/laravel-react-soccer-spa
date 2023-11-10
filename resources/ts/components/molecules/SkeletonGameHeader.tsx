import { SkeletonAtom } from "../atoms/SkeletonAtom";

export const SkeletonGameHeader = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#1d2233] rounded-t h-60">
            <div className="mb-1">
                <SkeletonAtom
                    variant={"text"}
                    width={300}
                    height={70}
                    backgroundColor={"#4b5563"}
                    borderRadius={""}
                />
            </div>
            <div className="flex items-center justify-center lg:space-x-10">
                <SkeletonAtom
                    variant={"circular"}
                    width={140}
                    height={140}
                    backgroundColor={"#4b5563"}
                    borderRadius={""}
                />
                <div className="text-white flex flex-col items-center">
                    <SkeletonAtom
                        variant={"text"}
                        width={100}
                        height={90}
                        backgroundColor={"#4b5563"}
                        borderRadius={""}
                    />
                    <SkeletonAtom
                        variant={"text"}
                        width={100}
                        height={90}
                        backgroundColor={"#4b5563"}
                        borderRadius={""}
                    />
                </div>
                <SkeletonAtom
                    variant={"circular"}
                    width={140}
                    height={140}
                    backgroundColor={"#4b5563"}
                    borderRadius={""}
                />
            </div>
        </div>
    );
};
