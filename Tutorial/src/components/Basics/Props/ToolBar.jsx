import React from "react";

export const ToolBar = () => {
  return (
    <div
      style={{ backgroundColor: "beige", margin: "20px" }}
      onClick={() => {
        {
          alert("You clicked on bar");
        }
      }}
    >
      <button
        style={{ margin: "33px" }}
        onClick={() => {
          {
            alert("Uploading....");
          }
        }}
      >
        Upload
      </button>
      <button
        style={{ margin: "33px" }}
        onClick={() => {
          {
            alert("Searching....");
          }
        }}
      >
        Search
      </button>
    </div>
  );
};

 const PassingProps = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export function AlertMessage() {
  return (
  <div onClick={()=>{alert("Helllo world")}}>
  <PassingProps onClick={()=>alert("Morning...")}>Morning</PassingProps>
  <PassingProps onClick={()=>alert("Nights...")}>Night</PassingProps>
    </div>
  )
}
