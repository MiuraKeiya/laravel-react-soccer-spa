import { SkeletonAtom } from "../atoms/SkeletonAtom";

export const SkeletonLeagueInformations = () => {
    return (
        <div className="bg-gradient-to-r from-[#1d2233] rounded-t">
            <div className="flex items-center justify-center space-x-1 sm:space-x-5">
                <SkeletonAtom
                    variant={"text"}
                    width={100}
                    height={144}
                    backgroundColor={"#1d2233"}
                    borderRadius={""}
                />
                <div>
                    <SkeletonAtom
                        variant={"text"}
                        width={160}
                        height={50}
                        backgroundColor={"#1d2233"}
                        borderRadius={""}
                    />
                    <div className="flex items-center space-x-2">
                        <SkeletonAtom
                            variant={"text"}
                            width={120}
                            height={50}
                            backgroundColor={"#1d2233"}
                            borderRadius={""}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
