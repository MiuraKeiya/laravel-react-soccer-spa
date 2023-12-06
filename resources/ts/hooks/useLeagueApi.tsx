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

                setLeagues(response.data);

                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchLeagues();
    }, []);

    return [leagues, loading, error];
};
