import { LeagueInformationsLoading } from "./Loading/LeagueInformationsLoading";

export const LeagueInformations = ({ latestGames, loading }) => {
    if (loading) {
        return <LeagueInformationsLoading />;
    }

    return (
        <div className="bg-gradient-to-r from-[#1d2233] rounded-t">
            <div className="flex items-center justify-center space-x-1 sm:space-x-5 py-6">
                <img
                    src={latestGames[0]?.json_detail?.league.logo}
                    className="h-24 w-24 rounded bg-white"
                />
                <div>
                    <span className="text-white font-bold text-[30px] uppercase">
                        {latestGames[0]?.json_detail?.league.name}
                    </span>
                    <div className="flex items-center space-x-2">
                        <img
                            src={latestGames[0]?.json_detail?.league.flag}
                            className="h-5"
                        />
                        <span className="text-[#EEEEEE] font-bold text-[20px] uppercase">
                            {latestGames[0]?.json_detail?.league.country}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
