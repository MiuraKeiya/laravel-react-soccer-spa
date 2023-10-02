import { useState } from "react";
import { ModalLeague } from "./ModalLeague";
import { ModalTeam } from "./ModalTeam";
import { useTeamSearchApi } from "../../../hooks/useTeamSearchApi";
import { useLeagueAPI } from "../../../hooks/useLeagueApi";
import { useLeadingTeamApi } from "../../../hooks/useLeadingTeamApi";
import { useGetFavoriteApi } from "../../../hooks/useGetFavoriteApi";
import { SearchResults } from "./SearchResults";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { useFavoriteApi } from "../../../hooks/useFavoriteApi";
import { Page } from "../../../Page";
import { useErrors } from "../../../hooks/useErrors";

export const ModalFavorite = ({ onClick }) => {
    // 検索欄に入力された値を保持するステート
    const [searchQuery, setSearchQuery] = useState("");

    // リーグ一覧
    const [leagues, leaguesLoading, leaguesError] = useLeagueAPI();

    // 主なチーム一覧
    const [leadingTeam, leadingTeamError, leadingTeamLoading] =
        useLeadingTeamApi();

    // お気に入りリーグ一覧
    const [favoriteLeague, favoriteLeagueLoading, favoriteLeagueError] =
        useGetFavoriteApi("leagues");

    // お気に入りチーム一覧
    const [favoriteTeam, favoriteTeamLoading] = useGetFavoriteApi("teams");

    // 検索結果
    const [searchResults, searchLoading, searchError] =
        useTeamSearchApi(searchQuery);

    // 検索欄に入力された値をクリアする
    const handleClear = () => {
        setSearchQuery("");
    };

    // 選択したリーグをお気に入り追加と削除
    const [addFavorite, deleteFavorite, favoriteError] =
        useFavoriteApi("leagues");

    const [favoriteStatus, setFavoriteStatus] = useState([]);

    const handleFavoriteClick = (id) => {
        // idに対応するリーグのお気に入りの状態を切り替える
        const newFavoriteStates = [...favoriteStatus];

        const leagueIndex = newFavoriteStates.findIndex(
            (league) => league.id === id
        );

        newFavoriteStates[leagueIndex].isFavorite =
            !newFavoriteStates[leagueIndex].isFavorite;

        setFavoriteStatus(newFavoriteStates);

        if (newFavoriteStates[leagueIndex].isFavorite) {
            addFavorite(id); // リーグをお気に入りに追加
        } else {
            deleteFavorite(id); // リーグのお気に入り登録を削除
        }
    };

    // 選択したチームをお気に入り追加と削除
    const [addTeamFavorite, deleteTeamFavorite, favoriteTeamError] =
        useFavoriteApi("teams");

    const [favoriteTeamStatus, setFavoriteTeamStatus] = useState([]);

    const handleFavoriteTeamClick = (id) => {
        // idに対応するチームのお気に入りの状態を切り替える
        const newFavoriteStates = [...favoriteTeamStatus];

        const teamIndex = newFavoriteStates.findIndex((team) => team.id === id);

        newFavoriteStates[teamIndex].isFavorite =
            !newFavoriteStates[teamIndex].isFavorite;

        setFavoriteTeamStatus(newFavoriteStates);

        if (newFavoriteStates[teamIndex].isFavorite) {
            addTeamFavorite(id); // チームをお気に入りに追加
        } else {
            deleteTeamFavorite(id); // チームのお気に入り登録を削除
        }
    };

    // 各エラーをまとめる
    const pageError = useErrors(
        leaguesError,
        favoriteError,
        favoriteLeagueError,
        leadingTeamError,
        favoriteTeamError,
        searchError
    );

    return (
        <Page error={pageError}>
            <div>
                <div className="sticky top-0 bg-[#010A0F] h-[9.6rem] z-10">
                    <div className="flex items-center justify-between border-b-2 border-[#111931] h-[3.5rem]">
                        <div className="flex space-x-1 ml-2">
                            <SportsSoccerIcon className="text-[#B0EE1B]" />
                            <h1 className="text-white font-bold">
                                お気に入り追加 / 検索
                            </h1>
                        </div>
                        <IconButton
                            color="inherit"
                            aria-label="close"
                            onClick={onClick}
                            sx={{ color: "#C8CDCD" }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className="mx-2">
                        <div className="relative my-4">
                            <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                                <SearchIcon className="text-[#C8CDCD]" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="チーム名を入力"
                                className="pl-8 pr-3 py-1 rounded-md border border-[#C8CDCD] w-full focus:outline-none focus:border-[#111931]"
                            />
                            {searchQuery && (
                                <div
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                                    onClick={handleClear}
                                >
                                    <ClearIcon style={{ color: "#C8CDCD" }} />
                                </div>
                            )}
                        </div>
                        <p className="text-[#C8CDCD] text-[12px]">
                            ※ 英語で入力してください。 例: Barcelona
                        </p>
                    </div>
                </div>
                <div className="mx-2">
                    {searchQuery !== "" ? (
                        <div>
                            <h1 className="text-[#EEEEEE] text-[14px] font-bold mb-2 ml-2">
                                検索結果
                            </h1>
                            <SearchResults
                                results={searchResults}
                                loading={searchLoading}
                                favorites={favoriteTeam}
                                searchQuery={searchQuery}
                                favoriteStatus={favoriteTeamStatus}
                                setFavoriteStatus={setFavoriteTeamStatus}
                                handleFavoriteClick={handleFavoriteTeamClick}
                            />
                        </div>
                    ) : (
                        <div className="mb-1">
                            <h1 className="text-[#EEEEEE] text-[14px] font-bold mb-2 ml-2">
                                全てのリーグ
                            </h1>
                            <ModalLeague
                                leagues={leagues}
                                leagueLoading={leaguesLoading}
                                favorites={favoriteLeague}
                                favoriteLoading={favoriteLeagueLoading}
                                setFavoriteStatus={setFavoriteStatus} // お気に入り状態を
                                favoriteStatus={favoriteStatus}
                                handleFavoriteClick={handleFavoriteClick} // お気に入り状態を更新するための関数を渡す
                            />
                            <h1 className="text-[#EEEEEE] text-[14px] font-bold mb-2 ml-2 mt-2">
                                主なチーム
                            </h1>
                            <ModalTeam
                                teams={leadingTeam}
                                teamloading={leadingTeamLoading}
                                favorites={favoriteTeam}
                                favoritesLoading={favoriteTeamLoading}
                                setFavoriteStatus={setFavoriteTeamStatus}
                                favoriteStatus={favoriteTeamStatus}
                                handleFavoriteClick={handleFavoriteTeamClick}
                            />
                        </div>
                    )}
                </div>
            </div>
        </Page>
    );
};
