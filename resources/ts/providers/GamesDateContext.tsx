import { createContext, useState } from "react";

export const GamesDateContext = createContext([]);

export const GamesDateProvider = ({ children }) => {
    const [date, setDate] = useState(null);

    return (
        <GamesDateContext.Provider value={{ date, setDate }}>
            {children}
        </GamesDateContext.Provider>
    );
};
