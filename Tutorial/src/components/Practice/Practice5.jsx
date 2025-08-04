import React, { useState } from "react";

function EnhancedComponents(OrignalComponents) {
  return function newFunction(props) {
    const [count, setCount] = useState(0);
    const handleClick = () => {
      setCount((prev) => prev + 1);
    };

    return (
      <div>
        <OrignalComponents {...props} count={count} handleClick={handleClick} />
      </div>
    );
  };
}
export default EnhancedComponents