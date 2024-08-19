import { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { collection, query, where, orderBy, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import { useUtils } from '../context/UtilsContext';

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  const { setLoading, setError } = useUtils();
  const [documents, setDocuments] = useState([]);
  const [cancelled, setCancelled] = useState(false);

  const getDocuments = async () => {
    if (cancelled) return;
    setLoading(true);

    const collectionRef = collection(db, docCollection);

    try {
      let q;
      q = query(collectionRef, orderBy('createdAt', 'desc'));

      await onSnapshot(q, (QuerySnapshot) => {

        setDocuments(
          QuerySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
      })
      setLoading(false);

    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }

  };

  useEffect(() => {
    getDocuments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docCollection, search, uid, cancelled]);

  useEffect(() => {
    return () => {
      setCancelled(true);
    };
  }, []);

  return {
    documents,
  }

}
