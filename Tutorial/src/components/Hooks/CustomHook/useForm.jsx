import React,{useState} from "react";

export const useForm = (init) => {
  const [Name, setName] = useState(init);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const inputValue = {
    type: "text",
    onChange: { handleName },
    value: Name,
  };
  return {inputValue};
};
