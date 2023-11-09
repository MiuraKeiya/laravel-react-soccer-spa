import { PlayerStatisticTable } from "./PlayerStatisticTable";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export const PlayerStatistics = ({ statistics }) => {
    return (
        <div className="mt-2">
            <div className="bg-[#1d2233] mt-[1px] rounded">
                <div className="flex justify-center items-center flex-col">
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
                                "@media (max-width: 1023px)": {
                                    justifyContent: "center",
                                },
                            }}
                        >
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    background:
                                        "linear-gradient(70deg, blue, black)",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>出場数</span>
                                <span className="text-[25px]">
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .games.appearences || 0
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    background:
                                        "linear-gradient(70deg, blue, black)",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>出場時間(分)</span>
                                <span className="text-[25px]">
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
                                    background:
                                        "linear-gradient(70deg, blue, black)",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>得点数</span>
                                <span className="text-[25px]">
                                    {team.json_statistics.statistics[0].games
                                        .appearences !== null
                                        ? team.json_statistics.statistics[0]
                                              .goals.total || 0
                                        : 0}
                                </span>
                            </Paper>
                            <Paper
                                elevation={10}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    background:
                                        "linear-gradient(70deg, blue, black)",
                                    color: "white",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                <span>総合評価</span>
                                <span className="text-[25px]">
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
                <PlayerStatisticTable statistics={statistics} />
            </div>
        </div>
    );
};
