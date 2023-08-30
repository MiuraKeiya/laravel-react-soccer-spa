import { useLeadingTeamApi } from "../../../hooks/useLeadingTeamApi";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";

export const ModalTeam = () => {
    const { leadingTeam, loading } = useLeadingTeamApi();

    return (
        <div className="text-white">
            {!loading ? (
                // スケルトンローディング
                <div>
                    <div className="flex items-center space-x-2">
                        <Skeleton
                            width={45}
                            height={70}
                            animation="wave"
                            sx={{
                                backgroundColor: "#111931",
                                borderRadius: "7px",
                            }}
                        />
                        <div>
                            <Skeleton
                                variant="text"
                                width={210}
                                height={30}
                                animation="wave"
                                sx={{
                                    backgroundColor: "#111931",
                                }}
                            />
                            <Skeleton
                                variant="text"
                                width={210}
                                height={10}
                                animation="wave"
                                sx={{
                                    backgroundColor: "#111931",
                                }}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                leadingTeam.map((team, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 my-2">
                                <img
                                    src={team.teamLogo}
                                    alt="league"
                                    className="h-10 w-10 border border-white rounded-lg"
                                />
                                <div>
                                    <p>{team.teamName}</p>
                                    <div className="flex">
                                        <p className="text-[12px] text-[#C8CDCD]">
                                            {team.league} / {team.country}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <IconButton sx={{ color: "#B0EE1B" }}>
                                <Tooltip
                                    title="お気に入り追加する！"
                                    placement="left-start"
                                >
                                    <SportsSoccerIcon />
                                </Tooltip>
                            </IconButton>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
