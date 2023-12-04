import { Loading } from "./Loading";
import { useNavigate } from "react-router-dom";
import { NoFavoriteMessage } from "../../molecules/NoFavoriteMessage";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Button } from "../../atoms/Button";
import { imageUrl } from "../../../functions/Utils";

export const FavoriteTeams = ({
    favorites,
    loading,
    deleteFavorite,
    setFavoritesTeam,
    maxSeason,
    toggleSidebar,
}) => {
    const handleDeleteFavorite = (teamId) => {
        // favorites ステートから削除対象のリーグを除外する
        const updatedFavorites = favorites.filter(
            (favorite) => favorite.team.id !== teamId
        );

        setFavoritesTeam(updatedFavorites);

        deleteFavorite(teamId);
    };

    const navigate = useNavigate();

    const handleTeamClick = (id, season) => {
        toggleSidebar();
        navigate(`/team/${id}/season/${season}`);
    };

    return (
        <div>
            {loading ? (
                <Loading />
            ) : favorites.length === 0 ? (
                <NoFavoriteMessage text={"チーム"} />
            ) : (
                favorites.map((favorite, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between"
                    >
                        <Button
                            style={"hover:underline"}
                            onClick={() =>
                                handleTeamClick(favorite.team.id, maxSeason)
                            }
                        >
                            <div
                                className="flex items-center space-x-1"
                                style={{ overflow: "hidden" }}
                            >
                                <img
                                    src={imageUrl(
                                        "teams",
                                        favorite.team.id,
                                        "png"
                                    )}
                                    alt={favorite.team.code}
                                    className="h-5 w-5 bg-white border border-white rounded-md"
                                />
                                <p className="text-white text-opacity-80 text-[15px] my-1 font-semibold">
                                    {favorite.team.name}
                                </p>
                            </div>
                        </Button>
                        <Tooltip
                            title={"お気に入りから削除する！"}
                            placement="right"
                            arrow={true}
                        >
                            <IconButton
                                sx={{
                                    color: "#B0EE1B",
                                }}
                                onClick={() =>
                                    handleDeleteFavorite(favorite.team.id)
                                }
                            >
                                <SportsSoccerIcon
                                    sx={{
                                        fontSize: "20px",
                                    }}
                                />
                            </IconButton>
                        </Tooltip>
                    </div>
                ))
            )}
        </div>
    );
};
