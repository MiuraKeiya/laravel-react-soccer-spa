import { useState, useEffect } from "react";
import { useLeagueAPI } from "../../../hooks/useLeagueApi";
import { Loading } from "./Loading";
import { useGetFavoriteApi } from "../../../hooks/useGetFavoriteApi";
import { useFavoriteApi } from "../../../hooks/useFavoriteApi";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

export const ModalLeague = () => {
    const { addFavorite, deleteFavorite } = useFavoriteApi("leagues");
    const { favorites } = useGetFavoriteApi("leagues");
    const { leagues, isLoading } = useLeagueAPI();
    const [favoriteStates, setFavoriteStates] = useState([]);
console.log(favorites);
    useEffect(() => {
        // 初期表示時のお気に入りの状態を設定する
        const initialFavoriteStates = leagues.map((league) => ({
            id: league.id,
            isFavorite: favorites.some((favorite) => favorite === league.id),
        }));

        setFavoriteStates(initialFavoriteStates);
    }, [favorites, leagues]);

    const handleFavoriteClick = (id) => {
        // idに対応するリーグのお気に入りの状態を切り替える
        const newFavoriteStates = [...favoriteStates];

        const leagueIndex = newFavoriteStates.findIndex(
            (league) => league.id === id
        );

        newFavoriteStates[leagueIndex].isFavorite =
            !newFavoriteStates[leagueIndex].isFavorite;

        setFavoriteStates(newFavoriteStates);

        if (newFavoriteStates[leagueIndex].isFavorite) {
            addFavorite(id); // リーグをお気に入りに追加
        } else {
            deleteFavorite(id); // リーグのお気に入り登録を削除
        }
    };

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
                            <IconButton
                                sx={{
                                    color: favoriteStates.find(
                                        (item) => item.id === league.id
                                    )?.isFavorite
                                        ? "#B0EE1B"
                                        : "white",
                                }}
                                onClick={() => handleFavoriteClick(league.id)}
                            >
                                <Tooltip
                                    title={
                                        favoriteStates.find(
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
                    </div>
                ))
            )}
        </div>
    );
};
