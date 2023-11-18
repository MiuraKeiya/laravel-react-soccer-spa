import { GamesSelecter } from "./GamesSelecter";
import { HomeInformations } from "./HomeInformations";
import { useLeadingTeamApi } from "../../../hooks/useLeadingTeamApi";
import { LeagueInformations } from "./LeagueInformations";
import { LatestGame } from "./LatestGame";
import { Teams } from "./Teams";
import { Rankings } from "./Rankings";
import config from "../../../config";
import { useGamesApi } from "../../../hooks/useGamesApi";
import { useDatePicker } from "../../../hooks/useDatePicker";
import { findMaxSeason } from "../../../functions/Utils";
import { Page } from "../../../Page";
import { useErrors } from "../../../hooks/useErrors";
import { Helmet } from "react-helmet-async";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const Home = () => {
    const {
        selectedDate,
        highlightedDates,
        startDate,
        handleDateChange,
        gamesDateloading,
        gamesDateError,
    } = useDatePicker();

    // 日付ごとの試合を取得
    const { games, gamesLoading, gamesError } = useGamesApi(selectedDate);

    // 優勝チーム一覧を取得
    const [leadingTeam, leadingTeamError, leadingTeamLoading] =
        useLeadingTeamApi();

    // 最大のシーズンを取得
    const maxSeason = findMaxSeason(config);

    // 各エラーを1つにまとめる
    const pageError = useErrors(gamesDateError, gamesError, leadingTeamError);

    return (
        <Page error={pageError}>
            <Helmet>
                <title>サッカー欧州5大リーグ試合一覧</title>
            </Helmet>
            <div className="flex space-x-5 mt-6 mx-2">
                <div className="w-full">
                    <div>
                        <HomeInformations />
                    </div>
                    <div className="mt-1 mb-2">
                        <GamesSelecter
                            maxSeason={maxSeason}
                            highlightedDates={highlightedDates}
                            startDate={startDate}
                            handleDateChange={handleDateChange}
                            gamesDateloading={gamesDateloading}
                            games={games}
                            gamesLoading={gamesLoading}
                        />
                    </div>
                    <div className="text-[12px] text-[#C8CDCD] flex items-center space-x-2 bg-[#1d2233] rounded-lg py-2 px-2 shadow-md shadow-[#121313] mb-4">
                        <div className="flex items-center space-x-2 bg-[#10161c] rounded-lg py-2 px-2">
                            <p>
                                <InfoOutlinedIcon />
                            </p>
                            <p>
                                試合の日付と開始時間は、日本時間で表示されています。
                            </p>
                        </div>
                    </div>
                    <div className="text-[12px] flex items-center bg-[#1d2233] rounded-lg shadow-md shadow-[#121313] mb-6">
                        <LeagueInformations season={maxSeason} />
                    </div>
                </div>
                <div className="flex-col w-[38%] h-full space-y-3 hidden lg:block mb-6">
                    <div className="w-full bg-[#1d2233] rounded-lg shadow-md shadow-[#121313]">
                        <Teams
                            teams={leadingTeam}
                            loading={leadingTeamLoading}
                            season={maxSeason}
                        />
                    </div>
                    <div className="w-full bg-[#1d2233] rounded-lg shadow-md shadow-[#121313]">
                        <LatestGame season={maxSeason} />
                    </div>
                    <div className="w-full bg-[#1d2233] rounded-lg shadow-md shadow-[#121313]">
                        <Rankings season={maxSeason} />
                    </div>
                </div>
            </div>
        </Page>
    );
};
