import React, { useEffect, useState } from "react";
import { Link } from "react-router";
// import { UpdateTask } from "./Operation/UpdateTask";
// import { DeleteTask } from "./Operation/DeleteTask";
import { CreateTask } from "./Operation/CreateTask";
// import { SearchItems } from "./Operation/SearchItems";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const [isToggleCancel, setIsToggleCancel] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        return setProducts(data.products);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

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
    const PriceAsNumber = Number(NewPrice);

    if (isNaN(PriceAsNumber) || PriceAsNumber < 0) {
      return 0;
    }

    const changePrice = products.map((product) => {
      if (productId === product.id) {
        return { ...product, price: PriceAsNumber };
      }
      return product;
    });
    setProducts(changePrice);
  };

  const handleDeleteClick = (productId) => {
    setDeleteId(productId);
    setIsToggleCancel(true);
  };

  const confirmDelete = () => {
    setProducts(products.filter((product) => product.id !== deleteId));
    setIsToggleCancel(false);
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setIsToggleCancel(false);
    setDeleteId(null);
  };

  const onClose = () => {
    setIsToggle(false);
  };

  const handleCreateItem = () => {
    setIsToggle(!isToggle);
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      title: createTitle,
      price: createPrice,
      thumbnail: createThumbnail || [
        "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=",
      ],
    };
    setProducts([...products, newProduct]);
    setCreateTitle("");
    setCreatePrice("");
    setCreateThumbnail("");
  };

  return (
    <div>
      <div>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            <h1 className="text-5xl text-center ml-4">Loading.....</h1>
          </div>
        ) : (
          <div className="h-20 justify-center w-full font-bold text-5xl flex text-center items-center mb-4">
            Product List
          </div>
        )}
        <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mb-5">
          <div className="flex items-start justify-between gap-4">
            <div className="relative flex-1">
              <input
                id="search"
                type="text"
                placeholder="Search for an item..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoComplete="off"
                className="block w-full px-5 py-3 text-lg text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />

              {search && (
                <div className="absolute left-0 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-80 overflow-auto z-20">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className="flex items-center p-4 hover:bg-gray-100 transition"
                      >
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="w-16 h-16 object-cover rounded mr-4"
                        />
                        <div>
                          <div className="font-semibold text-lg">
                            {product.title}
                          </div>
                          <div className="text-gray-600 text-md">
                            ${product.price}
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="p-4 text-gray-500 text-lg">
                      No products found.
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-md whitespace-nowrap transition duration-200 shadow-md min-w-[140px]"
                onClick={handleCreateItem}
              >
                Create Item
              </button>
            </div>
          </div>

          {isToggle && (
            <CreateTask
              onClose={onClose}
              products={products}
              setProducts={setProducts}
            />
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-7">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <article className="w-80 border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-gray-500">
                  ID: {product.id}
                </span>

                {isToggleCancel && (
                  <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center p-4 z-50 ">
                    <div className="bg-white  p-6 rounded-lg border-2 border-gray-300 w-80">
                      <h2 className="text-lg font-semibold mb-4">
                        Confirm Deletion
                      </h2>
                      <p>Are you sure you want to delete this product?</p>
                      <div className="flex justify-end mt-6 space-x-3">
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                          onClick={confirmDelete}
                        >
                          Delete
                        </button>
                        <button
                          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                          onClick={cancelDelete}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <button
                  className="bg-blue-400 hover:bg-blue-600 text-white font-bold w-6 h-6 flex items-center justify-center rounded-full"
                  onClick={() => handleDeleteClick(product.id)}
                >
                  <span className="align-middle text-center text-sm">
                    &#x2715;
                  </span>
                </button>
              </div>
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-48 w-full object-cover rounded mb-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/e2e8f0/e2e8f0?text=Invalid+Image";
                  }}
                />
              </Link>
              <div className="text-lg font-bold">
                <input
                  type="text"
                  value={product.title}
                  onChange={(e) =>
                    handleTitleChange(product.id, e.target.value)
                  }
                  className="w-full border-none p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                />
              </div>
              <div className="flex items-center mt-2">
                <label className="text-gray-600 font-semibold">$</label>
                <input
                  type="number"
                  value={product.price}
                  className="text-gray-600 w-full border-none p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                  onChange={(e) =>
                    handlePriceChange(product.id, e.target.value)
                  }
                />
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

// export const ProductListLoader = async () => {
//   const response = await fetch(`https://dummyjson.com/products`);
//   const data = await response.json();
//   return data.products;
// };
