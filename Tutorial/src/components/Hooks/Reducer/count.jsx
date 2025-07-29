import React, { useReducer } from "react";

export const Count = () => {
  const reducer = (state,action) => {
    if(action.Type ==="INCREASE"){
      return state+1;
    }
    else {
      return state -1;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);
  return <>
  {state}
  <button onClick={()=>{dispatch({Type:"INCREASE"})}}>+</button>
  <button onClick={()=>{dispatch({Type:"DECREASE"})}}>-</button>
  </>;
};
