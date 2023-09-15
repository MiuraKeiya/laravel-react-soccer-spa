import { useEffect, useState } from "react";
import axios from "axios";

export const useLeagueGamesPaginateApi = (leagueId, season) => {
    const [pagenateGames, setPagenateGames] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState([]);
    const [currentPage, setCurrentPage] = useState([]);
    const [paginateLoading, setPaginateLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/games/leagues/${leagueId}/seasons/${season}?page=${page}`
                );
                console.log(response.data);
                const newGames = response.data.data || [];

                setLastPage(response.data.last_page);

                setCurrentPage(response.data.current_page);

                // 前回のデータと新しいデータを結合してセット
                setPagenateGames((prevGames) => [...prevGames, ...newGames]);

                setPaginateLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setPaginateLoading(false);
            }
        };

        fetchData();
    }, [leagueId, season, page]);

    return { pagenateGames, paginateLoading, setPage, lastPage, currentPage };
};
