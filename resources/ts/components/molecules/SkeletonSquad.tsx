import { SkeletonAtom } from "../atoms/SkeletonAtom";

export const SkeletonSquad = () => {
    return (
        <div className="bg-[#1d2233] mt-2 rounded overflow-x-auto">
            <div>
                <h1 className="text-white font-bold text-[20px] pl-4">
                    在籍選手
                </h1>
            </div>
            <div className="mt-1">
                <div className="bg-[#111931] mb-2 mx-3 rounded">
                    <h2 className="text-[#EEEEEE] font-bold text-[20px] mx-6 h-11 flex justify-center items-center">
                        ゴールキーパー
                    </h2>
                </div>
                <div className="mx-6">
                    <table className="w-full">
                        <thead>
                            <tr className="text-[#EEEEEE]">
                                <th className="text-left">名前</th>
                                <th className="w-[7rem] lg:w-[8rem]">年齢</th>
                                <th className="w-[15rem] lg:w-[16rem]">
                                    出場数
                                </th>
                                <th className="w-[9rem] lg:w-[8rem]">得点</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(5)
                                .fill(null)
                                .map((_, index) => (
                                    <tr className="text-white border-b border-black h-16">
                                        <td className="w-[42.375rem]">
                                            <div className="text-[20px] flex items-center space-x-2">
                                                <SkeletonAtom
                                                    variant={"circular"}
                                                    width={45}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={70}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            <div className="flex justify-center">
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={40}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            <div className="flex justify-center">
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={40}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            <div className="flex justify-center">
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={40}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
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
            <div className="mt-3">
                <div className="bg-[#111931] mb-2 mx-3 rounded">
                    <h2 className="text-[#EEEEEE] font-bold text-[20px] mx-6 h-11 flex justify-center items-center">
                        ディフェンダー
                    </h2>
                </div>
                <div className="mx-6">
                    <table className="w-full">
                        <thead>
                            <tr className="text-[#EEEEEE]">
                                <th className="text-left">名前</th>
                                <th className="w-[7rem] lg:w-[8rem]">年齢</th>
                                <th className="w-[15rem] lg:w-[16rem]">
                                    出場数
                                </th>
                                <th className="w-[9rem] lg:w-[8rem]">得点</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(5)
                                .fill(null)
                                .map((_, index) => (
                                    <tr className="text-white border-b border-black h-16">
                                        <td className="w-[42.375rem]">
                                            <div className="text-[20px] flex items-center space-x-2">
                                                <SkeletonAtom
                                                    variant={"circular"}
                                                    width={45}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={70}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            <div className="flex justify-center">
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={40}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            <div className="flex justify-center">
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={40}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            <div className="flex justify-center">
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={40}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
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
            <div className="mt-3">
                <div className="bg-[#111931] mb-2 mx-3 rounded">
                    <h2 className="text-[#EEEEEE] font-bold text-[20px] mx-6 h-11 flex justify-center items-center">
                        ミッドフィルダー
                    </h2>
                </div>
                <div className="mx-6">
                    <table className="w-full">
                        <thead>
                            <tr className="text-[#EEEEEE]">
                                <th className="text-left">名前</th>
                                <th className="w-[7rem] lg:w-[8rem]">年齢</th>
                                <th className="w-[15rem] lg:w-[16rem]">
                                    出場数
                                </th>
                                <th className="w-[9rem] lg:w-[8rem]">得点</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(5)
                                .fill(null)
                                .map((_, index) => (
                                    <tr className="text-white border-b border-black h-16">
                                        <td className="w-[42.375rem]">
                                            <div className="text-[20px] flex items-center space-x-2">
                                                <SkeletonAtom
                                                    variant={"circular"}
                                                    width={45}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={70}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            <div className="flex justify-center">
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={40}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            <div className="flex justify-center">
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={40}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            <div className="flex justify-center">
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={40}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
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
            <div className="mt-3">
                <div className="bg-[#111931] mb-2 mx-3 rounded">
                    <h2 className="text-[#EEEEEE] font-bold text-[20px] mx-6 h-11 flex justify-center items-center">
                        アタッカー
                    </h2>
                </div>
                <div className="mx-6">
                    <table className="w-full">
                        <thead>
                            <tr className="text-[#EEEEEE]">
                                <th className="text-left">名前</th>
                                <th className="w-[7rem] lg:w-[8rem]">年齢</th>
                                <th className="w-[15rem] lg:w-[16rem]">
                                    出場数
                                </th>
                                <th className="w-[9rem] lg:w-[8rem]">得点</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(5)
                                .fill(null)
                                .map((_, index) => (
                                    <tr className="text-white border-b border-black h-16">
                                        <td className="w-[42.375rem]">
                                            <div className="text-[20px] flex items-center space-x-2">
                                                <SkeletonAtom
                                                    variant={"circular"}
                                                    width={45}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={70}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            <div className="flex justify-center">
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={40}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            <div className="flex justify-center">
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={40}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
                                                    borderRadius={""}
                                                />
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            <div className="flex justify-center">
                                                <SkeletonAtom
                                                    variant={"text"}
                                                    width={40}
                                                    height={45}
                                                    backgroundColor={"#4b5563"}
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
        </div>
    );
};
