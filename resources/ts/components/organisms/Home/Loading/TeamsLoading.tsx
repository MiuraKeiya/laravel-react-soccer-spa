import { SkeletonAtom } from "../../../atoms/SkeletonAtom";

export const TeamsLoading = () => {
    return (
        <div className="bg-[#10161c] rounded-lg">
            <div className="px-3 py-3">
                <div className="mb-4">
                    <div className="flex space-x-1 mb-1">
                        <SkeletonAtom
                            variant={"text"}
                            width={70}
                            height={25}
                            backgroundColor={"#444444"}
                            borderRadius={""}
                        />
                        <SkeletonAtom
                            variant={"text"}
                            width={50}
                            height={25}
                            backgroundColor={"#444444"}
                            borderRadius={""}
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <SkeletonAtom
                            variant={"circular"}
                            width={30}
                            height={30}
                            backgroundColor={"#444444"}
                            borderRadius={""}
                        />
                        <SkeletonAtom
                            variant={"text"}
                            width={100}
                            height={25}
                            backgroundColor={"#444444"}
                            borderRadius={""}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
