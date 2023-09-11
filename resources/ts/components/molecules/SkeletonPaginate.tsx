import { SkeletonAtom } from "../atoms/SkeletonAtom";

export const SkeletonPaginate = () => {
    return (
        <div>
            <div className="flex justify-between mt-2">
                <div className="flex space-x-1">
                    <SkeletonAtom
                        variant={"text"}
                        width={110}
                        height={40}
                        backgroundColor={"#4b5563"}
                        borderRadius={""}
                    />
                </div>
                <SkeletonAtom
                    variant={"text"}
                    width={110}
                    height={40}
                    backgroundColor={"#4b5563"}
                    borderRadius={""}
                />
            </div>
            <div className="flex bg-[#1d2233] justify-center h-[3.25rem]">
                <div className="flex items-center w-52 justify-end space-x-3">
                    <SkeletonAtom
                        variant={"text"}
                        width={120}
                        height={40}
                        backgroundColor={"#4b5563"}
                        borderRadius={""}
                    />
                    <SkeletonAtom
                        variant={"circular"}
                        width={40}
                        height={40}
                        backgroundColor={"#4b5563"}
                        borderRadius={""}
                    />
                </div>
                <div className="flex items-center space-x-1 mx-6">
                    <div>
                        <SkeletonAtom
                            variant={"text"}
                            width={40}
                            height={70}
                            backgroundColor={"#4b5563"}
                            borderRadius={""}
                        />
                    </div>
                    <div>
                        <SkeletonAtom
                            variant={"text"}
                            width={40}
                            height={70}
                            backgroundColor={"#4b5563"}
                            borderRadius={""}
                        />
                    </div>
                </div>
                <div className="flex items-center w-52 space-x-3">
                    <SkeletonAtom
                        variant={"circular"}
                        width={40}
                        height={40}
                        backgroundColor={"#4b5563"}
                        borderRadius={""}
                    />
                    <SkeletonAtom
                        variant={"text"}
                        width={120}
                        height={40}
                        backgroundColor={"#4b5563"}
                        borderRadius={""}
                    />
                </div>
            </div>
        </div>
    );
};
