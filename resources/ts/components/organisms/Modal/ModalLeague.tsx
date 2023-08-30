import { useLeagueAPI } from "../../../hooks/useLeagueApi";
import { Loading } from "./Loading";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

export const ModalLeague = () => {
    const { leagues, isLoading } = useLeagueAPI();

    return (
        <div className="text-white">
            {isLoading ? (
                <Loading />
            ) : (
                leagues.map((league) => (
                    <div key={league.id}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 my-2">
                                <img
                                    src={`https://media-3.api-sports.io/football/leagues/${league.id}.png`}
                                    alt="league"
                                    className="h-10 w-10 border border-white rounded-lg"
                                />
                                <p className="uppercase">{league.name}</p>
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
