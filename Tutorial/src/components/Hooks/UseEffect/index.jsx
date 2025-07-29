import React, { useEffect, useState } from "react";

export const EffectTest = () => {
    const [state, setState] = useState("Get")
    const handleChange=(e)=>{
        setState(e.target.value)
    }
    useEffect(() => {
      console.log("Rendering...")
      console.log("Current State:",state)
    }, [state])
    
  return (
    <>
      <button value="Get" onClick={handleChange}>Get</button>
      <button value="Search" onClick={handleChange}>Search</button>
      <button value="Post" onClick={handleChange}>Post</button>
       <p>Current Selected: {state}</p> 
    </>
  );
};
