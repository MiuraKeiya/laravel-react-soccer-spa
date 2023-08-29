import { useState, useEffect } from "react";
import axios from "axios";

export const useLeagueAPI = () => {
    const [leagues, setLeagues] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLeagues = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await axios.get("/api/leagues");

                setLeagues(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchLeagues();
    }, []);

    return { leagues, isLoading, error };
};
