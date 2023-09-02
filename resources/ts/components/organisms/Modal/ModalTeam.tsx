import { useState, useEffect } from "react";
import { useLeadingTeamApi } from "../../../hooks/useLeadingTeamApi";
import { Loading } from "./Loading";
import { useFavoriteApi } from "../../../hooks/useFavoriteApi";
import { useGetFavoriteApi } from "../../../hooks/useGetFavoriteApi";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

export const ModalTeam = () => {
    const { favorites } = useGetFavoriteApi("teams");
    const { addFavorite, deleteFavorite } = useFavoriteApi("teams");
    const { leadingTeam, loading } = useLeadingTeamApi();
    const [favoriteStates, setFavoriteStates] = useState([]);
    console.log(favorites);
    useEffect(() => {
        // 初期表示時のお気に入りの状態を設定する
        const initialFavoriteStates = leadingTeam.map((team) => ({
            id: team.id,
            isFavorite: favorites.some(
                (favorite) => favorite.team.id === team.id
            ),
        }));

        setFavoriteStates(initialFavoriteStates);
        console.log(initialFavoriteStates);
    }, [favorites, leadingTeam]);

    const handleFavoriteClick = (id) => {
        // idに対応するチームのお気に入りの状態を切り替える
        const newFavoriteStates = [...favoriteStates];

        const teamIndex = newFavoriteStates.findIndex((team) => team.id === id);

        newFavoriteStates[teamIndex].isFavorite =
            !newFavoriteStates[teamIndex].isFavorite;

        setFavoriteStates(newFavoriteStates);

        if (newFavoriteStates[teamIndex].isFavorite) {
            addFavorite(id); // チームをお気に入りに追加
        } else {
            deleteFavorite(id); // チームのお気に入り登録を削除
        }
    };

    return (
        <div className="text-white">
            {loading ? (
                <Loading />
            ) : (
                leadingTeam.map((team, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 my-2">
                                <img
                                    src={team.teamLogo}
                                    alt="league"
                                    className="h-10 w-10 border border-white rounded-lg"
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
                                    color: favoriteStates.find(
                                        (item) => item.id === team.id
                                    )?.isFavorite
                                        ? "#B0EE1B"
                                        : "white",
                                }}
                                onClick={() => handleFavoriteClick(team.id)}
                            >
                                <Tooltip
                                    title={
                                        favoriteStates.find(
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
                    </div>
                ))
            )}
        </div>
    );
};
