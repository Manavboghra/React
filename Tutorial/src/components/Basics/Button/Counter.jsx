import React, { useState } from "react";

export const Counter = ({count,handleClick}) => {
  console.log("I am changing")
  return (
    <>
      <button onClick={handleClick}>Click {count} times</button>
    </>
  );
};
