import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [gameData, setGameData] = useState();

    const updateGameData = (newData) => {
        setGameData(newData);
    }

    return (
        <DataContext.Provider value={{ gameData, updateGameData}}>
            {children}
        </DataContext.Provider>
    )
};


export const useDataContext = () => useContext(DataContext)