import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useNewUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    console.log("Contexto não encontrado");
  }
  console.log(context.name)

  return {
    user: {
      name: context.name,
      email: context.email,
      password: context.password,
    },
  };
};
