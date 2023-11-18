import { SkeletonAtom } from "../../../atoms/SkeletonAtom";

export const RankingsLoading = () => {
    return (
        <div>
            <div className="border-b border-gray-500 pb-3">
                <SkeletonAtom
                    variant={"text"}
                    width={140}
                    height={40}
                    backgroundColor={"#111931"}
                    borderRadius={""}
                />
            </div>
            <div className="text-[12px] text-[#C8CDCD] flex items-center space-x-2 bg-[#10161c] rounded-lg py-2 px-2 mt-3">
                <SkeletonAtom
                    variant={"circular"}
                    width={25}
                    height={25}
                    backgroundColor={"#111931"}
                    borderRadius={""}
                />
                <SkeletonAtom
                    variant={"text"}
                    width={150}
                    height={40}
                    backgroundColor={"#111931"}
                    borderRadius={""}
                />
            </div>
            <div className="mt-3 mb-1">
                <table className="w-full">
                    <thead className="bg-[#111931] text-[#C8CDCD] text-[12px]">
                        <tr>
                            <th className="w-[2.5rem]">#</th>
                            <th className="text-left">選手</th>
                            <th></th>
                            <th className="w-[3rem]">得点</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#EEEEEE]">
                        {[...Array(10)].map((_, index) => (
                            <tr
                                key={index}
                                className="border-b border-[#111931] text-center h-[3.4375rem]"
                            >
                                <td className="font-semibold text-[#C8CDCD]">
                                    <SkeletonAtom
                                        variant={"circular"}
                                        width={25}
                                        height={25}
                                        backgroundColor={"#111931"}
                                        borderRadius={""}
                                    />
                                </td>
                                <td className="">
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
                                            width={80}
                                            height={40}
                                            backgroundColor={"#111931"}
                                            borderRadius={""}
                                        />
                                    </div>
                                </td>
                                <td className="text-[14px]"></td>
                                <td>
                                    <div className="flex items-center justify-center">
                                        <SkeletonAtom
                                            variant={"text"}
                                            width={30}
                                            height={40}
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
        </div>
    );
};
