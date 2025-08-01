import React, { useState } from "react";

export const Passgenerator = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(true);
  const [pass, setPass] = useState();
  return (
    <div>
      <input
        type="range"
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
      {count}
      <input
        type="checkbox"
        checked={number ? true : false}
        onChange={(e) => {
          console.log(e.target.checked);
          setNumber(e.target.checked);
        }}
      />
      Number
      <input
        type="checkbox"
        checked={char ? true : false}
        onChange={(e) => {
          console.log(e.target.checked);
          setChar(e.target.checked);
        }}
      />
      Character
    </div>
  );
};
