import { useEffect, useState } from "react";
import axios from "axios";

export const useGamesPaginateApi = (teamId, season) => {
    const [games, setGames] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState([]);
    const [currentPage, setCurrentPage] = useState([]);
    const [gamesloading, setGamesLoading] = useState(true);

    useEffect(() => {
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

                setGamesLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setGamesLoading(false);
            }
        };

        fetchData();
    }, [teamId, season, page]);

    return { games, gamesloading, setPage, lastPage, currentPage };
};
