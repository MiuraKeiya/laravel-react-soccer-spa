import { SkeletonAtom } from "../atoms/SkeletonAtom";

export const SkeletonPlayerInformation = () => {
    return (
        <div className="bg-gradient-to-r from-[#1d2233] rounded-t sm:h-60 flex items-center justify-center py-3 sm:py-0">
            <div>
                <div className="flex items-center flex-col sm:flex-row space-x-6 sm:space-x-11 space-y-1 sm:space-y-0">
                    <div className="flex sm:flex-col items-center space-y-2 space-x-2 sm:space-x-0">
                        <SkeletonAtom
                            variant={"circular"}
                            width={70}
                            height={70}
                            backgroundColor={"#4b5563"}
                            borderRadius={""}
                        />
                        <div className="flex space-x-2">
                            <SkeletonAtom
                                variant={"text"}
                                width={90}
                                height={50}
                                backgroundColor={"#4b5563"}
                                borderRadius={""}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <SkeletonAtom
                            variant={"text"}
                            width={150}
                            height={50}
                            backgroundColor={"#4b5563"}
                            borderRadius={""}
                        />
                        <div className="flex sm:space-x-14 space-x-2">
                            <div className="flex flex-col space-y-3">
                                <div className="text-white">
                                    <SkeletonAtom
                                        variant={"text"}
                                        width={90}
                                        height={20}
                                        backgroundColor={"#4b5563"}
                                        borderRadius={""}
                                    />
                                </div>
                                <div className="text-white">
                                    <SkeletonAtom
                                        variant={"text"}
                                        width={90}
                                        height={20}
                                        backgroundColor={"#4b5563"}
                                        borderRadius={""}
                                    />
                                </div>
                                <div className="text-white">
                                    <SkeletonAtom
                                        variant={"text"}
                                        width={90}
                                        height={20}
                                        backgroundColor={"#4b5563"}
                                        borderRadius={""}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <div className="text-white">
                                    <SkeletonAtom
                                        variant={"text"}
                                        width={90}
                                        height={20}
                                        backgroundColor={"#4b5563"}
                                        borderRadius={""}
                                    />
                                </div>
                                <div className="text-white">
                                    <SkeletonAtom
                                        variant={"text"}
                                        width={90}
                                        height={20}
                                        backgroundColor={"#4b5563"}
                                        borderRadius={""}
                                    />
                                </div>
                                <div className="text-white">
                                    <SkeletonAtom
                                        variant={"text"}
                                        width={90}
                                        height={20}
                                        backgroundColor={"#4b5563"}
                                        borderRadius={""}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
