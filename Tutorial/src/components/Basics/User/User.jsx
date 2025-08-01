import React from "react";

export const User = () => {
  const handleNameChange = () => {
    const UserName = ["Joshph", "Tokiee", "Bambi"];
    const randomName = Math.floor(Math.random() * 3);
    return UserName[randomName]
  };  
  return <div>Hello {handleNameChange()}</div>;
};
