import { TeamsLoading } from "./Loading/TeamsLoading";
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../../functions/Utils";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import StadiumIcon from "@mui/icons-material/Stadium";

export const Teams = ({ teams, loading, maxSeason }) => {
    const navigate = useNavigate();

    const handleTeamsClick = (teamId, season) => {
        navigate(`/team/${teamId}/season/${season}`);
    };

    // ローディングを表示
    if (loading) {
        return <TeamsLoading />;
    }

    return (
        <div className="mt-2">
            <div className="bg-[#111931] text-[#EEEEEE] text-[18px] font-bold py-1 rounded">
                <h1 className="ml-3">チーム一覧</h1>
            </div>
            <div className="bg-[#1d2233] mt-[1px]">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                            m: 4,
                            width: 350,
                            height: 120,
                        },
                    }}
                >
                    {teams.map((team, index) => (
                        <Paper
                            elevation={10}
                            key={index}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "#111931",
                                transition: "background-color 0.3s",
                                "&:hover": {
                                    backgroundColor: "#2D3B52",
                                    cursor: "pointer",
                                },
                            }}
                            onClick={() =>
                                handleTeamsClick(
                                    team.json_information.team.id,
                                    maxSeason
                                )
                            }
                        >
                            <img
                                src={imageUrl(
                                    "teams",
                                    team.json_information.team.id,
                                    "png"
                                )}
                                className="h-16 w-16 ml-4"
                            />
                            <div className="ml-2">
                                <span className="text-[18px] font-bold text-white">
                                    {team.json_information.team.name}
                                </span>
                                <div className="flex space-x-2 text-[#EEEEEE]">
                                    <StadiumIcon />
                                    <span>
                                        {team.json_information.venue.name}
                                    </span>
                                </div>
                            </div>
                        </Paper>
                    ))}
                </Box>
            </div>
        </div>
    );
};
