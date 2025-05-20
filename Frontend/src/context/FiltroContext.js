import { createContext, useContext } from "react";

export const FiltroContext = createContext();

export const useFiltro = () => useContext(FiltroContext);