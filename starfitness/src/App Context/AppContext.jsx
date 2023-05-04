import { createContext } from "react";

export const AppDataManager = createContext();

export default function AppContext ({children}) {
    return(
        <AppDataManager.Provider>
            {children}
        </AppDataManager.Provider>
    )
}