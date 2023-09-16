import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export const PlayerStatistics = ({ statistics, season }) => {
    return (
        <div className="mt-2">
            <div className="bg-[#111931] py-1 text-[#EEEEEE] text-[18px] font-bold rounded flex space-x-2">
                <h1 className="ml-3">統計</h1>
                <span>
                    シーズン{season} - {parseInt(season) + 1}
                </span>
            </div>
            <div className="bg-[#1d2233] mt-[1px]">
                <div>
                    <h2 className="text-white text-[18px] font-bold ml-7">
                        試合
                    </h2>
                    {statistics.map((team, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    m: 3,
                                    width: 260,
                                    height: 100,
                                },
                            }}
                        >
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>出場数</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .games.appearences
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>出場時間(分)</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .games.minutes || 0
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>先発出場数</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .games.lineups || 0
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>総合評価</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .games.rating || 0
                                        : 0}
                                </span>
                            </Paper>
                        </Box>
                    ))}
                </div>
                <div>
                    <h2 className="text-white text-[18px] font-bold ml-7">
                        交代
                    </h2>
                    {statistics.map((team, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    m: 3,
                                    width: 260,
                                    height: 100,
                                },
                            }}
                        >
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>ベンチ</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .substitutes.bench
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>途中出場</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .substitutes.on || 0
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>途中交代</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .substitutes.out || 0
                                        : 0}
                                </span>
                            </Paper>
                        </Box>
                    ))}
                </div>
                <div>
                    <h2 className="text-white text-[18px] font-bold ml-7">
                        ゴール
                    </h2>
                    {statistics.map((team, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    m: 3,
                                    width: 260,
                                    height: 100,
                                },
                            }}
                        >
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>得点数</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .goals.total
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>アシスト</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .goals.assists || 0
                                        : 0}
                                </span>
                            </Paper>
                        </Box>
                    ))}
                </div>
                <div>
                    <h2 className="text-white text-[18px] font-bold ml-7">
                        シュート
                    </h2>
                    {statistics.map((team, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    m: 3,
                                    width: 260,
                                    height: 100,
                                },
                            }}
                        >
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>シュート数</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .shots.total
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>枠内シュート</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .shots.on || 0
                                        : 0}
                                </span>
                            </Paper>
                        </Box>
                    ))}
                </div>
                <div>
                    <h2 className="text-white text-[18px] font-bold ml-7">
                        パス
                    </h2>
                    {statistics.map((team, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    m: 3,
                                    width: 260,
                                    height: 100,
                                },
                            }}
                        >
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>パス数</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .passes.total
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>パス成功率</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .passes.accuracy || 0
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>キーパス</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .passes.key || 0
                                        : 0}
                                </span>
                            </Paper>
                        </Box>
                    ))}
                </div>
                <div>
                    <h2 className="text-white text-[18px] font-bold ml-7">
                        ドリブル
                    </h2>
                    {statistics.map((team, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    m: 3,
                                    width: 260,
                                    height: 100,
                                },
                            }}
                        >
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>ドリブル数</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .dribbles.attempts
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>ドリブル成功数</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .dribbles.success || 0
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>ドリブルパス</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .dribbles.past || 0
                                        : 0}
                                </span>
                            </Paper>
                        </Box>
                    ))}
                </div>
                <div>
                    <h2 className="text-white text-[18px] font-bold ml-7">
                        デュエル
                    </h2>
                    {statistics.map((team, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    m: 3,
                                    width: 260,
                                    height: 100,
                                },
                            }}
                        >
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>デュエル数</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .duels.total
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>勝利</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .duels.won
                                        : 0}
                                </span>
                            </Paper>
                        </Box>
                    ))}
                </div>
                <div>
                    <h2 className="text-white text-[18px] font-bold ml-7">
                        タックル
                    </h2>
                    {statistics.map((team, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    m: 3,
                                    width: 260,
                                    height: 100,
                                },
                            }}
                        >
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>タックル数</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .tackles.total
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>ブロック</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .tackles.blocks
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>インターセプト</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .tackles.interceptions
                                        : 0}
                                </span>
                            </Paper>
                        </Box>
                    ))}
                </div>
                <div>
                    <h2 className="text-white text-[18px] font-bold ml-7">
                        ファウル
                    </h2>
                    {statistics.map((team, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    m: 3,
                                    width: 260,
                                    height: 100,
                                },
                            }}
                        >
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>ファウル数</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .fouls.committed
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>受けたファウル</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .fouls.drawn
                                        : 0}
                                </span>
                            </Paper>
                        </Box>
                    ))}
                </div>
                <div>
                    <h2 className="text-white text-[18px] font-bold ml-7">
                        セーブ
                    </h2>
                    {statistics.map((team, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    m: 3,
                                    width: 260,
                                    height: 100,
                                },
                            }}
                        >
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>セーブ数</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .goals.saves
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>失点</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .goals.conceded
                                        : 0}
                                </span>
                            </Paper>
                        </Box>
                    ))}
                </div>
                <div>
                    <h2 className="text-white text-[18px] font-bold ml-7">
                        警告
                    </h2>
                    {statistics.map((team, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    m: 3,
                                    width: 260,
                                    height: 100,
                                },
                            }}
                        >
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>イエローカード</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .cards.yellow
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>レッドカード</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .cards.red
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#111931",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>ダブルイエローカード</span>
                                <span>
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .cards.yellowred
                                        : 0}
                                </span>
                            </Paper>
                        </Box>
                    ))}
                </div>
            </div>
        </div>
    );
};
