import { StandingsAll } from "../Team/Standing/StandingsAll";
import { LatestGames } from "./LatestGames";

export const LeagueOverview = ({
    latestGames,
    standings,
    latestGamesLoading,
    standingsLoading,
}) => {
    return (
        <>
            <LatestGames
                latestGames={latestGames}
                latestGamesLoading={latestGamesLoading}
            />
            <div className="bg-[#111931] py-1 text-[#EEEEEE] text-[18px] font-bold mt-6 mb-[1px] rounded-t">
                <h1 className="ml-3">順位表</h1>
            </div>
            <StandingsAll standings={standings} loading={standingsLoading} />
        </>
    );
};
