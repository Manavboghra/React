import React, { useState } from "react";

export const Hover = ({count,handleClick}) => {
  return (
    <>
      <button onMouseOver={handleClick}>Hover {count} times</button>
    </>
  );
};
