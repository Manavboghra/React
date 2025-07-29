import React, { useReducer, useState } from "react";

export const ActionForm = () => {
  const ACTION = {
    INCREASE_AGE: "increase-age",
    CHANGE_NAME: "change-name",
    DELETE_NAME: "delete-name",
  };
  const reduce = (state, action) => {
    switch (action.type) {
      case ACTION.INCREASE_AGE:
        return { ...state, age: state.age + 1 };
      case ACTION.CHANGE_NAME:
        return { ...state, name: action.nextname };
      case ACTION.DELETE_NAME:
        return { ...state, name: "" };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reduce, { name: "Rolex", age: 30 });

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: ACTION.INCREASE_AGE });
        }}
      >
        {" "}
        + age
      </button>
      <input
        type="text"
        value={state.name}
        onChange={(e) => {
          dispatch({ type: ACTION.CHANGE_NAME, nextname: e.target.value });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION.DELETE_NAME, deleteName: "" });
        }}
      >
        Delete
      </button>

      <p>
        the Age of the {state.name} is {state.age}
      </p>
    </div>
  );
};
