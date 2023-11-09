import { useState, useEffect } from "react";
import { useLeadingTeamApi } from "../../../hooks/useLeadingTeamApi";
import { Loading } from "./Loading";
import { useNavigate } from "react-router-dom";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

export const ModalTeam = ({
    teams,
    teamloading,
    favorites,
    favoritesLoading,
    favoriteStatus,
    setFavoriteStatus,
    handleFavoriteClick,
    maxSeason,
    close,
}) => {
    useEffect(() => {
        // 初回のレンダリング時だけお気に入りの初期状態を設定する
        if (
            !favoritesLoading &&
            favorites.length > 0 &&
            favoriteStatus.length === 0
        ) {
            const initialFavoriteStates = teams.map((team) => ({
                id: team.id,
                isFavorite: favorites.some(
                    (favorite) => favorite.team.id === team.id
                ),
            }));

            setFavoriteStatus(initialFavoriteStates);
        } else if (!favoritesLoading && favoriteStatus.length === 0) {
            // favoriteStatusが空の場合
            const initialFavoriteStates = teams.map((team) => ({
                id: team.id,
                isFavorite: false, // お気に入り状態を初期化
            }));

            setFavoriteStatus(initialFavoriteStates);
        }
    }, [favorites, teams]);

    const navigate = useNavigate();

    const handleTeamClick = (id, season) => {
        navigate(`/team/${id}/season/${season}`);
        close();
    };

    return (
        <div className="text-white">
            {teamloading || favoritesLoading ? (
                <Loading />
            ) : (
                teams.map((team, index) => (
                    <div
                        key={index}
                        className="flex justify-between hover:bg-[#191E24] cursor-pointer transition duration-450 rounded-md"
                        onClick={() => handleTeamClick(team.id, maxSeason)}
                    >
                        <div className="flex items-center space-x-2 my-3 ml-2">
                            <img
                                src={team.teamLogo}
                                alt="teamLogo"
                                className="h-10 w-10 border border-white rounded-lg bg-white"
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
                        <IconButton
                            sx={{
                                color: favoriteStatus.find(
                                    (item) => item.id === team.id
                                )?.isFavorite
                                    ? "#B0EE1B"
                                    : "white",
                            }}
                            onClick={(e) => {
                                e.stopPropagation(); // クリックイベントの伝播を停止
                                handleFavoriteClick(team.id); // IconButtonのクリック処理を実行
                            }}
                        >
                            <Tooltip
                                followCursor
                                title={
                                    favoriteStatus.find(
                                        (item) => item.id === team.id
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
