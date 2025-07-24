import React,{useState} from "react";

export const Wrapper = ({render}) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return render({count, handleClick})
};