import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchLoading } from "./SearchLoading";
import { SearchError } from "./SearchError";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

export const SearchResults = ({
    results,
    loading,
    searchQuery,
    favoriteStatus,
    handleFavoriteClick,
    setFavoriteStatus,
    favorites,
    maxSeason,
}) => {
    useEffect(() => {
        // 初回のレンダリング時だけお気に入りの初期状態を設定する
        if (!loading && favorites.length > 0 && favoriteStatus.length === 0) {
            const initialFavoriteStates = results.map((result) => ({
                id: result.json_information.team.id,
                isFavorite: favorites.some(
                    (favorite) =>
                        favorite.team.id === result.json_information.team.id
                ),
            }));

            setFavoriteStatus(initialFavoriteStates);
        } else if (!loading && favoriteStatus.length === 0) {
            // favoriteStatusが空の場合
            const initialFavoriteStates = results.map((result) => ({
                id: result.json_information.team.id,
                isFavorite: false,
            }));

            setFavoriteStatus(initialFavoriteStates);
        } else if (!loading && favorites.length > 0) {
            // 既存のfavoriteStatusに追加する
            const updatedFavoriteStatus = favoriteStatus.concat(
                results
                    .filter(
                        (result) =>
                            !favoriteStatus.some(
                                (favorite) =>
                                    favorite.id ===
                                    result.json_information.team.id
                            )
                    )
                    .map((result) => ({
                        id: result.json_information.team.id,
                        isFavorite: favorites.some(
                            (favorite) =>
                                favorite.team.id ===
                                result.json_information.team.id
                        ),
                    }))
            );

            setFavoriteStatus(updatedFavoriteStatus);
        }
    }, [favorites, results]);

    const navigate = useNavigate();

    const handleTeamClick = (id, season) => {
        navigate(`/team/${id}/season/${season}`);
    };

    return (
        <div className="text-white">
            {loading ? (
                <SearchLoading />
            ) : results.length === 0 ? (
                <SearchError searchQuery={searchQuery} />
            ) : (
                results.map((result, index) => (
                    <div
                        key={index}
                        className="flex justify-between hover:bg-[#191E24] cursor-pointer transition duration-450 rounded-md"
                        onClick={() =>
                            handleTeamClick(
                                result.json_information.team.id,
                                maxSeason
                            )
                        }
                    >
                        <div className="flex items-center space-x-2 my-3 ml-2">
                            <img
                                src={result.json_information.team.logo}
                                alt="teamLogo"
                                className="h-10 w-10 border border-white rounded-lg bg-white"
                            />
                            <div>
                                <p>{result.json_information.team.name}</p>
                                <div className="flex">
                                    <p className="text-[12px] text-[#C8CDCD]">
                                        {result.json_information.team.country}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <IconButton
                            sx={{
                                color: favoriteStatus.find(
                                    (item) =>
                                        item.id ===
                                        result.json_information.team.id
                                )?.isFavorite
                                    ? "#B0EE1B"
                                    : "white",
                            }}
                            onClick={(e) => {
                                e.stopPropagation(); // クリックイベントの伝播を停止
                                handleFavoriteClick(
                                    result.json_information.team.id
                                ); // IconButtonのクリック処理を実行
                            }}
                        >
                            <Tooltip
                                title={
                                    favoriteStatus.find(
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
                ))
            )}
        </div>
    );
};
