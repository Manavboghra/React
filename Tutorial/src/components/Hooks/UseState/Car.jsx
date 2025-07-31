import React, { useState } from "react";

export const Car = () => {
  const [car, setCar] = useState({
    name: "Mini Couper",
    country: "Germany",
    color: "Red",
    year: 2002,
  });
  const changeColor = () => {
    setCar((prev) => {
      return { ...prev, color: "Blue" };
    });
  };
  return (
    <div>
      <h1>The {car.name}</h1>
      <h1>
        It is from {car.country}, with {car.color} Color, since {car.year}{" "}
      </h1>
      <button onClick={changeColor}>Blue</button>
    </div>
  );
};
