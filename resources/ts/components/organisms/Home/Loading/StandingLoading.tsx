import { SkeletonAtom } from "../../../atoms/SkeletonAtom";

export const StandingLoading = () => {
    return (
        <div>
            <div className="border-b border-gray-500 pb-1">
                <SkeletonAtom
                    variant={"text"}
                    width={140}
                    height={40}
                    backgroundColor={"#111931"}
                    borderRadius={""}
                />
            </div>
            <div className="mt-3">
                <table className="w-full">
                    <thead className="bg-[#111931] text-[#C8CDCD] text-[12px] font-bold">
                        <tr>
                            <th className="w-[2.5rem]">#</th>
                            <th className="text-left">チーム</th>
                            <th className="w-[3rem]">MP</th>
                            <th className="w-[3rem]">W</th>
                            <th className="w-[3rem]">D</th>
                            <th className="w-[3rem]">L</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#C8CDCD]">
                        {[...Array(10)].map((_, index) => (
                            <tr
                                key={index}
                                className={
                                    "border-b border-[#111931] text-center h-[3.4375rem]"
                                }
                            >
                                <td>
                                    <div
                                        className={
                                            "rounded-full w-[1.5rem] h-[1.5rem] flex items-center justify-center font-semibold"
                                        }
                                    >
                                        <SkeletonAtom
                                            variant={"circular"}
                                            width={25}
                                            height={25}
                                            backgroundColor={"#111931"}
                                            borderRadius={""}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-2">
                                        <SkeletonAtom
                                            variant={"circular"}
                                            width={25}
                                            height={25}
                                            backgroundColor={"#111931"}
                                            borderRadius={""}
                                        />
                                        <SkeletonAtom
                                            variant={"text"}
                                            width={50}
                                            height={25}
                                            backgroundColor={"#111931"}
                                            borderRadius={""}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="flex justify-center">
                                        <SkeletonAtom
                                            variant={"text"}
                                            width={25}
                                            height={25}
                                            backgroundColor={"#111931"}
                                            borderRadius={""}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="flex justify-center">
                                        <SkeletonAtom
                                            variant={"text"}
                                            width={25}
                                            height={25}
                                            backgroundColor={"#111931"}
                                            borderRadius={""}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="flex justify-center">
                                        <SkeletonAtom
                                            variant={"text"}
                                            width={25}
                                            height={25}
                                            backgroundColor={"#111931"}
                                            borderRadius={""}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="flex justify-center">
                                        <SkeletonAtom
                                            variant={"text"}
                                            width={25}
                                            height={25}
                                            backgroundColor={"#111931"}
                                            borderRadius={""}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-2 flex justify-end">
                <p className="text-[#7d40b3] font-semibold text-[14px]">
                    全ての順位
                </p>
            </div>
        </div>
    );
};
