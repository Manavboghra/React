import React, { useState, useEffect } from "react";



export const UpdateTask = ({ products, setProducts }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [idChange, setIdChange] = useState("");

  useEffect(() => {
    if (products.length > 0 && idChange === "") {
      setIdChange(products[0].id.toString());
    }
  }, [products, idChange]);

  const handleTitleChangeByForm = (e) => {
    setTitle(e.target.value);
  };

  const handlePriceChangeByForm = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  const handleSubmit = (e) => {
    console.log(idChange)
    e.preventDefault();
    const idNum = Number(idChange);

    const PriceAsNumber = parseFloat(price);

    const updatedProducts = products.map((product) => {
      if (product.id === idNum) {
        return { ...product, title: title, price: PriceAsNumber };
      }
      return product;
    });
    setProducts(updatedProducts);

    setTitle("");
    setPrice(0);
    setIdChange(0);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 bg-gray-50 rounded-xl shadow-lg p-8 font-sans"
    >
     
      <h1 className="text-xl font-bold text-center">Update Task</h1>
      <label htmlFor="text" className="block mb-2 text-gray-700 font-semibold">
        Name
        <input
          name="text"
          id="text"
          type="text"
          value={title}
          onChange={handleTitleChangeByForm}
          className="block w-full mt-2 mb-4 px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </label>
      <label
        htmlFor="number"
        className="block mb-2 text-gray-700 font-semibold"
      >
        Price
      </label>
      <input
        id="number"
        value={price}
        type="number"
        onChange={handlePriceChangeByForm}
        className="block w-full mt-2 mb-4 px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <div className="mb-4">
        <h1>ID</h1>
        <select
          value={idChange}
          onChange={(e) => {
            setIdChange(e.target.value);
          }}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.id}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};
