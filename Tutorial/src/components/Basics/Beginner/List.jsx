import React from "react";
const products = [
  { title: "Cabbage", isfruit: false, id: 1 },
  { title: "Garlic", isfruit: false, id: 2 },
  { title: "Apple", isfruit: true, id: 3 },
];

export const List = () => {
  const haveList = products.map((products) => {
    return (
      <li
        key={products.id}
        style={{ color: products.isfruit ? "royalblue" : "beige" }}
      >
        {products.title}
      </li>
    );
  });

  return (
    <>
      {/* <div>List</div> */}
      <ul>{haveList}</ul>
    </>
  );
};
