import { SkeletonAtom } from "../../../atoms/SkeletonAtom";

export const BoxLoading = () => {
    return (
        <>
            <div className="flex items-center space-x-2 bg-[#10161c] rounded-lg py-2 px-2 mt-3 mb-3 sm:w-[30rem]">
                <p>
                    <SkeletonAtom
                        variant={"circular"}
                        width={25}
                        height={25}
                        backgroundColor={"#4b5563"}
                        borderRadius={""}
                    />
                </p>
                <p>
                    <SkeletonAtom
                        variant={"text"}
                        width={200}
                        height={35}
                        backgroundColor={"#4b5563"}
                        borderRadius={""}
                    />
                </p>
            </div>
            <div className="pb-2">
                <SkeletonAtom
                    variant={"text"}
                    width={100}
                    height={35}
                    backgroundColor={"#4b5563"}
                    borderRadius={""}
                />
            </div>
            <div className="flex flex-wrap">
                {Array(24)
                    .fill(null)
                    .map((_, index) => (
                        <div key={index}>
                            <div
                                className="rounded-t-lg h-[9rem] w-[9rem] flex items-center justify-center mr-2 cursor-pointer"
                                style={{
                                    backgroundColor: "rgba(14, 17, 21, 0.4)",
                                }}
                            >
                                <div className="flex flex-col items-center space-y-3">
                                    <SkeletonAtom
                                        variant={"circular"}
                                        width={65}
                                        height={65}
                                        backgroundColor={"#4b5563"}
                                        borderRadius={""}
                                    />

                                    <SkeletonAtom
                                        variant={"text"}
                                        width={100}
                                        height={25}
                                        backgroundColor={"#4b5563"}
                                        borderRadius={""}
                                    />
                                </div>
                            </div>
                            <div className="w-[9rem] h-[2rem] bg-[#10161c] rounded-b-lg mb-2">
                                <div className="flex justify-between mx-3 py-1">
                                    <SkeletonAtom
                                        variant={"text"}
                                        width={200}
                                        height={25}
                                        backgroundColor={"#4b5563"}
                                        borderRadius={""}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};
