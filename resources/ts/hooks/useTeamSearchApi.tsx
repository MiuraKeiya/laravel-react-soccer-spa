import { useState, useEffect } from "react";
import axios from "axios";

export const useTeamSearchApi = (searchQuery) => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let timeoutId; // setTimeout の ID を保持

        const searchTeams = async () => {
            try {
                setLoading(true);

                if (searchQuery) {
                    const response = await axios.get("/api/search", {
                        params: { query: searchQuery },
                    });

                    setSearchResults(response.data);
                    setLoading(false);
                }
            } catch (error) {
                console.error("検索エラー:", error);
            }
        };

        setLoading(true);

        // 前回のsetTimeoutをクリア
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // 新しいsetTimeoutをセット
        if (searchQuery) {
            timeoutId = setTimeout(() => {
                searchTeams();
            }, 1000); // 1000ミリ秒（1秒）のディレイを設定
        } else {
            setSearchResults([]);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [searchQuery]);

    return { searchResults, loading };
};
