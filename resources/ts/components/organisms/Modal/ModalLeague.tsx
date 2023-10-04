import { useEffect } from "react";
import { Loading } from "./Loading";
import { useNavigate } from "react-router-dom";
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
    maxSeason,
}) => {
    useEffect(() => {
        // 初回のレンダリング時だけお気に入りの初期状態を設定する
        if (
            !favoriteLoading &&
            favorites.length > 0 &&
            favoriteStatus.length === 0
        ) {
            const initialFavoriteStates = leagues.map((league) => ({
                id: league.id,
                isFavorite: favorites.some(
                    (favorite) => favorite.league_id === league.id
                ),
            }));

            setFavoriteStatus(initialFavoriteStates);
        } else if (!favoriteLoading && favoriteStatus.length === 0) {
            // favoriteStatusが空の場合
            const initialFavoriteStates = leagues.map((league) => ({
                id: league.id,
                isFavorite: false, // お気に入り状態を初期化
            }));

            setFavoriteStatus(initialFavoriteStates);
        }
    }, [favorites, leagues]);

    const navigate = useNavigate();

    const handleLeagueClick = (id, season) => {
        navigate(`/league/${id}/season/${season}`);
    };

    return (
        <div className="text-white">
            {leagueLoading || favoriteLoading ? (
                <Loading />
            ) : (
                leagues.map((league, index) => (
                    <div
                        key={index}
                        className="flex justify-between hover:bg-[#191E24] cursor-pointer transition duration-450 rounded-md"
                        onClick={() => handleLeagueClick(league.id, maxSeason)}
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
                            onClick={(e) => {
                                e.stopPropagation(); // クリックイベントの伝播を停止
                                handleFavoriteClick(league.id); // IconButtonのクリック処理を実行
                            }}
                        >
                            <Tooltip
                                followCursor
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
