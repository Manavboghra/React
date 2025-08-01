import React, { useState } from "react";
import { sculptureList } from "./Data";

{/* <sculptureList />; */}
export const DataExtract = () => {
  const [index, setindex] = useState(0);
  // const [previous, setPrevious] = useState(3);

  const handleNext=()=>{
    setindex(index + 1);
    if (index >= sculptureList.length - 1) {
      return setindex(sculptureList.length -1);
    }
  }
  const handlePrevious=()=>{
    setindex(index - 1);
    if (index <= sculptureList.length - sculptureList.length) {
      setindex(0);
    }
  }



  let sculpture = sculptureList[index];
  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>next</button>
      <h1>{sculpture.name}</h1>
      <p>({index+1} Of {sculptureList.length})  </p>
      <p>{sculpture.artist}</p>
      <p>{sculpture.description}</p>
      <img src={sculpture.url} alt={sculpture.name} />
    </div>
  );
};
