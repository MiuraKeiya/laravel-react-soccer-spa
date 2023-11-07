export const Members = ({ games }) => {
    return (
        <div>
            <div className="bg-[#111931] py-1 flex justify-center text-[#EEEEEE] text-[18px] font-bold">
                ラインナップ
            </div>
            <div className="mt-2 flex sm:space-x-10 flex-col sm:flex-row mx-1 sm:mx-0 space-y-2 sm:space-y-0">
                <div className="w-full">
                    <div className="bg-[#111931] py-8 flex justify-center border-l-4 border-red-500">
                        <img
                            src={games[0].json_detail?.teams.home.logo}
                            alt="teamLogo"
                            className="h-[4.375rem] w-[4.375rem]"
                        />
                    </div>
                    <div className="bg-[#1d2233]">
                        <div className="h-16 flex items-center">
                            <span className="text-[#EEEEEE] font-bold text-[18px] ml-5 border-b-2 border-red-500 pb-1">
                                スターティングメンバー
                            </span>
                        </div>
                        <div>
                            {games[0].json_detail?.lineups[0].startXI.map(
                                (game, index) => (
                                    <div
                                        key={index}
                                        className="text-white text-[18px] font-bold border-b border-[#111931] h-20 flex items-center justify-between mx-3"
                                    >
                                        <span>{game.player.name}</span>
                                        <span>{game.player.number}</span>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="h-20 flex items-center">
                            <span className="text-[#EEEEEE] font-bold text-[18px] ml-5 border-b-2 border-red-500 pb-1">
                                ベンチメンバー
                            </span>
                        </div>
                        <div>
                            {games[0].json_detail?.lineups[0].substitutes.map(
                                (game, index) => (
                                    <div
                                        key={index}
                                        className="text-white text-[18px] font-bold border-b border-[#111931] h-20 flex items-center justify-between mx-3"
                                    >
                                        <span>{game.player.name}</span>
                                        <span>{game.player.number}</span>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="h-20 flex items-center">
                            <span className="text-[#EEEEEE] font-bold text-[18px] ml-5 border-b-2 border-red-500 pb-1">
                                監督
                            </span>
                        </div>
                        <div>
                            <div className="text-white text-[18px] font-bold border-b border-[#111931] h-20 flex items-center justify-between mx-3">
                                <span>
                                    {
                                        games[0].json_detail?.lineups[0].coach
                                            .name
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="bg-[#111931] py-8 flex justify-center border-l-4 border-blue-500">
                        <img
                            src={games[0].json_detail?.teams.away.logo}
                            alt="teamLogo"
                            className="h-[4.375rem] w-[4.375rem]"
                        />
                    </div>
                    <div className="bg-[#1d2233]">
                        <div className="h-16 flex items-center">
                            <span className="text-[#EEEEEE] font-bold text-[18px] ml-5 border-b-2 border-blue-500 pb-1">
                                スターティングメンバー
                            </span>
                        </div>
                        <div>
                            {games[0].json_detail?.lineups[1].startXI.map(
                                (game, index) => (
                                    <div
                                        key={index}
                                        className="text-white text-[18px] font-bold border-b border-[#111931] h-20 flex items-center justify-between mx-3"
                                    >
                                        <span>{game.player.name}</span>
                                        <span>{game.player.number}</span>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="h-20 flex items-center">
                            <span className="text-[#EEEEEE] font-bold text-[18px] ml-5 border-b-2 border-blue-500 pb-1">
                                ベンチメンバー
                            </span>
                        </div>
                        <div>
                            {games[0].json_detail?.lineups[1].substitutes.map(
                                (game, index) => (
                                    <div
                                        key={index}
                                        className="text-white text-[18px] font-bold border-b border-[#111931] h-20 flex items-center justify-between mx-3"
                                    >
                                        <span>{game.player.name}</span>
                                        <span>{game.player.number}</span>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="h-20 flex items-center">
                            <span className="text-[#EEEEEE] font-bold text-[18px] ml-5 border-b-2 border-blue-500 pb-1">
                                監督
                            </span>
                        </div>
                        <div>
                            <div className="text-white text-[18px] font-bold border-b border-[#111931] h-20 flex items-center justify-between mx-3">
                                <span>
                                    {
                                        games[0].json_detail?.lineups[1].coach
                                            .name
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
