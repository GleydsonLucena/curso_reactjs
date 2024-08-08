import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useEffect } from "react";
import { useUtils } from "./useUtils";

export const useAutentication = () => {
  const { error, setError, loading, setLoading } = useUtils();

  return console.log("eutentication");
};
