import React, { useState, useCallback } from "react";

function Button({ onClick }) {
  console.log("Button");
  return <button onClick={onClick}>+</button>;
}

const CounterData = React.memo(Button);
export const Practice4 = () => {
  const [count, setCount] = useState(0);
  const [incre, setIncre] = useState(5);
  const increment = useCallback(
    () => {
    console.log("render..");
    setCount((prev) => prev + 1);
  },
    [count],
  )
  

  return (
    <div>
      {count}

      <CounterData onClick={increment} />
      {incre}
      <button onClick={() => setIncre((prev) => prev + 2)}>++</button>
    </div>
  );
};
