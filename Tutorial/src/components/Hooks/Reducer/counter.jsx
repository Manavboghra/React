import React, { useReducer } from "react";

export const LimitedCounter = () => {
  const reducer = (state, action) => {
    switch (action.Type) {
      case "INCREASE": {
        const num = state.count + 1;
        const validateNum = num > 5;
        return {
          ...state,
          err: validateNum ? "Maximum Number reached" : null,
          count: validateNum ? state.count : num,
        };
      }

      case "DECREASE": {
        const num = state.count - 1;
        const validateNum = num < 0;
        return {
          ...state,
          err: validateNum ? "Minimum Number reached" : null,
          count: validateNum ? state.count : num,
        };
      }
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, err: null });
  return (
    <>
      {state.count}
      {state.err && <p style={{ color: "red" }}>{state.err}</p>}
      <button
        onClick={() => {
          dispatch({ Type: "INCREASE" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ Type: "DECREASE" });
        }}
      >
        -
      </button>
    </>
  );
};
