import React, { useState } from "react";

export default function NewUpdatedFunc(Orignalfunction, nums) {
  return function newFunction(props) {
    const [hover, setHover] = useState(0);
    const handleChange = () => {
      setHover((prev) => prev + nums);
    };
    return (
      <Orignalfunction {...props} hover={hover} handleChange={handleChange} />
    );
  };
}
