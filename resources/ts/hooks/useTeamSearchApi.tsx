import { useState, useEffect } from "react";
import axios from "axios";

export const useTeamSearchApi = (searchQuery) => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [typingTimeout, setTypingTimeout] = useState(null);
    const delay = 1300; // 遅延時間（ミリ秒単位）

    useEffect(() => {
        const searchTeams = async () => {
            try {
                setLoading(true);

                if (searchQuery) {
                    const response = await axios.get("/api/search", {
                        params: { query: searchQuery },
                    });

                    setSearchResults(response.data);
                } else {
                    setSearchResults([]);
                }

                setLoading(false);
            } catch (error) {
                console.error("Error fetching search results:", error);
                setLoading(false);
            }
        };

        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        setLoading(true); // 入力値が変更されたらすぐにローディングを表示

        if (searchQuery) {
            const timeout = setTimeout(() => {
                searchTeams();
            }, delay);

            setTypingTimeout(timeout);
        } else {
            setSearchResults([]);
            setLoading(false); // 入力が空の場合はすぐにローディングを非表示に
        }
    }, [searchQuery]);

    return { searchResults, loading };
};
