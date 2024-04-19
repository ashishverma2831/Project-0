import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser")) || null
    );

    
}

const useAppContext = ()=> useContext(AppContext);
export default useAppContext;