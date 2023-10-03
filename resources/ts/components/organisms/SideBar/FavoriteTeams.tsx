import { Loading } from "./Loading";
import { NoFavoriteMessage } from "../../molecules/NoFavoriteMessage";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Button } from "../../atoms/Button";

export const FavoriteTeams = ({
    favorites,
    loading,
    deleteFavorite,
    setFavoritesTeam,
}) => {
    const handleDeleteFavorite = (teamId) => {
        // favorites ステートから削除対象のリーグを除外する
        const updatedFavorites = favorites.filter(
            (favorite) => favorite.team.id !== teamId
        );

        setFavoritesTeam(updatedFavorites);

        deleteFavorite(teamId);
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
                        <Button style={"hover:underline"}>
                            <div
                                className="flex items-center space-x-1"
                                style={{ overflow: "hidden" }}
                            >
                                <img
                                    src={favorite.team.logo}
                                    alt={favorite.team.code}
                                    className="h-5 w-5 bg-white border border-white rounded-md"
                                />
                                <p className="text-[#EEEEEE] text-[15px] my-1">
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
