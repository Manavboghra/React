import React, { useEffect, useState } from "react";
import { data, Link } from "react-router";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [titleChange, setTitleChange] = useState("");
  const [priceChange, setPriceChange] = useState(0);
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleTitleChange = (productId, NewTitle) => {
    const changeTitle = products.map((product) => {
      if (product.id === productId) {
        console.log(productId);

        return { ...product, title: NewTitle };
      }
      return product;
    });
    setProducts(changeTitle);
  };

  const handlePriceChange = (productId, NewPrice) => {
    const PriceAsNumber = parseFloat(NewPrice);

    if (isNaN(PriceAsNumber) || PriceAsNumber < 0) {
      return;
    }

    const changePrice = products.map((product) => {
      if (productId === product.id) {
        return { ...product, price: PriceAsNumber };
      }
      return product;
    });
    setProducts(changePrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePriceChangeByForm = (e) => {
    setTitleChange(e.target.value);
  };
  const handleTitleChangeByForm = (e) => {
    setPriceChange(e.target.value);
  };

  const handleSelect = (Id) => {
    const selectId = products.map((product) => {
      if (product.id === Id) {
        return { ...product, title: titleChange, price: priceChange };
      }
      return product
    });
    setProducts(selectId)
  };

  return (
    <div>
      <div className="h-20 justify-center w-full font-bold text-5xl flex text-center  items-center">
        Product List
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-7">
        {products.map((product) => (
          <article
            key={product.id}
            className="w-80 border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <Link to={`/products/${product.id}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-48 w-full object-cover rounded mb-2"
              />
            </Link>
            <h2 className="text-lg font-bold">
              <input
                type="text"
                value={product.title}
                onChange={(e) => handleTitleChange(product.id, e.target.value)}
              />
            </h2>
            <label>$</label>
            <input
              type="text"
              value={product.price}
              className="text-gray-600"
              onChange={(e) => handlePriceChange(product.id, e.target.value)}
            />
          </article>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">
          Name
          <input
            name="text"
            id="text"
            type="text"
            onChange={handleTitleChangeByForm}
          />
        </label>
        <label htmlFor="number">Price</label>{" "}
        <input id="number" type="numbrt" onChange={handlePriceChangeByForm} />
        <div>
          <select
            onSelect={(e) =>
              handleSelect(e.target.value, titleChange, priceChange)
            }
          >
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.id}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// export const ProductListLoader = async () => {
//   const response = await fetch(`https://dummyjson.com/products`);
//   const data = await response.json();
//   return data.products;
// };
