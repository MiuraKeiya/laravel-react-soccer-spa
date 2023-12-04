import { Loading } from "./Loading/Loading";
import { imageUrl } from "../../../functions/Utils";

export const TeamInformations = ({ informations, loading }) => {
    return (
        <div className="bg-gradient-to-tr from-[#1d2233] rounded-t">
            {loading ? (
                <Loading />
            ) : (
                informations.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-center mx-2 sm:mx-0"
                    >
                        <div className="flex items-center lg:justify-center space-x-6 my-5">
                            <div>
                                <div className="border-2 border-[#3e4145] rounded-xl bg-black">
                                    <img
                                        src={imageUrl(
                                            "teams",
                                            item.json_information.team.id,
                                            "png"
                                        )}
                                        alt="team"
                                        className="sm:h-24 sm:w-24 h-[4rem] w-[4rem]"
                                    />
                                </div>
                                <div>
                                    <span className="text-[#EEEEEE] text-[11px]">
                                        直近の試合
                                    </span>
                                    <div className="flex pt-1">
                                        {item.json_statistics.form ? (
                                            item.json_statistics.form
                                                .slice(-5)
                                                .split("")
                                                .map((char, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center justify-center sm:h-4 sm:w-4 h-3 w-3 sm:mx-[1px]"
                                                    >
                                                        <span
                                                            className={`text-black sm:text-[14px] text-[10px] font-semibold h-full w-full flex items-center justify-center ${
                                                                char === "W"
                                                                    ? "bg-[#44C486]"
                                                                    : char ===
                                                                      "D"
                                                                    ? "bg-[#9198AC]"
                                                                    : char ===
                                                                      "L"
                                                                    ? "bg-[#E66F5D]"
                                                                    : ""
                                                            }`}
                                                        >
                                                            {char}
                                                        </span>
                                                    </div>
                                                ))
                                        ) : (
                                            <div className="text-white text-opacity-40 text-[14px]">
                                                該当なし
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="text-[#EEEEEE] flex items-center space-x-11">
                                <div>
                                    <h2 className="font-bold lg:text-[30px] uppercase text-white">
                                        {item.json_information.team.name}
                                    </h2>
                                    <div className="flex items-center lg:space-x-16 pt-3">
                                        <div>
                                            <p>創立年:</p>
                                            <p className="font-bold text-[13px] sm:text-[15px]">
                                                {
                                                    item.json_information.team
                                                        .founded
                                                }
                                                年
                                            </p>
                                            <p>略称:</p>
                                            <p className="font-bold text-[13px] sm:text-[15px]">
                                                {
                                                    item.json_information.team
                                                        .code
                                                }
                                            </p>
                                            <p>国/都市:</p>
                                            <p className="font-bold sm:w-[10rem] w-[8rem] truncate text-[13px] sm:text-[15px]">
                                                {
                                                    item.json_information.team
                                                        .country
                                                }{" "}
                                                /{" "}
                                                {
                                                    item.json_information.venue
                                                        .city
                                                }
                                            </p>
                                        </div>
                                        <div>
                                            <p>スタジアム:</p>
                                            <p className="font-bold text-[13px] sm:text-[15px] sm:w-[14rem] w-[8rem] truncate">
                                                {
                                                    item.json_information.venue
                                                        .name
                                                }
                                            </p>
                                            <p>グラウンド表面:</p>
                                            <p className="font-bold text-[13px] sm:text-[15px]">
                                                {
                                                    item.json_information.venue
                                                        .surface
                                                }
                                            </p>
                                            <p>収容人数:</p>
                                            <p className="font-bold text-[13px] sm:text-[15px]">
                                                {
                                                    item.json_information.venue
                                                        .capacity
                                                }
                                                人
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
