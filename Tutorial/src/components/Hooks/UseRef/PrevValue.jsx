import React, { useState, useRef, useEffect } from "react";

export default function PrevValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count; // store previous value
  });

  return (
    <>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </>
  );
}