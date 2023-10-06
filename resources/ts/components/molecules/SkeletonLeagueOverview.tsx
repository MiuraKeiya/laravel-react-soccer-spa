import { SkeletonAtom } from "../atoms/SkeletonAtom";

export const SkeletonLeagueOverview = () => {
    return (
        <div className="mt-2">
            <div className="bg-[#111931] py-1 text-[#EEEEEE] text-[18px] font-bold rounded">
                <h1 className="ml-3">最新スコア</h1>
            </div>
            {Array(5)
                .fill(null)
                .map((_, index) => (
                    <div key={index}>
                        <div>
                            <div className="flex justify-between mt-3">
                                <div className="flex space-x-1">
                                    <SkeletonAtom
                                        variant={"text"}
                                        width={110}
                                        height={25}
                                        backgroundColor={"#4b5563"}
                                        borderRadius={""}
                                    />
                                </div>
                                <SkeletonAtom
                                    variant={"text"}
                                    width={110}
                                    height={25}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />
                            </div>
                            <div className="flex bg-[#1d2233] mt-1 justify-center h-[3.25rem]">
                                <div className="flex items-center w-52 justify-end space-x-6">
                                    <SkeletonAtom
                                        variant={"text"}
                                        width={160}
                                        height={30}
                                        backgroundColor={"#111931"}
                                        borderRadius={"5px"}
                                    />
                                </div>
                                <div className="flex items-center space-x-1 mx-6">
                                    <div className="w-11 h-12 bg-[#111931] text-center"></div>
                                    <div className="w-11 h-12 bg-[#111931] text-center"></div>
                                </div>
                                <div className="flex items-center w-52 space-x-6">
                                    <SkeletonAtom
                                        variant={"text"}
                                        width={160}
                                        height={30}
                                        backgroundColor={"#111931"}
                                        borderRadius={"5px"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};
