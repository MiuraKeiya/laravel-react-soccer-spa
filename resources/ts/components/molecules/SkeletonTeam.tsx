import { SkeletonAtom } from "../atoms/SkeletonAtom";

export const SkeletonTeam = () => {
    return (
        <div className="flex justify-center">
            <div className="flex items-center space-x-5 my-5">
                <div className="mr-11">
                    <SkeletonAtom
                        variant={"text"}
                        width={120}
                        height={190}
                        backgroundColor={"#4b5563"}
                        borderRadius={""}
                    />
                </div>
                <div className="flex items-center">
                    <div>
                        <SkeletonAtom
                            variant={"text"}
                            width={200}
                            height={60}
                            backgroundColor={"#4b5563"}
                            borderRadius={""}
                        />
                        <div className="flex items-center mx-5 pt-2">
                            <div>
                                <SkeletonAtom
                                    variant={"text"}
                                    width={160}
                                    height={20}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />
                                <SkeletonAtom
                                    variant={"text"}
                                    width={160}
                                    height={10}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />
                                <SkeletonAtom
                                    variant={"text"}
                                    width={160}
                                    height={20}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />
                                <SkeletonAtom
                                    variant={"text"}
                                    width={160}
                                    height={10}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />
                                <SkeletonAtom
                                    variant={"text"}
                                    width={160}
                                    height={20}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />
                                <SkeletonAtom
                                    variant={"text"}
                                    width={160}
                                    height={10}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ml-11">
                        <SkeletonAtom
                            variant={"text"}
                            width={120}
                            height={190}
                            backgroundColor={"#4b5563"}
                            borderRadius={""}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
