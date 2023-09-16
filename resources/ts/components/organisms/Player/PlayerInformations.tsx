export const PlayerInformations = ({ statistics }) => {
    return (
        <div className="bg-gradient-to-r from-[#1d2233] rounded-t h-60 flex items-center justify-center">
            {statistics.map((player, index) => (
                <div key={index}>
                    <div className="flex items-center space-x-3">
                        <div className="flex flex-col space-y-2">
                            <img
                                src={player.json_statistics.player.photo}
                                alt="PlayerPhoto"
                                className="rounded-full h-28 w-28"
                            />
                            <div className="flex space-x-2">
                                <img
                                    src={
                                        player.json_statistics.statistics[0]
                                            .team.logo
                                    }
                                    alt="TeamLogo"
                                    className="h-14 w-14 transition-transform hover:scale-110 cursor-pointer"
                                />
                                <img
                                    src={
                                        player.json_statistics.statistics[0]
                                            .league.logo
                                    }
                                    alt="TeamLogo"
                                    className="h-14 w-14 transition-transform hover:scale-110 cursor-pointer"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-[30px] mb-3">
                                {player.json_statistics.player.name}
                            </span>
                            <div className="flex space-x-14">
                                <div className="flex flex-col space-y-3">
                                    <div className="text-white">
                                        <span>クラブ</span> :{" "}
                                        <a className="font-bold hover:underline cursor-pointer">
                                            {
                                                player.json_statistics
                                                    .statistics[0].team.name
                                            }
                                        </a>
                                    </div>
                                    <div className="text-white">
                                        <span>誕生日</span> :{" "}
                                        <span className="font-bold">
                                            {
                                                player.json_statistics.player
                                                    .birth.date
                                            }
                                            ({player.json_statistics.player.age}
                                            歳)
                                        </span>
                                    </div>
                                    <div className="text-white">
                                        <span>身長</span> :{" "}
                                        <span className="font-bold">
                                            {
                                                player.json_statistics.player
                                                    .height
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <div className="text-white">
                                        <span>ポジション</span> :{" "}
                                        <span className="font-bold">
                                            {
                                                player.json_statistics
                                                    .statistics[0].games
                                                    .position
                                            }
                                        </span>
                                    </div>
                                    <div className="text-white">
                                        <span>国籍</span> :{" "}
                                        <span className="font-bold">
                                            {
                                                player.json_statistics.player
                                                    .nationality
                                            }
                                        </span>
                                    </div>
                                    <div className="text-white">
                                        <span>体重</span> :{" "}
                                        <span className="font-bold">
                                            {
                                                player.json_statistics.player
                                                    .weight
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
