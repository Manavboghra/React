import React, { useState } from "react";

export const Hover = ({count,handleClick}) => {
  return (
    <>
      <button onMouseOver={handleClick}>Click {count} times</button>
    </>
  );
};
