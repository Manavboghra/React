import React, { useState,useMemo } from "react";

export const DoubleNumber = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  const handleDouble = (e) => {
    setInput(e.target.value);
  };

  function ExpensiveTask(num) {
    console.log("re-calculate for ", input);
    for (let i = 0; i <= 100; i++) {}
    return num * 2;
  }

  let DoubleValue = useMemo(() => ExpensiveTask(input), [input]);

  return (
    <div>
      <button onClick={handleClick}>Number: {count}</button>
      <br />
      <input
        type="number"
        placeholder="Enter number"
        value={input}
        onChange={handleDouble}
      />
      <h5>Double:{DoubleValue}</h5>
    </div>
  );
};
