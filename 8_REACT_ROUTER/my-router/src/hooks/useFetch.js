import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetcher, setFetcher] = useState(false);

  const fetchData = async (url, config = null) => {
    const delay = Math.random() * 1000;
    await new Promise(resolve => setTimeout(resolve, delay));

    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const json = await fetchData(url);
        setProducts(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url]);

  const httpRequest = async (data, method) => {
    if (!products) {
      setError('Sem produtos...');
      return;
    }

    const config = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };

    setLoading(true);
    setError(null);

    try {
      const json = await fetchData(url, config);
      if (method === 'POST') {
        setProducts(prevProducts => [...prevProducts, json]);
      }
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProducts = useCallback(async (productId) => {
    if (!products) return;

    const config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setLoading(true);
    setError(null);

    try {

      await fetchData(`${url}${productId}`, config);
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    setFetcher(!fetcher);
  }, [fetcher, url, products]);

  return { products, loading, error, httpRequest, deleteProducts };
};
