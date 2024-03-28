import { useState, useEffect } from "react";

const useFetch = (fetchFunction, ...params) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await fetchFunction(...params);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, [fetchFunction]);

  return { data, isLoading, error };
};

export default useFetch;
