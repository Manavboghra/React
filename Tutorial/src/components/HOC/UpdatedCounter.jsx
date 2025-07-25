import React, { useState } from "react";

export default function UpdatedCounter(OriginalCounter,incrementNumber) {
  return function newCounter(props) {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
      setCounter(counter + incrementNumber);
    };

    return (
      <OriginalCounter
        {...props}
        handleIncrement={handleIncrement}
        counter={counter}
      />
    );
  };
}
