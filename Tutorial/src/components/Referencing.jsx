import React, { useRef, useState } from "react";

export const Referencing = () => {
    const [num, setNum] = useState(0)
    function handleclick1(){
        setNum(num +1)
    }
  let Index = useRef(0);
  function handleClick() {
    Index.current = Index.current + 1;
  }
  return (
    <>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleclick1}>setClick</button>
      <div>Click {Index.current} Times</div>
      <div>setClick {num} Times</div>
    </>
  );
};
