import { useState, useEffect, useReducer } from "react";
import { db } from '../firebase/config';
import { collection, Timestamp, updateDoc } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
}

const updateReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { loading: true, error: null };
    case 'UPDATED_DOC':
      return { loading: false, error: null };
    case 'ERROR':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const useUpdateDocument = (docCollection) => {
  const [response, dispatch] = useReducer(updateReducer, initialState);
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  }

  const updateDocument = async (document) => {
    checkCancelBeforeDispatch({
      type: 'LOADING',
    });

    try {
      const newDocument = {
        ...document,
        createdAt: Timestamp.now()
      }

      const updatedDocument = await updateDoc(
        collection(db, docCollection),
        newDocument
      );

      checkCancelBeforeDispatch({
        type: "UPDATED_DOC",
        payload: updatedDocument,
      });

    } catch (error) {
      checkCancelBeforeDispatch({
        type: 'ERROR',
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    return () => {
      setCancelled(true);
    }
  }, []);


  return {
    updateDocument,
    response,
  }
}
