import React, { useEffect, useState } from "react";

export const Practice7 = () => {
  const [facts, setFacts] = useState([]);
  
  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://meowfacts.herokuapp.com/?count=3"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const finalData = await response.json();
        setFacts(finalData.data);
      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 

  if (loading) {
    return (
      <div className="text-center p-10 text-lg font-semibold text-gray-500">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-10 text-lg font-semibold text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
          Interesting Facts
        </h1>
        <ul className="space-y-4">
          {facts.map((fact, index) => (
            <li 
              key={index} 
              className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg flex items-start gap-4"
            >
              <span className="text-indigo-600 font-bold text-xl mt-1">{index + 1}.</span>
              <p className="text-gray-700">{fact}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};