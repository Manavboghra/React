import React, { useEffect, useState } from "react";

export const DataFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dataFetch = await fetch(
        "https://potterapi-fedeperin.vercel.app/en/characters"
      );
      let finalData = await dataFetch.json();
      setLoading(false);
      setData(finalData);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        "Loading....."
      ) : (
        <ul>
          {data.map((post, index) => (
            <li key={index}>{post.fullName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
