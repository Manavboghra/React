import React from "react";

export default function CaptureExample() {
  return (
    <div
      style={{ border: "2px solid red", padding: "20px" }}
      onClickCapture={() => {
        alert('Parent\'s onClickCapture runs first!');
        console.log("Parent onClickCapture runs first!");
      }}
      onClick={() => {
        alert("Parent's onClick (bubble) — won't fire if child stops propagation.");
        console.log("Parent onClick (bubble)");
      }}
    >
      <button
        onClick={e => {
          e.stopPropagation();
          alert("Button 1 clicked, bubbling stopped!");
          console.log("Button 1 clicked, bubbling stopped!");
        }}
      >
        Button 1
      </button>
      <button
        onClick={e => {
          e.stopPropagation();
          alert("Button 2 clicked, bubbling stopped!");
          console.log("Button 2 clicked, bubbling stopped!");
        }}
      >
        Button 2
      </button>
    </div>
  );
}
