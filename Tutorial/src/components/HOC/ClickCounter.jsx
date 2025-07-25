import React from "react";
import UpdatedCounter from "./UpdatedCounter";

function ClickCounter({handleIncrement,counter}) {
  return <div>
    <button onClick={handleIncrement}>Click {counter} Times</button>

  </div>;
}
export default UpdatedCounter(ClickCounter,1)

