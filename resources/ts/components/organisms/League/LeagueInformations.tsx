export const LeagueInformations = ({ games }) => {
    return (
        <div className="bg-gradient-to-r from-[#1d2233] rounded-t">
            <div className="flex items-center space-x-2 mb-1 py-6 pl-3">
                <img
                    src={games[0].json_detail?.league.logo}
                    className="h-24 w-24"
                />
                <div>
                    <span className="text-white font-bold text-[30px]">
                        {games[0].json_detail?.league.name}
                    </span>
                    <div className="flex items-center space-x-2">
                        <img
                            src={games[0].json_detail?.league.flag}
                            className="h-5"
                        />
                        <span className="text-[#EEEEEE] font-bold text-[20px]">
                            {games[0].json_detail?.league.country}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
