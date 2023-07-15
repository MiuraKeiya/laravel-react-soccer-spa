import { useContext } from "react";
import { PlayerContext } from "../../provider/PlayerProvider";

export const PlayerProfile = () => {
    const { playerData, error } = useContext(PlayerContext);

    const playerData2023 = playerData[2023];
    const playerData2022 = playerData[2022];

    // 2023年のresponseが空の場合は2022年のデータを使用する
    const responseData =
        playerData2023.response.length === 0 ? playerData2022 : playerData2023;

    return (
        <div className="mt-3">
            {responseData.response.map((p, index) => (
                <div key={index}>
                    <div className="flex space-x-20 items-center">
                        <img
                            src={p.player.photo}
                            alt="PlayerPhoto"
                            className="h-16 w-16 rounded-full"
                        />
                        <div className="flex relative">
                            <img
                                src={p.statistics[0].team.logo}
                                alt="Team Photo"
                                className="h-14 w-14 rounded-full absolute right-9"
                            />
                            <img
                                src={p.statistics[0].league.logo}
                                alt="Team Photo"
                                className="h-14 w-14 rounded-full"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="text-[#FFFFFF] font-bold text-[18px] mb-2">
                            {p.player.name}
                        </div>
                        <div className="text-[#C8CDCD] text-[13px] mb-1">
                            <span className="font-bold">チーム: </span>
                            <span>
                                {p.statistics[0].team.name}(
                                {p.statistics[0].league.name})
                            </span>
                        </div>
                        <div className="text-[#C8CDCD] text-[13px] mb-1">
                            <span className="font-bold">国籍: </span>
                            <span>{p.player.nationality}</span>
                        </div>
                        <div className="text-[#C8CDCD] text-[13px] mb-1">
                            <span className="font-bold">出身: </span>
                            <span>
                                {p.player.birth.place} /{" "}
                                {p.player.birth.country}
                            </span>
                        </div>
                        <div className="text-[#C8CDCD] text-[13px] mb-1">
                            <span className="font-bold">誕生日: </span>
                            <span>
                                {p.player.birth.date}({p.player.age}歳)
                            </span>
                        </div>
                        <div className="flex space-x-6 text-[#C8CDCD] text-[13px]">
                            <div className="flex flex-col">
                                <span className="font-bold">身長:</span>
                                <span>{p.player.height}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold">体重:</span>
                                <span>{p.player.weight}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold">ポジション:</span>
                                <span>{p.statistics[0].games.position}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
