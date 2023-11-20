import { SkeletonAtom } from "../atoms/SkeletonAtom";

export const SkeletonTeam = () => {
    return (
        <div className="flex justify-center mx-2 sm:mx-0">
            <div className="flex items-center lg:justify-center space-x-6 my-6 sm:mr-[10rem]">
                <SkeletonAtom
                    variant={"text"}
                    width={100}
                    height={150}
                    backgroundColor={"#4b5563"}
                    borderRadius={""}
                />
                <div className="text-[#EEEEEE] flex items-center space-x-11">
                    <div>
                        <SkeletonAtom
                            variant={"text"}
                            width={200}
                            height={40}
                            backgroundColor={"#4b5563"}
                            borderRadius={""}
                        />
                        <div className="flex items-center space-x-16 lg:space-x-[7rem] pt-3">
                            <div>
                                <SkeletonAtom
                                    variant={"text"}
                                    width={60}
                                    height={40}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />

                                <SkeletonAtom
                                    variant={"text"}
                                    width={60}
                                    height={40}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />

                                <SkeletonAtom
                                    variant={"text"}
                                    width={60}
                                    height={40}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />
                            </div>
                            <div>
                                <SkeletonAtom
                                    variant={"text"}
                                    width={70}
                                    height={40}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />

                                <SkeletonAtom
                                    variant={"text"}
                                    width={70}
                                    height={40}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />

                                <SkeletonAtom
                                    variant={"text"}
                                    width={70}
                                    height={40}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
