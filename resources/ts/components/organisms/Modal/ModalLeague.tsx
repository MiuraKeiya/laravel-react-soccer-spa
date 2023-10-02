import { useEffect } from "react";
import { Loading } from "./Loading";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

export const ModalLeague = ({
    leagues,
    leagueLoading,
    favorites,
    favoriteLoading,
    setFavoriteStatus,
    favoriteStatus,
    handleFavoriteClick,
}) => {
    useEffect(() => {
        // 初回のレンダリング時だけお気に入りの初期状態を設定する
        if (favorites && favorites.length > 0 && favoriteStatus.length === 0) {
            const initialFavoriteStates = leagues.map((league) => ({
                id: league.id,
                isFavorite: favorites.some(
                    (favorite) => favorite.league_id === league.id
                ),
            }));

            setFavoriteStatus(initialFavoriteStates);
        }
    }, [favorites, leagues]);

    return (
        <div className="text-white">
            {leagueLoading || favoriteLoading ? (
                <Loading />
            ) : (
                leagues.map((league, index) => (
                    <div
                        key={index}
                        className="flex justify-between hover:bg-[#191E24] cursor-pointer transition duration-450 rounded-md"
                    >
                        <div className="flex items-center space-x-2 my-3 ml-2">
                            <img
                                src={`https://media-3.api-sports.io/football/leagues/${league.id}.png`}
                                alt="league"
                                className="h-10 w-10 border border-white rounded-lg bg-white"
                            />
                            <p className="uppercase">{league.name}</p>
                        </div>
                        <IconButton
                            sx={{
                                color: favoriteStatus.find(
                                    (item) => item.id === league.id
                                )?.isFavorite
                                    ? "#B0EE1B"
                                    : "white",
                            }}
                            onClick={() => handleFavoriteClick(league.id)}
                        >
                            <Tooltip
                                title={
                                    favoriteStatus.find(
                                        (item) => item.id === league.id
                                    )?.isFavorite
                                        ? "お気に入りから削除する！"
                                        : "お気に入りに追加する！"
                                }
                                placement="left-start"
                            >
                                <SportsSoccerIcon />
                            </Tooltip>
                        </IconButton>
                    </div>
                ))
            )}
        </div>
    );
};
