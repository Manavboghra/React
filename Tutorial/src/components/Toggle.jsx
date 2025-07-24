import React from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = React.useState(initialCount);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <div>{count}</div>
    </div>
  );
};

export const App1 = () => {
  const [isVisible, setVisible] = React.useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!isVisible)}>Toggle</button>

      {/* {isVisible ? Counter({ initialCount: 42 }) : null} */}
      {isVisible ? <Counter initialCount={42} /> : null}
    </div>
  );
};