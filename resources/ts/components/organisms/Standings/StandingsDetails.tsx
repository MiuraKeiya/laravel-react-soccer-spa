import { getDescriptionInJapanese } from "../../../functions/Utils";

export const StandingsDetails = ({ standings }) => {
    // 重複を省くためのセットを作成
    const uniqueDescriptions = new Set();

    return (
        <div className="mt-2 ml-3">
            {standings.all &&
                Object.values(standings.all).map((standing, index) => {
                    const descriptionInfo = getDescriptionInJapanese(
                        standing.description
                    );

                    if (!descriptionInfo || !descriptionInfo.description) {
                        return null;
                    }

                    // 重複をチェックし、すでにセットに含まれている場合はスキップ
                    if (uniqueDescriptions.has(descriptionInfo.description)) {
                        return null;
                    }

                    // セットに追加
                    uniqueDescriptions.add(descriptionInfo.description);

                    return (
                        <div
                            key={index}
                            className="text-white flex items-center space-x-2 space-y-2"
                        >
                            <div
                                className={`w-[16px] h-[16px] rounded ${descriptionInfo.bgColorClass}`}
                            ></div>
                            <p className="text-[15px]">
                                {descriptionInfo.description}
                            </p>
                        </div>
                    );
                })}
        </div>
    );
};
