import React, { useState } from "react";

export const Counter = ({count,handleClick}) => {
  return (
    <>
      <button onClick={handleClick}>Click {count} times</button>
    </>
  );
};
