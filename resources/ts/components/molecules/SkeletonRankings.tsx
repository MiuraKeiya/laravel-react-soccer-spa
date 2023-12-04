import { SkeletonAtom } from "../atoms/SkeletonAtom";

export const SkeletonRankings = () => {
    return (
        <div>
            <div className="bg-[#111931] py-1 flex justify-center">
                <SkeletonAtom
                    variant={"text"}
                    width={120}
                    height={27}
                    backgroundColor={"#4b5563"}
                    borderRadius={""}
                />
            </div>
            <div className="bg-[#1d2233] mt-[1px]">
                <table className="w-full">
                    <thead className="bg-[#111931]">
                        <tr>
                            <th className="sm:w-7"></th>
                            <th className="text-left">
                                <SkeletonAtom
                                    variant={"text"}
                                    width={50}
                                    height={23}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />
                            </th>
                            <th className="text-left">
                                <SkeletonAtom
                                    variant={"text"}
                                    width={50}
                                    height={23}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />
                            </th>
                            <th>
                                <SkeletonAtom
                                    variant={"text"}
                                    width={50}
                                    height={23}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />
                            </th>
                            <th>
                                <SkeletonAtom
                                    variant={"text"}
                                    width={50}
                                    height={23}
                                    backgroundColor={"#4b5563"}
                                    borderRadius={""}
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array(20)
                            .fill(null)
                            .map((_, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-[#111931] text-center h-[3.4375rem]"
                                >
                                    <td>
                                        <div className="ml-1">
                                            <SkeletonAtom
                                                variant={"text"}
                                                width={20}
                                                height={40}
                                                backgroundColor={"#4b5563"}
                                                borderRadius={""}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="lg:w-[16rem]">
                                            <SkeletonAtom
                                                variant={"text"}
                                                width={130}
                                                height={40}
                                                backgroundColor={"#4b5563"}
                                                borderRadius={""}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="lg:w-[16rem]">
                                            <SkeletonAtom
                                                variant={"text"}
                                                width={100}
                                                height={23}
                                                backgroundColor={"#4b5563"}
                                                borderRadius={""}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <SkeletonAtom
                                            variant={"text"}
                                            width={50}
                                            height={23}
                                            backgroundColor={"#4b5563"}
                                            borderRadius={""}
                                        />
                                    </td>
                                    <td>
                                        <SkeletonAtom
                                            variant={"text"}
                                            width={50}
                                            height={23}
                                            backgroundColor={"#4b5563"}
                                            borderRadius={""}
                                        />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
