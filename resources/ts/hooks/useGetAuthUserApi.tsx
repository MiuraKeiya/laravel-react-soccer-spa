import { useState, useEffect } from "react";
import axios from "axios";

export const useGetAuthUserApi = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await axios.get("/api/user");
                console.log("ユーザーAPI", response.data);
                setUser(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error getting user:", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return [user, loading, error];
};
