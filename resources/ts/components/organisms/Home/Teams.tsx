import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TeamsLoading } from "./Loading/TeamsLoading";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Teams = ({ teams, loading, season }) => {
    const [showAllTeams, setShowAllTeams] = useState(false);

    const navigate = useNavigate();

    const handleToggleTeamsClick = () => {
        setShowAllTeams(!showAllTeams);
    };
    console.log(teams);

    const gradientColors = {
        "Premier League": "from-[#330066]",
        "La Liga": "from-[#993300]",
        "Serie A": "from-[#3366CC]",
        Bundesliga: "from-[#CC3300]",
        "Ligue 1": "from-[#99CC00]",
    };

    // チーム詳細ページへ遷移
    const handleTeamClick = (teamId, season) => {
        navigate(`/team/${teamId}/season/${season}`);
    };

    return (
        <div className="mx-3 py-3">
            <div className="mb-3">
                <h1 className="text-[#eeeeee] font-bold border-b pb-3 border-gray-500">
                    昨シーズン優勝チーム
                </h1>
            </div>
            {loading ? (
                <TeamsLoading />
            ) : (
                <div className="bg-[#10161c] rounded-lg">
                    <div className="px-3 py-3">
                        {teams
                            .slice(0, showAllTeams ? teams.length : 1)
                            .map((team) => (
                                <div key={team.id} className="mb-4">
                                    <div
                                        className={`flex text-[#EEEEEE] text-[15px] uppercase mb-2 font-semibold bg-gradient-to-tr rounded ${
                                            gradientColors[team.league] ||
                                            "from-[#10161c]"
                                        } px-1`}
                                    >
                                        <p>{team.league}</p>:
                                        <p>{team.country}</p>
                                    </div>
                                    <div
                                        className="flex items-center space-x-2 cursor-pointer"
                                        onClick={() =>
                                            handleTeamClick(team.id, season)
                                        }
                                    >
                                        <img
                                            src={team.teamLogo}
                                            alt={team.teamName}
                                            className="h-[2rem] w-[2rem]"
                                        />
                                        <p className="text-[#C8CDCD] text-[14px]">
                                            {team.teamName}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                    {teams.length > 1 && (
                        <div className="flex items-center justify-center pb-2">
                            <button
                                className="text-[#7A84FF] font-semibold text-[14px] hover:underline cursor-pointer flex items-center"
                                onClick={handleToggleTeamsClick}
                            >
                                <p>{showAllTeams ? "閉じる" : "全て表示"}</p>
                                {showAllTeams ? (
                                    <KeyboardArrowUpIcon />
                                ) : (
                                    <KeyboardArrowDownIcon />
                                )}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
