import { useEffect, useState } from "react";
import axios from "axios";

export const useGetFavoriteApi = (apiPath) => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setoError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/favorites/${apiPath}`);

                setFavorites(response.data);

                setFavorites(response.data);

                setLoading(false);
            } catch (error) {
                setoError(error);

                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return [favorites, loading, error, setFavorites];
};
