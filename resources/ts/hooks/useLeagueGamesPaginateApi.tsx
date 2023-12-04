import { useEffect, useState } from "react";
import axios from "axios";

export const useLeagueGamesPaginateApi = (leagueId, season) => {
    const [games, setGames] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState([]);
    const [currentPage, setCurrentPage] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentSeason, setCurrentSeason] = useState(season);
    const [currentLeagueId, setCurrentLeagueId] = useState(leagueId);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/games/leagues/${leagueId}/seasons/${season}?page=${page}`
                );
                console.log("ページネーション", response.data);
                const newGames = response.data.data || [];

                setLastPage(response.data.last_page);

                setCurrentPage(response.data.current_page);

                // 前回のデータと新しいデータを結合してセット
                setGames((prevGames) => [...prevGames, ...newGames]);

                setLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setError(error);
                setLoading(false);
            }
        };

        // シーズンまたはリーグIDが変わった場合、gamesをリセット
        if (season !== currentSeason || leagueId !== currentLeagueId) {
            setGames([]);
            setPage(1);
            setCurrentPage([]);
            setLastPage([]);
            setCurrentSeason(season);
            setCurrentLeagueId(leagueId);
        } else {
            fetchData();
        }
    }, [leagueId, season, page, currentSeason, currentLeagueId]);

    return [games, loading, setPage, lastPage, currentPage, error];
};
