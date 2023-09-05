import { useGetFavoriteApi } from "../../../hooks/useGetFavoriteApi";
import { Loading } from "./Loading";
import { useFavoriteApi } from "../../../hooks/useFavoriteApi";
import { NoFavoriteMessage } from "../../molecules/NoFavoriteMessage";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Button } from "../../atoms/Button";

export const FavoriteLeagues = () => {
    const { favorites, setFavorites, loading } = useGetFavoriteApi("leagues");

    const { deleteFavorite } = useFavoriteApi("leagues");

    const handleFavoriteClick = (id) => {
        deleteFavorite(id);

        // ローカルのお気に入りリストからも削除
        setFavorites((prevFavorites) =>
            prevFavorites.filter((favorite) => favorite.league.id !== id)
        );
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
                        <Button style={"hover:underline"}>
                            <div
                                className="flex items-center space-x-1"
                                style={{ overflow: "hidden" }}
                            >
                                <img
                                    src={`https://media-3.api-sports.io/football/leagues/${favorite.league.id}.png`}
                                    alt={favorite.league.name}
                                    className="h-4 w-4"
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
                                    handleFavoriteClick(favorite.league.id)
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