import { compareTeams } from "../../functions/Utils";
import { imageUrl } from "../../functions/Utils";
import Tooltip from "@mui/material/Tooltip";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const AllGaugeBar = ({ statistics }) => {
    const result = compareTeams(statistics);

    const homePercentage = result.homeTeam;
    const awayPercentage = result.awayTeam;

    // バーの色を決定
    const homeBarColor =
        homePercentage < awayPercentage ? "rgba(231, 59, 59, 0.7)" : "#E73B3B";
    const awayBarColor =
        homePercentage > awayPercentage ? "rgba(70, 194, 82, 0.3)" : "#46C252";

    // メッセージに表示するチーム名
    const tooltipTeam =
        homePercentage > awayPercentage
            ? `${statistics[0].team.name}が試合を優勢に進めました`
            : `${statistics[1].team.name}が試合を優勢に進めました`;

    return (
        <div className="sm:mx-5 mx-3 pt-4">
            <div className="relative flex justify-center items-center border-2 border-[#060707] rounded-lg">
                {/* 左側のゲージバー */}
                <div className="rotate-180 bg-[#1d2233] h-[50px] w-full rounded-r-lg overflow-hidden relative">
                    <div
                        className="rounded-r-lg h-full animate-flow-left"
                        style={{
                            width: `${homePercentage}`,
                            background: `${homeBarColor}`,
                        }}
                    ></div>

                    {/* ホームチーム名 */}
                    <div className="flex items-center space-x-1 absolute top-1/2 left-1/2 transform -translate-x-4/3 -translate-y-1/2 text-white font-semibold rotate-180 z-10">
                        <img
                            src={imageUrl(
                                "teams",
                                statistics[0].team.id,
                                "png"
                            )}
                            alt="TeamLogo"
                            className="h-8 w-8 rounded-full"
                        />
                        <p className="text-[#EEEEEE] font-semibold hidden lg:block">
                            {statistics[0].team.name}
                        </p>
                    </div>

                    {/* パーセンテージ表示 */}
                    <p className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-[#EEEEEE] font-semibold z-10 rotate-180">
                        {homePercentage}
                    </p>
                </div>

                {/* 中央のアイコン */}
                <div className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="rounded-full bg-[#7A84FF] flex items-center h-[28px] w-[28px] justify-center border">
                        <Tooltip title={tooltipTeam}>
                            <SportsSoccerIcon className="text-[#EEEEEE]" />
                        </Tooltip>
                    </span>
                </div>

                {/* 右側のゲージバー */}
                <div className="bg-[#1d2233] h-[50px] w-full rounded-r-lg overflow-hidden relative">
                    <div
                        className="rounded-r-lg h-full animate-flow-left"
                        style={{
                            width: `${awayPercentage}`,
                            background: `${awayBarColor}`,
                        }}
                    ></div>

                    {/* アウェイチーム名 */}
                    <div className="flex items-center space-x-1 absolute top-1/2 left-1/2 transform translate-x-4/3 -translate-y-1/2 text-[#EEEEEE] font-semibold z-10">
                        <p className="text-[#EEEEEE] font-semibold hidden lg:block">
                            {statistics[1].team.name}
                        </p>
                        <img
                            src={imageUrl(
                                "teams",
                                statistics[1].team.id,
                                "png"
                            )}
                            alt="TeamLogo"
                            className="h-8 w-8 rounded-full"
                        />
                    </div>

                    {/* パーセンテージ表示 */}
                    <p className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-[#EEEEEE] font-semibold z-10">
                        {awayPercentage}
                    </p>
                </div>
            </div>
            <div className="flex items-center space-x-1 font-semibold mt-1 justify-end">
                <InfoOutlinedIcon className="text-white text-opacity-40" />
                <p className="text-white text-opacity-40 text-[12px]">
                    全体の割合に対する各チームのスタッツ
                </p>
            </div>
        </div>
    );
};
