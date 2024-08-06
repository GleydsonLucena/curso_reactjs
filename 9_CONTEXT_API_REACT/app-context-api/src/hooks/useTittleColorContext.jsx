import { useContext } from "react";
import { TittleColorContext } from "../context/TittleColorContext";

export const useTittleColorContext = () => {
  const context = useContext(TittleColorContext);

  if (!context) return console.log("Contexto não encontrado!");

  return context;
};
