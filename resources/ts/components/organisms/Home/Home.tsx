import { GamesSelecter } from "./GamesSelecter";
import { HomeInformations } from "./HomeInformations";
import config from "../../../config";
import { useGamesApi } from "../../../hooks/useGamesApi";
import { useDatePicker } from "../../../hooks/useDatePicker";
import { findMaxSeason } from "../../../functions/Utils";
import { Page } from "../../../Page";
import { useErrors } from "../../../hooks/useErrors";

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

    // 最大のシーズンを取得
    const maxSeason = findMaxSeason(config);

    const pageError = useErrors(gamesDateError, gamesError);

    return (
        <Page error={pageError}>
            <div>
                <div className="mt-6">
                    <HomeInformations />
                </div>
                <div className="mt-1 mb-6">
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
            </div>
        </Page>
    );
};
