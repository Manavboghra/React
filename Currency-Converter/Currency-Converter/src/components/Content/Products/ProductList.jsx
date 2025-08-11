import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { CreateTask } from "./Operation/CreateTask";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const [isToggleCancel, setIsToggleCancel] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [filterValue, setFilterValue] = useState("featured");
  const [editingId, setEditingId] = useState(null);
  const [editingSnapshot, setEditingSnapshot] = useState([]);
  const SortedBy = "Sorted By"

  const [category, setCategory] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [discount, setDiscount] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        return setProducts(data.products);
      });
  }, []);

  // const SearchedProducts = products.filter((product) =>
  //   product.title.toLowerCase().includes(search.toLowerCase())
  // );

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

  const handlePriceChange = (id, value) => {
    if (value === "" || value === "." || /^\d*\.?\d*$/.test(value)) {
      const updated = products.map((p) =>
        p.id === id ? { ...p, price: value } : p
      );
      setProducts(updated);

      if (editingId) {
        setEditingSnapshot((prev) =>
          prev.map((p) => (p.id === id ? { ...p, price: value } : p))
        );
      }
    }
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
  };

  // const handleEditClick =(productId, title, price)=>{
  //   const product = products.map((product)=>{
  //     if(product.id === productId) {
  //       return {...product,title, price};
  //     }
  //     return product;
  //   })
  //   setProducts(product)

  // }

  // const handleEditClick = (productId) => {
  //   const product = products.find((product) => product.id === productId);
  //   if (product) {
  //     console.log(product.id);
  //   }
  // };

  const handleFilter = (e) => {
    setFilterValue(e.target.value);
  };

  // const sortedProducts = () => {
  //   if (editingId) {
  //     return editingSnapshot;
  //   }
  //   if (filterValue === "low-to-high") {
  //     return [...products].sort(
  //       (a, b) => parseFloat(a.price) - parseFloat(b.price)
  //     );
  //   }
  //   if (filterValue === "high-to-low") {
  //     return [...products].sort(
  //       (a, b) => parseFloat(b.price) - parseFloat(a.price)
  //     );
  //   }
  //   return products;
  // };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(
      (prev) =>
        prev.includes(value)
          ? prev.filter((c) => c !== value) // remove if already selected
          : [...prev, value] // add if not selected
    );
  };

  // const handleSetMinPrice =(e) =>{
  //   const val = parseFloat(e.target.value)

  //   const minPrice = products.filter(product => product.price > val )
  //   console.log(minPrice)

  // }

  // const handleSetMaxPrice =(e) =>{
  //   const val = parseFloat(e.target.value)

  //   const maxPrice = products.filter(product => product.price < val )
  //   console.log(maxPrice)

  // }

  const handleSetPrice = (minPrice, maxPrice) => {
    setMaxPrice(parseFloat(maxPrice));
    setMinPrice(parseFloat(minPrice));
  };

    const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
  };


  //   const CustomPriceProduct = products.filter((products) => {
  //     if (products.price > minPrice && products.price < maxPrice) {
  //       return products;
  //     }
  //   });
  // };

  const getDisplayedProducts = () => {
    if (editingId) {
      return editingSnapshot;
    }
    //  Apply category filter
    let list =
      category.length > 0
        ? products.filter((product) => category.includes(product.category))
        : products;

    if (minPrice !== "" && !isNaN(minPrice)) {
      list = list.filter((product) => product.price >= minPrice);
    }
    if (maxPrice !== "" && !isNaN(maxPrice)) {
      list = list.filter((product) => product.price <= maxPrice);
    }

    // if (search.trim() !== "") {
    //   list = list.filter((product) =>
    //     product.title.toLowerCase().includes(search.toLowerCase())
    //   );
    // }

    //Discount

    if (discount !== "" && !isNaN(discount)) {
      list = list.filter((product) => product.discountPercentage >= discount);
    }


    //  Apply sorting
    if (filterValue === "low-to-high") {
      return [...list].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    }
    if (filterValue === "high-to-low") {
      return [...list].sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    }
    if (filterValue === "rating") {
      return [...list].sort(
        (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
      );
    }
    return list;
  };

  // Apply search
  const getDropdownResults = () => {
    return getDisplayedProducts().filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleClearAll = () => {
    setMaxPrice("");
    setMinPrice("");
    setFilterValue("featured");
    setCategory([]);
    setDiscount("");
  };



  return (

    // Product Page
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Filters */}
      <aside className="w-64 bg-white shadow-md p-6 border-r border-gray-200">
        <div className="flex flex-nowrap gap-20">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <button className="font-bold mb-4 mt-0.5" onClick={handleClearAll}>
            {" "}
            Clear All
          </button>
        </div>

        <div className="space-y-6">
          {/* Category Filter */}
          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            <div className="space-y-1 text-gray-700">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  value="beauty"
                  checked={category.includes("beauty")}
                  onChange={handleCategoryChange}
                />
                <span>beauty</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  value="furniture"
                  checked={category.includes("furniture")}
                  onChange={handleCategoryChange}
                />
                <span>furniture</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  value="fragrances"
                  checked={category.includes("fragrances")}
                  onChange={handleCategoryChange}
                />
                <span>fragrances</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  value="groceries"
                  checked={category.includes("groceries")}
                  onChange={handleCategoryChange}
                />
                <span>groceries</span>
              </label>
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <h3 className="font-semibold mb-2">Price Range</h3>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                className="w-20 border rounded px-2 py-1 text-sm"
                onChange={(e) => {
                  const value = e.target.value;
                  setMaxPrice(value);
                  handleSetPrice(value, maxPrice);
                }}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                className="w-20 border rounded px-2 py-1 text-sm"
                onChange={(e) => {
                  const value = e.target.value;
                  setMaxPrice(value);
                  handleSetPrice(minPrice, value);
                }}
              />
            </div>
          </div>
          {/* Discount Filter */}

          <div>
            <h3 className="font-semibold mb-2">Discount Range</h3>
            <div className="space-y-1 text-gray-700">
              <label className="flex items-center space-x-2">
                <input
                  id="discount"
                  name="discount"
                  type="radio"
                  className="accent-blue-500"
                  value={10}
                  checked={discount === "10"}
                  onChange={handleDiscountChange}
                />
                <span>10% and Above</span>
              </label>
            </div>
            <div className="space-y-1 text-gray-700">
              <label className="flex items-center space-x-2">
                <input
                  id="discount"
                  name="discount" 
                  type="radio"
                  className="accent-blue-500"
                  value={20}
                  checked={discount === "20"}
                  onChange={handleDiscountChange}
                />
                <span>20% and Above</span>
              </label>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Loading */}
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

          <div className="w-full max-w-3/4 mx-auto p-6 bg-white rounded-xl shadow-md mb-5">
            <div className="flex items-start justify-between gap-4">
              {/* Search Input*/}
              <div className="relative flex-1">
                <input
                  id="search"
                  type="text"
                  placeholder="Search for an item..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="block w-full px-5 py-3 text-lg text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
                {/* Search Logic*/}
                {search && (
                  <div className="absolute left-0 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-80 overflow-auto z-20">
                    {getDropdownResults().length > 0 ? (
                      getDropdownResults().map((product) => (
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

              {/* Create Item*/}
              <div className="flex items-center">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-md whitespace-nowrap transition duration-200 shadow-md min-w-[140px]"
                  onClick={handleCreateItem}
                >
                  Create Item
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center">
                <select
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-md whitespace-nowrap transition duration-200 shadow-md"
                  onChange={handleFilter}
                  value={filterValue}
                >
                  <option value="featured">Featured</option>
                  <option value="low-to-high">Price: Low to High</option>
                  <option value="high-to-low">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-wrap justify-center gap-4 mb-7">
          {getDisplayedProducts().map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <article className="w-80 border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-gray-500">
                    ID: {product.id}
                  </span>

                  <button
                    className="bg-white text-white font-bold w-6 h-6 flex items-center justify-center rounded-full"
                    onClick={() => handleDeleteClick(product.id)}
                  >
                    <span className="align-middle text-center text-sm">
                      <span className="material-symbols-outlined text-red-500">
                        delete
                      </span>
                    </span>
                  </button>
                </div>

                {/* Individual Product Page */}

                <Link target="_blank" to={`/products/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-48 w-full object-cover rounded mb-2"
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
                <div className="flex items-center space-x-4">
                  {/* Price input */}
                  <div className="flex items-center space-x-1 mt-2">
                    <label className="text-gray-600 font-semibold select-none">
                      $
                    </label>
                    <input
                      className="w-16 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      type="text"
                      value={product.price}
                      onFocus={() => {
                        setEditingId(product.id);
                        setEditingSnapshot(getDisplayedProducts());
                      }}
                      onBlur={() => setEditingId(null)}
                      onChange={(e) =>
                        handlePriceChange(product.id, e.target.value)
                      }
                    />
                  </div>

                  {/* Original price */}
                  <div className="mt-2 text-gray-500 line-through text-sm">
                    {(() => {
                      const originalPrice =
                        Number(product.price) /
                        (1 - Number(product.discountPercentage) / 100);
                      return `$${originalPrice.toFixed(2)}`;
                    })()}
                  </div>

                  {/* Discount percentage  */}
                  <div className="mt-2 text-green-600 font-semibold text-sm">
                    ({product.discountPercentage}% OFF)
                  </div>
                </div>
              </article>
            </div>
          ))}

          {/* Delete */}
          {isToggleCancel && (
            <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center p-4 z-50 ">
              <div className="bg-white p-6 rounded-lg border-2 border-gray-300 w-80">
                <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
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

          {/* Create Task Modal */}
          {isToggle && (
            <CreateTask
              onClose={onClose}
              products={products}
              setProducts={setProducts}
            />
          )}

          {/* {filteredList().map((product) => (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
              </Link>
              <h3>{product.title}</h3>
            </div>
          ))} */}
        </div>
      </main>
    </div>
  );
};

// export const ProductListLoader = async () => {
//   const response = await fetch(`https://dummyjson.com/products`);
//   const data = await response.json();
//   return data.products;
// };
