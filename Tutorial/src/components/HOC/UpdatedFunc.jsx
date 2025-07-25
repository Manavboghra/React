import React from "react";

export const UpdatedFunc = (OriginalComponents) => {
  function newFunction(props) {
    return <OriginalComponents Username="Hello!!, Admin" {...props} />;
  }
  return newFunction;
};
