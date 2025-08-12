import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { CreateTask } from "./Operation/CreateTask";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const [isToggleCancel, setIsToggleCancel] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [filterValue, setFilterValue] = useState("featured");
  const [editingId, setEditingId] = useState(null);
  const [editingSnapshot, setEditingSnapshot] = useState([]);

  const [category, setCategory] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const [tempPrice, setTempPrice] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 30;

  const [allProducts, setAllProducts] = useState([]);

  //   const getSortParams = () => {
  //   if (filterValue === "low-to-high")
  //     return "sortBy=price&order=asc";
  //   if (filterValue === "high-to-low")
  //     return "sortBy=price&order=desc";
  //   if (filterValue === "rating")
  //     return "sortBy=rating&order=desc";
  //   return ""; // for featured or default no sort
  // };

  useEffect(() => {
    // setIsLoading(true);
    fetch("https://dummyjson.com/products?limit=1000")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products || []);
        // setIsLoading(false);
      })
      .catch(() => {
        setAllProducts([]);
        // setIsLoading(false);
      });
  }, []);

  const handleTitleChange = (productId, newTitle) => {
    setAllProducts((prev) =>
      prev.map((product) =>
        product.id === productId ? { ...product, title: newTitle } : product
      )
    );
  };

  const handlePriceChange = (id, value) => {
    if (value === "" || value === "." || /^\d*\.?\d*$/.test(value)) {
      setAllProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, price: value } : p))
      );
    }
  };

  const handleDeleteClick = (productId) => {
    setDeleteId(productId);
    setIsToggleCancel(true);
  };

  const confirmDelete = () => {
    setAllProducts((prev) => prev.filter((product) => product.id !== deleteId)); // update main data source
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

  const handleFilter = (e) => {
    setFilterValue(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;

    setCategory((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((cat) => cat !== value);
      }
    });
    setCurrentPage(1);
  };

  const handleSetPrice = (minPrice, maxPrice) => {
    setMaxPrice(maxPrice);
    setMinPrice(minPrice);
    setCurrentPage(1);
  };

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
    setCurrentPage(1);
  };

  const getDisplayedProducts = () => {
    let list = allProducts;

    // Category filtering (supports multiple)
    if (category.length > 0) {
      list = list.filter((product) => category.includes(product.category));
    }

    // Price filtering
    if (minPrice !== "" && !isNaN(minPrice)) {
      list = list.filter((product) => product.price >= minPrice);
    }
    if (maxPrice !== "" && !isNaN(maxPrice)) {
      list = list.filter((product) => product.price <= maxPrice);
    }

    // Discount filtering
    if (discount !== "" && !isNaN(discount)) {
      list = list.filter((product) => product.discountPercentage >= discount);
    }

    // Search
    if (search.trim() !== "") {
      list = list.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sorting
    if (filterValue === "low-to-high") {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (filterValue === "high-to-low") {
      list = [...list].sort((a, b) => b.price - a.price);
    } else if (filterValue === "rating") {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }

    return list;
  };

  const totalFiltered = getDisplayedProducts().length;
  const totalPages = Math.ceil(totalFiltered / productsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const getNumberOfProducts = () => {
    return getDisplayedProducts().length;
  };

  //   const getNumberOfFilteredProducts = (type) => {
  //   return getDisplayedProducts().filter(
  //     (item) => item.category === type
  //   ).length;
  // };

  const getFilteredListWithoutCategory = () => {
    let list = allProducts;

    if (discount !== "" && !isNaN(discount)) {
      list = list.filter((product) => product.discountPercentage >= discount);
    }

    if (minPrice !== "" && !isNaN(minPrice)) {
      list = list.filter((product) => product.price >= minPrice);
    }
    if (maxPrice !== "" && !isNaN(maxPrice)) {
      list = list.filter((product) => product.price <= maxPrice);
    }
    

    return list;
  };

  // const getDropdownResults = () => {
  //   return getDisplayedProducts().filter((product) =>
  //     product.title.toLowerCase().includes(search.toLowerCase())
  //   );
  // };

  const handleClearAll = () => {
    setMaxPrice("");
    setMinPrice("");
    setFilterValue("featured");
    setCategory([]);
    setDiscount("");
    setCurrentPage(1);
  };

  const displayedProducts = getDisplayedProducts().slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 bg-white shadow-md p-6 border-b md:border-r border-gray-200">
        <div className="flex flex-wrap items-center justify-between">
          <h2 className="text-lg font-bold">
            Filters ({getNumberOfProducts()})
          </h2>
          <button
            className="text-blue-500 hover:underline text-sm"
            onClick={handleClearAll}
          >
            Clear All
          </button>
        </div>

        <div className="space-y-6 mt-4">
          {/* Category Filter */}
          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            <div className="space-y-1 text-gray-700">
              {[
                "beauty",
                "furniture",
                "fragrances",
                "groceries",
                "kitchen-accessories",
                "home-decoration",
                "mens-shoes",
                "mens-shirts",
                "laptops",
                "skin-care",
                "motorcycle",
                "mobile-accessories",
                "sports-accessories",
                "smartphones",
                "womens-dresses",
                "womens-bags",
                "vehicle",
                "tops",
                "tablets",
                "womens-watches",
                "womens-shoes",
                "womens-jewellery",
                "Newly Added"
              ].map((type) => (
                <label
                  key={type}
                  className="flex items-center space-x-2 capitalize"
                >
                  <input
                    type="checkbox"
                    name="category"
                    className="accent-blue-500"
                    value={type}
                    checked={category.includes(type)}
                    onChange={handleCategoryChange}
                  />
                  <span>
                    {type} (
                    {
                      getFilteredListWithoutCategory().filter(
                        (item) => item.category === type
                      ).length
                    }
                    )
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <h3 className="font-semibold mb-2">Price Range</h3>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                className="w-20 border rounded px-2 py-1 text-sm"
                onChange={(e) => handleSetPrice(e.target.value, maxPrice)}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                className="w-20 border rounded px-2 py-1 text-sm"
                onChange={(e) => handleSetPrice(minPrice, e.target.value)}
              />
            </div>
          </div>

          {/* Discount Filter */}
          <div>
            <h3 className="font-semibold mb-2">Discount Range</h3>
            {[10, 15, 20].map((count) => (
              <label key={count} className="flex items-center space-x-2">
                <input
                  name="discount"
                  type="radio"
                  className="accent-blue-500"
                  value={count}
                  checked={discount === count.toString()}
                  onChange={handleDiscountChange}
                />
                <span>{count}% and Above</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        {/* Loading */}
        {/* {isLoading ? (
          <div className="flex flex-col justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <h1 className="text-2xl font-semibold">Loading...</h1>
          </div>
        ) : (
          <div className="text-center text-3xl font-bold mb-6">
            Product List
          </div>
        )} */}

        {/* Search / Create / Sort */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-5">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="block w-full border rounded px-4 py-2"
            />
            {/* {search && (
              <div className="absolute left-0 top-full w-full bg-white shadow-lg rounded mt-1 z-10 max-h-60 overflow-auto">
                {getDropdownResults().length > 0 ? (
                  getDropdownResults().map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="flex items-center p-2 hover:bg-gray-100"
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-10 h-10 object-cover rounded mr-3"
                      />
                      <div>
                        <div className="font-medium">{product.title}</div>
                        <div className="text-sm text-gray-500">
                          ${product.price}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="p-2 text-gray-500">No products found.</div>
                )}
              </div>
            )} */}
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-md whitespace-nowrap transition duration-200 shadow-md min-w-[140px]"
            onClick={handleCreateItem}
          >
            Create Item
          </button>

          <select
            value={filterValue}
            onChange={handleFilter}
            className="border rounded px-3 py-2"
          >
            <option value="featured">Featured</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
          </select>
        </div>

        {/* Products */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <div key={product.id} className="bg-white shadow rounded p-4">
                <div className="flex justify-end items-center text-xs text-gray-500 mb-2">
                  <button
                    onClick={() => handleDeleteClick(product.id)}
                    className="material-symbols-outlined text-red-500"
                  >
                    delete
                  </button>
                </div>
                <Link to={`/products/${product.id}`} target="_blank">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded mb-3"
                  />
                </Link>
                <div className="flex items-center gap-1 text-gray-700">
                  <span className="text-[15px]">{product.rating}</span>
                  <span
                    className="material-icons text-blue-500"
                    style={{ fontSize: "17px" }}
                  >
                    star
                  </span>
                  <span>|</span>
                  <span>{product.reviews?.length??0}</span>
                </div>

                <input
                  type="text"
                  value={product.title}
                  onChange={(e) =>
                    handleTitleChange(product.id, e.target.value)
                  }
                  className="font-semibold w-full border-none bg-gray-50 mb-2"
                />
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">$</span>
                    <input
                      type="text"
                      value={
                        editingId === product.id ? tempPrice : product.price
                      }
                      onFocus={() => {
                        setEditingId(product.id);
                        setTempPrice(product.price);
                      }}
                      onChange={(e) => setTempPrice(e.target.value)}
                      onBlur={() => {
                        setAllProducts((prev) =>
                          prev.map((p) =>
                            p.id === editingId ? { ...p, price: tempPrice } : p
                          )
                        );
                        setEditingId(null);
                      }}
                      className="w-16 border rounded px-1"
                    />
                  </div>
                  <span className="line-through text-gray-500 text-xs">
                    $
                    {(
                      Number(product.price) /
                      (1 - Number(product.discountPercentage) / 100)
                    ).toFixed(2)}
                  </span>
                  <span className="text-green-600 text-xs font-semibold">
                    ({product.discountPercentage}% OFF)
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 mt-4 mx-auto ">No Items Found</div>
          )}
        </div>

        {/* Delete Modal */}
        {isToggleCancel && (
          <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center p-4 z-50">
            <div className="bg-white p-4 rounded shadow-lg w-80">
              <h2 className="font-semibold text-lg mb-2">Confirm Deletion</h2>
              <p>Are you sure you want to delete this product?</p>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
                <button
                  className="bg-gray-300 px-3 py-1 rounded"
                  onClick={cancelDelete}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Create Task */}
        {isToggle && (
          <CreateTask
            onClose={onClose}
            products={allProducts}
            setProducts={setAllProducts}
          />
        )}
        <div className="pagination">
          <div className="pagination">
            {[...Array(totalPages).keys()].map((num) => {
              const pageNum = num + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  disabled={pageNum === currentPage}
                  className="p-2 m-2 w-12 mt-10 border rounded bg-blue-500 text-white hover:bg-blue-600  focus:bg-amber-400 transition duration-200"
                >
                  {pageNum}
                </button>
                
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};
// https://dummyjson.com/products/search?q=phone
// fetch('https://dummyjson.com/products?sortBy=title&order=asc')
// https://dummyjson.com/docs/products#products-add
// 'https://dummyjson.com/products/category/smartphones'
