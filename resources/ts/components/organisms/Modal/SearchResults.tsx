import { useState, useEffect } from "react";
import { Loading } from "./Loading";
import { SearchError } from "./SearchError";
import { useFavoriteApi } from "../../../hooks/useFavoriteApi";
import { useGetFavoriteApi } from "../../../hooks/useGetFavoriteApi";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

export const SearchResults = ({ results, loading, searchQuery }) => {
    const { favorites } = useGetFavoriteApi("teams");
    const { addFavorite, deleteFavorite } = useFavoriteApi("teams");
    const [favoriteStates, setFavoriteStates] = useState([]);

    useEffect(() => {
        // 初期表示時のお気に入りの状態を設定する
        const initialFavoriteStates = results.map((result) => ({
            id: result.json_information.team.id,
            isFavorite: favorites.some(
                (favorite) =>
                    favorite.team.id === result.json_information.team.id
            ),
        }));

        setFavoriteStates(initialFavoriteStates);
        console.log(initialFavoriteStates);
    }, [favorites, results]);

    const handleFavoriteClick = (id) => {
        console.log(id);
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
        <div>
            {loading ? (
                <Loading />
            ) : results.length === 0 ? (
                <SearchError searchQuery={searchQuery} />
            ) : (
                results.map((result, index) => (
                    <div key={index} className="text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 my-2">
                                <img
                                    src={result.json_information.team.logo}
                                    alt="league"
                                    className="h-10 w-10 border border-white rounded-lg"
                                />
                                <div>
                                    <p>{result.json_information.team.name}</p>
                                    <div className="flex">
                                        <p className="text-[12px] text-[#C8CDCD]">
                                            {
                                                result.json_information.team
                                                    .country
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <IconButton
                                sx={{
                                    color: favoriteStates.find(
                                        (item) =>
                                            item.id ===
                                            result.json_information.team.id
                                    )?.isFavorite
                                        ? "#B0EE1B"
                                        : "white",
                                }}
                                onClick={() =>
                                    handleFavoriteClick(
                                        result.json_information.team.id
                                    )
                                }
                            >
                                <Tooltip
                                    title={
                                        favoriteStates.find(
                                            (item) =>
                                                item.id ===
                                                result.json_information.team.id
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
