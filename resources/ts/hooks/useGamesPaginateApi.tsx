import { useEffect, useState } from "react";
import axios from "axios";

export const useGamesPaginateApi = (teamId, season) => {
    const [games, setGames] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState([]);
    const [currentPage, setCurrentPage] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentSeason, setCurrentSeason] = useState(season);
    const [currentTeamId, setCurrentTeamId] = useState(teamId);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/games/team/${teamId}/season/${season}?page=${page}`
                );
                console.log(response.data);
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
        
        if (season !== currentSeason || teamId !== currentTeamId) {
            // シーズンまたはチームIDが変わった場合、gamesをリセット
            setGames([]);
            setPage(1);
            setCurrentPage([]);
            setLastPage([]);
            setCurrentSeason(season);
            setCurrentTeamId(teamId);
        } else {
            fetchData();
        }
    }, [teamId, season, page, currentSeason, currentTeamId]);

    return [games, loading, setPage, lastPage, currentPage, error];
};
