import { useState, useEffect } from "react";
import axios from "axios";

export const useLogoutApi = () => {
    const [logout, setLogout] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`/api/logout`);
                console.log(response.data);
                setLogout(response.data);
                setLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { logout, loading };
};
