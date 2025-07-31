import React, { useMemo,  useState } from "react";

export const Sorting = ({ numbers }) => {
  // const [counter, setCounter] = useState(0);
  const sortingData = useMemo(() => {
    console.log("sorting....");
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);
  return (
    <div>
      <h1>{sortingData.join(", ")}</h1>
      {/* <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        {counter}
      </button> */}
    </div>
  );
};
