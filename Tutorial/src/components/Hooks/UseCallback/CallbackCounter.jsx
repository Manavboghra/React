import React, { useCallback, useState } from "react";

function Counter({ onClick }) {
  console.log("creating function..");
  return <button onClick={onClick}>Click</button>;
}

const CounterData = React.memo(Counter);
export const CallbackCounter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback( () => {
    setCount((prev) => prev + 1);
  },[])
  return (
    <div>
      <h1>{count}</h1>
      <CounterData onClick={increment} />
    </div>
  );
};
