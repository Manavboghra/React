import React, { useState } from "react";

export const WithoutMemo = ({ numbers }) => {
  const [counter, setCounter] = useState(0);
  console.log("Without Memo...");
  const dataSorting = [...numbers].sort((a, b) => a - b);
  return (
    <div>
      <h1>{dataSorting.join(", ")}</h1>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        {counter}
      </button>
    </div>
  );
};
