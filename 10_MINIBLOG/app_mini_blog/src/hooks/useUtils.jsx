import { useContext } from "react";
import { UtilsContext } from "../context/UtilsContext";

export const useUtils = () => {
  const context = useContext(UtilsContext);

  if (!context) {
    console.log("Contexto não encontrado");
  }

  return context;
};
