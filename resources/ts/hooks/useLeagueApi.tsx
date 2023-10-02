import { useState, useEffect } from "react";
import axios from "axios";

export const useLeagueAPI = () => {
    const [leagues, setLeagues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        
        const fetchLeagues = async () => {
            try {
                const response = await axios.get("/api/leagues");

                console.log("リーグ一覧API", response.data);

                setLeagues(response.data);

                setLoading(false);
            } catch (error) {
                setError(error.response.status);
                setLoading(false);
            }
        };

        fetchLeagues();
    }, []);

    return [leagues, loading, error];
};
