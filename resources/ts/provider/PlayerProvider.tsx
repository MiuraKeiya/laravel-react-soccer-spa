import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PlayerContext = createContext([]);

export const PlayerProvider = ({ children }) => {
    // 選手情報取得
    const [playerData, setPlayerData] = useState([]);

    // 選手Idを格納
    const [id, setId] = useState(null);

    // エラーを格納
    const [error, setError] = useState([]);

    useEffect(() => {
        setPlayerData([]);
        setError([]);

        if (id !== null) {
            fetchData();
        }
    }, [id]);

    const fetchData = async () => {
        try {
            const res = await axios.get(`/api/player/${id}`);

            const player = res.data;

            console.log(player);

            setPlayerData(player);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <PlayerContext.Provider value={{ playerData, setId, error }}>
            {children}
        </PlayerContext.Provider>
    );
};
