import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PlayerContext = createContext([]);

export const PlayerProvider = ({ children }) => {
    // 選手情報取得
    const [player, setPlayer] = useState([]);

    // 選手Idを格納
    const [id, setId] = useState(null);

    // エラーを格納
    const [error, setError] = useState([]);

    useEffect(() => {
        if (playerId !== null) {
            fetchData();
        }
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get(`/api/player/${id}`);

            const playerData = res.data;

            console.log(playerData);

            setPlayer(playerData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <PlayerContext.Provider value={{ player, setId, error }}>
            {children}
        </PlayerContext.Provider>
    );
};
