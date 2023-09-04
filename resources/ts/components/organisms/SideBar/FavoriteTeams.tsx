import { useGetFavoriteApi } from "../../../hooks/useGetFavoriteApi";
import { Loading } from "./Loading";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

export const FavoriteTeams = () => {
    const { favorites, loading } = useGetFavoriteApi("teams");

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                favorites.map((favorite, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between"
                    >
                        <div
                            className="flex items-center space-x-1"
                            style={{ overflow: "hidden" }}
                        >
                            <img
                                src={favorite.team.logo}
                                alt={favorite.team.code}
                                className="h-4 w-4"
                            />
                            <div className="flex items-center justify-between">
                                <p className="text-[#EEEEEE] text-[15px] my-1">
                                    {favorite.team.name}
                                </p>
                            </div>
                        </div>
                        <IconButton
                            sx={{
                                color: "#B0EE1B",
                            }}
                        >
                            <Tooltip
                                title={"お気に入りから削除する！"}
                                placement="right"
                                arrow={true}
                            >
                                <SportsSoccerIcon
                                    sx={{
                                        fontSize: "20px",
                                    }}
                                />
                            </Tooltip>
                        </IconButton>
                    </div>
                ))
            )}
        </div>
    );
};
