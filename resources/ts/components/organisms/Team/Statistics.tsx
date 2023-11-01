import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { StatisticsTable } from "./StatisticsTable";

export const Statistics = ({ informations }) => {
    return (
        <div className="bg-[#1d2233] mt-2 rounded">
            <h1 className="text-white font-bold text-[20px] pl-4">統計</h1>
            {informations.map((statistic, index) => (
                <div
                    key={index}
                    className="flex justify-center items-center flex-col"
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            "& > :not(style)": {
                                m: 1,
                                width: 190,
                                height: 110,
                            },
                            "@media (max-width: 1023px)": {
                                justifyContent: "center",
                            },
                        }}
                    >
                        <Paper
                            elevation={10}
                            sx={{
                                background:
                                    "linear-gradient(70deg, blue, black)",
                            }}
                        >
                            <div className="pl-4 pt-2">
                                <h2 className="text-[20px] text-[#EEEEEE]">
                                    行われた試合
                                </h2>
                                <p className="text-[50px] font-bold text-white">
                                    {
                                        statistic.json_statistics.fixtures
                                            .played.total
                                    }
                                </p>
                            </div>
                        </Paper>
                        <Paper
                            elevation={10}
                            sx={{
                                background:
                                    "linear-gradient(70deg, blue, black)",
                            }}
                        >
                            <div className="pl-4 pt-2">
                                <h2 className="text-[20px] text-[#EEEEEE]">
                                    勝利数
                                </h2>
                                <p className="text-[50px] font-bold text-white">
                                    {
                                        statistic.json_statistics.fixtures.wins
                                            .total
                                    }
                                </p>
                            </div>
                        </Paper>
                        <Paper
                            elevation={10}
                            sx={{
                                background:
                                    "linear-gradient(70deg, blue, black)",
                            }}
                        >
                            <div className="pl-4 pt-2">
                                <h2 className="text-[20px] text-[#EEEEEE]">
                                    敗数
                                </h2>
                                <p className="text-[50px] font-bold text-white">
                                    {
                                        statistic.json_statistics.fixtures.loses
                                            .total
                                    }
                                </p>
                            </div>
                        </Paper>
                        <Paper
                            elevation={10}
                            sx={{
                                background:
                                    "linear-gradient(70deg, blue, black)",
                            }}
                        >
                            <div className="pl-4 pt-2">
                                <h2 className="text-[20px] text-[#EEEEEE]">
                                    引分数
                                </h2>
                                <p className="text-[50px] font-bold text-white">
                                    {
                                        statistic.json_statistics.fixtures.draws
                                            .total
                                    }
                                </p>
                            </div>
                        </Paper>
                        <Paper
                            elevation={10}
                            sx={{
                                background:
                                    "linear-gradient(70deg, blue, black)",
                            }}
                        >
                            <div className="pl-4 pt-2">
                                <h2 className="text-[20px] text-[#EEEEEE]">
                                    ゴール数
                                </h2>
                                <p className="text-[50px] font-bold text-white">
                                    {
                                        statistic.json_statistics.goals.for
                                            .total.total
                                    }
                                </p>
                            </div>
                        </Paper>
                        <Paper
                            elevation={10}
                            sx={{
                                background:
                                    "linear-gradient(70deg, blue, black)",
                            }}
                        >
                            <div className="pl-4 pt-2">
                                <h2 className="text-[20px] text-[#EEEEEE]">
                                    無失点試合数
                                </h2>
                                <p className="text-[50px] font-bold text-white">
                                    {
                                        statistic.json_statistics.clean_sheet
                                            .total
                                    }
                                </p>
                            </div>
                        </Paper>
                    </Box>
                </div>
            ))}
            <div>
                <StatisticsTable informations={informations} />
            </div>
        </div>
    );
};
