import { SkeletonAtom } from "../../../atoms/SkeletonAtom";

export const ListLoading = () => {
    return (
        <>
            <SkeletonAtom
                variant={"text"}
                width={200}
                height={40}
                backgroundColor={"#4b5563"}
                borderRadius={""}
            />
            <div className="flex sm:space-x-10 space-x-2 my-6 ml-3">
                <SkeletonAtom
                    variant={"circular"}
                    width={60}
                    height={60}
                    backgroundColor={"#4b5563"}
                    borderRadius={""}
                />
                <SkeletonAtom
                    variant={"circular"}
                    width={60}
                    height={60}
                    backgroundColor={"#4b5563"}
                    borderRadius={""}
                />
                <SkeletonAtom
                    variant={"circular"}
                    width={60}
                    height={60}
                    backgroundColor={"#4b5563"}
                    borderRadius={""}
                />
                <SkeletonAtom
                    variant={"circular"}
                    width={60}
                    height={60}
                    backgroundColor={"#4b5563"}
                    borderRadius={""}
                />
            </div>
            <table
                style={{
                    backgroundColor: "rgba(14, 17, 21, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
                className="w-full"
            >
                <thead>
                    <tr>
                        <th
                            style={{
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                padding: "10px",
                            }}
                            className="text-left"
                        >
                            <div className="ml-2">選手</div>
                        </th>
                        <th
                            style={{
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                padding: "10px",
                            }}
                        >
                            ポジション
                        </th>
                        <th
                            style={{
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                padding: "10px",
                            }}
                        >
                            年齢
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Array(20)
                        .fill(null)
                        .map((_, index) => (
                            <tr key={index}>
                                <td
                                    style={{
                                        border: "1px solid rgba(255, 255, 255, 0.15)",
                                        padding: "8px",
                                    }}
                                    className="sm:w-[40rem] w-[10rem]"
                                >
                                    <div className="ml-2 truncate">
                                        <SkeletonAtom
                                            variant={"text"}
                                            width={100}
                                            height={25}
                                            backgroundColor={"#4b5563"}
                                            borderRadius={""}
                                        />
                                    </div>
                                </td>
                                <td
                                    style={{
                                        border: "1px solid rgba(255, 255, 255, 0.15)",
                                        padding: "8px",
                                    }}
                                >
                                    <div className="flex items-center justify-center">
                                        <SkeletonAtom
                                            variant={"text"}
                                            width={100}
                                            height={25}
                                            backgroundColor={"#4b5563"}
                                            borderRadius={""}
                                        />
                                    </div>
                                </td>
                                <td
                                    style={{
                                        border: "1px solid rgba(255, 255, 255, 0.15)",
                                        padding: "8px",
                                    }}
                                    className="text-center"
                                >
                                    <div className="flex items-center justify-center">
                                        <SkeletonAtom
                                            variant={"text"}
                                            width={40}
                                            height={25}
                                            backgroundColor={"#4b5563"}
                                            borderRadius={""}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
};
