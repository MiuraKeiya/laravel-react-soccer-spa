import { Loading } from "./Loading";
import { useNavigate } from "react-router-dom";
import { NoFavoriteMessage } from "../../molecules/NoFavoriteMessage";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Button } from "../../atoms/Button";

export const FavoriteLeagues = ({
    favorites,
    loading,
    deleteFavorite,
    setFavoritesLeague,
    maxSeason,
    toggleSidebar,
}) => {
    const handleDeleteFavorite = (leagueId) => {
        // favorites ステートから削除対象のリーグを除外する
        const updatedFavorites = favorites.filter(
            (favorite) => favorite.league.id !== leagueId
        );

        setFavoritesLeague(updatedFavorites);

        deleteFavorite(leagueId);
    };

    const navigate = useNavigate();

    const handleLeagueClick = (id, season) => {
        toggleSidebar();
        navigate(`/league/${id}/season/${season}`);
    };

    return (
        <div>
            {loading ? (
                <Loading />
            ) : favorites.length === 0 ? (
                <NoFavoriteMessage text={"リーグ"} />
            ) : (
                favorites.map((favorite, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between"
                    >
                        <Button
                            style={"hover:underline"}
                            onClick={() =>
                                handleLeagueClick(favorite.league.id, maxSeason)
                            }
                        >
                            <div
                                className="flex items-center space-x-1"
                                style={{ overflow: "hidden" }}
                            >
                                <img
                                    src={`https://media-3.api-sports.io/football/leagues/${favorite.league.id}.png`}
                                    alt={favorite.league.name}
                                    className="h-5 w-5 bg-white border border-white rounded-md"
                                />
                                <p className="text-[#EEEEEE] text-[15px] my-1">
                                    {favorite.league.name}
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
                                    handleDeleteFavorite(favorite.league.id)
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
