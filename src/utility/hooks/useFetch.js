import { useState, useEffect } from 'react';
export const useFetch = (enpoint, options) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchData() {
    try {
      const res = await enpoint(options);
      setResponse(res);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return { response, error, isLoading };
};
