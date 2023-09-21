import { useEffect, useState } from "react";
import axios from "axios";

export const useUserApi = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/user`);
                console.log(response.data);
                setUser(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error getting user:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { user, loading };
};
