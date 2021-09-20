import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Stops fetch if not needed.
    const abortCont = new AbortController();

    // Retrieves Data from json
    fetch(url, {signal: abortCont.signal})
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Fetch Aborted');
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      })
    
    return () => abortCont.abort();
  }, [url])
  return {data, isLoading, error}
}
 
export default useFetch;