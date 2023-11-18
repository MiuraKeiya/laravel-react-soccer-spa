import { LeagueInformationsLoading } from "./Loading/LeagueInformationsLoading";

export const LeagueInformations = ({ latestGames, loading }) => {
    if (loading) {
        return <LeagueInformationsLoading />;
    }

    // 各リーグIDに対応する背景色を定義
    const gradientColors = {
        39: "from-[#330066]",
        140: "from-[#993300]",
        135: "from-[#3366CC]",
        78: "from-[#CC3300]",
        61: "from-[#99CC00]",
    };

    // リーグIDに対応する背景色を取得
    const leagueId = latestGames[0]?.json_detail?.league.id;
    const gradientColor = gradientColors[leagueId] || "from-[#1d2233]";

    return (
        <div className={`bg-gradient-to-tr ${gradientColor} rounded-t`}>
            <div className="flex items-center justify-center space-x-3 sm:space-x-5 py-6">
                <img
                    src={latestGames[0]?.json_detail?.league.logo}
                    className="sm:h-24 sm:w-24 h-16 w-16 rounded bg-white"
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
