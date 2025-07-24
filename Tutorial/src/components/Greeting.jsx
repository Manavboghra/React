import React from "react";

export function Greeting({user}) {
  const greet = `Hello,${user}!`;
  return <Props value={greet} />;
}

function Props({ value }) {
  return (
      <h1>{value}</h1>
  );
}
