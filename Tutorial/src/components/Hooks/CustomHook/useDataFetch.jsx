import React, { useState, useEffect } from "react";

export const useDataFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const loadingData = await fetch(url);
      let fetchInfo = await loadingData.json();
      setIsLoading(false);
      setData(fetchInfo);
    };
    fetchData();
  }, [url]);
  return {data, isLoading}
};
