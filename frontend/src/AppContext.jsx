import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({children})=>{

}

const useAppContext = ()=> useContext(AppContext);
export default useAppContext;