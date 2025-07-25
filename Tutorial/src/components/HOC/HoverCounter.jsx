import React, { useState } from "react";
import UpdatedCounter from "./UpdatedCounter";

 function HoverCounter({handleIncrement,counter}) {
  return <div>
    <button onMouseOver={handleIncrement}>Click {counter} Times</button>
  </div>;
}
export default UpdatedCounter(HoverCounter,5)