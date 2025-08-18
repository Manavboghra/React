import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useDebounce } from "../../hooks/useDebounce"; // Import hook
import {CreateTask} from "./CreateTask"
import { Trash2, ChevronLeft, ChevronRight, ChevronsLeft, Star} from 'react-feather';

export const ProductList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Read initial filters
  const getFiltersFromURL = () => {
    const params = new URLSearchParams(location.search);
    return {
      search: params.get("search") || "",
      filterValue: params.get("sort") || "featured",
      category: params.get("category") ? params.get("category").split(",") : [],
      minPrice: Number(params.get("minPrice") || 0),
      maxPrice: Number(params.get("maxPrice") || 100000),
      discount: params.get("discount") || "",
      currentPage: Number(params.get("page") || 1),
    };
  };

  // State
  const [search, setSearch] = useState(getFiltersFromURL().search);
  const debouncedSearch = useDebounce(search, 500); // ✅ debounce only the search term

  const [filterValue, setFilterValue] = useState(getFiltersFromURL().filterValue);
  const [category, setCategory] = useState(getFiltersFromURL().category);
  const [minPrice, setMinPrice] = useState(getFiltersFromURL().minPrice);
  const [maxPrice, setMaxPrice] = useState(getFiltersFromURL().maxPrice);
  const [discount, setDiscount] = useState(getFiltersFromURL().discount);
  const [currentPage, setCurrentPage] = useState(getFiltersFromURL().currentPage);

  const [isToggle, setIsToggle] = useState(false);
  const [isToggleCancel, setIsToggleCancel] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [tempPrice, setTempPrice] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const productsPerPage = 30;

  // Search input handler (instant feedback in UI)
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };


// useEffect(() => {
//   const timer = setTimeout(() => {
//     setSearch(debouncing);
//     setCurrentPage(1)
//   }, 1000);
//     return () => clearTimeout(timer); 
// }, [debouncing]);


  // === 2. Keep filters in sync with URL ===
 useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedSearch) params.set("search", debouncedSearch);
    if (filterValue !== "featured") params.set("sort", filterValue);
    if (category.length > 0) params.set("category", category.join(","));
    if (minPrice > 0) params.set("minPrice", minPrice);
    if (maxPrice < 100000) params.set("maxPrice", maxPrice);
    if (discount) params.set("discount", discount);
    if (currentPage !== 1) params.set("page", currentPage);

    navigate({ search: params.toString() }, { replace: true });
  }, [
    debouncedSearch, // 🔹 Debounced value here
    filterValue,
    category,
    minPrice,
    maxPrice,
    discount,
    currentPage,
    navigate,
  ]);

  // === Fetch data once ===
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=1000")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products || []);
      })
      .catch(() => {
        setAllProducts([]);
      });
  }, []);

  // === Filtering function (use debouncedSearch instead of search) ===
  const getDisplayedProducts = () => {
    let list = allProducts;

    if (category.length > 0) {
      list = list.filter((product) => category.includes(product.category));
    }
    if (!isNaN(minPrice)) list = list.filter((p) => p.price >= minPrice);
    if (!isNaN(maxPrice)) list = list.filter((p) => p.price <= maxPrice);
    if (discount) list = list.filter((p) => p.discountPercentage >= discount);

    // Apply debounced search
    if (debouncedSearch.trim()) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(debouncedSearch.toLowerCase()))
      );
    }

    if (filterValue === "low-to-high") list = [...list].sort((a, b) => a.price - b.price);
    if (filterValue === "high-to-low") list = [...list].sort((a, b) => b.price - a.price);
    if (filterValue === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  };

  //Title change handler
  const handleTitleChange = (productId, newTitle) => {
    setAllProducts((prev) =>
      prev.map((product) =>
        product.id === productId ? { ...product, title: newTitle } : product
      )
    );
  };

  //Delete task handler
  const handleDeleteClick = (productId) => {
    setDeleteId(productId);
    setIsToggleCancel(true);
  };

  //Ask for delete
  const confirmDelete = () => {
    setAllProducts((prev) => prev.filter((product) => product.id !== deleteId));
    setIsToggleCancel(false);
    setDeleteId(null);
  };

  //Decline to delete
  const cancelDelete = () => {
    setIsToggleCancel(false);
    setDeleteId(null);
  };

  const onClose = () => {
    setIsToggle(false);
  };

  //Create Item
  const handleCreateItem = () => {
    setIsToggle(!isToggle);
  };

  //Trigger when category Change
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setCategory((prev) =>
      checked ? [...prev, value] : prev.filter((c) => c !== value)
    );
    setCurrentPage(1);
  };

  //For filters
  const handleSetPrice = (min, max) => {
    setMinPrice(Number(min));
    setMaxPrice(Number(max));
    setCurrentPage(1);
  };

  const handleFilter = (e) => {
    setFilterValue(e.target.value);
    setCurrentPage(1);
  };

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
    setCurrentPage(1);
  };

  //displayproduct
  
  //pagination
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

  // display product for length
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
    if (search.trim() !== "") {
      list = list.filter(
        (product) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.tags.some((tag) =>
            tag.toLowerCase().includes(search.toLowerCase())
          )
      );
    }

    return list;
  };

  const handleClearAll = () => {
    setSearch("");
    setFilterValue("featured");
    setCategory([]);
    setMinPrice(0);
    setMaxPrice(100000);
    setDiscount("");
    setCurrentPage(1);
  };

  const displayedProducts = getDisplayedProducts().slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Keyword type category
  const handleCancelItems = (type, value) => {
    if (type === "category") {
      setCategory((prev) => prev.filter((cat) => cat !== value));
    } else if (type === "discount") {
      setDiscount("");
    } else if (type === "price") {
      setMinPrice(0);
      setMaxPrice(100000);
    }
  };

  // handle active filters
  const activeFilters = [
    ...category.map((c) => ({
      label: c,
      type: "category",
      value: c,
    })),
    ...(discount
      ? [
          {
            label: `${discount}% and above`,
            type: "discount",
            value: discount,
          },
        ]
      : []),
    ...(minPrice > 0 && maxPrice > 0
      ? [
          {
            label: `$${minPrice} to $${maxPrice}`,
            type: "price",
            value: null,
          },
        ]
      : []),
  ];

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
                "Newly Added",
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

        {/* Search / Create / Sort */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-5">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
              className="block w-full border rounded px-4 py-2"
            />
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
        {/* Category Bar */}
        {activeFilters.length > 0 && (
          <div className="p-2 m-2 flex flex-nowrap gap-3">
            {activeFilters.map((filter, index) => (
              <div
                key={index}
                className="text-gray-400 border-2 rounded-2xl ml-2 pt-0.5 pl-2 p-1"
              >
                {filter.label}
                <button
                  className="font-bold text-sm ml-2 mr-1 text-gray-400"
                  onClick={() => handleCancelItems(filter.type, filter.value)}
                >
                  &#x2715;
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Products */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 ">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <div className="hover:bg-white  hover:shadow-xl hover:shadow-gray-300 hover:rounded-sm  ">
              <div key={product.id} className="bg-white shadow rounded p-4">
                <div className="flex justify-end items-center text-xs text-gray-500 mb-2">
                    <Trash2 size={18} onClick={() => handleDeleteClick(product.id)} color="red"/>
                </div>

                <Link to={`/Mens/${product.id}`} target="_top">
                  <img
                    src={product.thumbnail}
                    loading="lazy"
                    alt={product.title}
                    className="w-full h-60 object-cover rounded "
                  />
                </Link>
              </div>
              <div>
                <div className="m-2 flex items-center gap-1 text-gray-700">
                  <span className="text-[15px]">{product.rating}</span>
                  <Star size={15} className="text-blue-500 fill-blue-400"/>
                  <span>| {product.reviews?.length ?? 0}</span>
                </div>

                <input
                  type="text"
                  value={product.title}
                  onChange={(e) =>
                    handleTitleChange(product.id, e.target.value)
                  }
                  className="font-semibold w-full border-none mb-2 pr-3 ml-2"
                />
                <div className="ml-2 flex items-center space-x-2">
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

                <div className="pt-2 ml-2 pb-2">
                  {product.stock < 20 && (
                    <span className="px-2 py-1 text-xs font-bold text-orange-600 bg-red-100 border border-red-200 rounded-full">
                      Only Few Left
                    </span>
                  )}
                </div>
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
        <hr className="mt-28 text-gray-200" />

        {totalPages > 1 && (
          <div className="pagination m-0 p-0">
            <div className="align-middle text-center">
              <button
                className=" ml-2 font-[600] text-lg "
                onClick={() => setCurrentPage(1)}
              >
                <ChevronsLeft/>
                Page:1
              </button>
              <button
                className="p-2 m-10 font-[600] text-lg rounded-md border-1 border-gray-300 h-13 w-40 bg-white"
                onClick={() => {
                  if (currentPage <= totalPages + 1 - currentPage) {
                    setCurrentPage(1);
                  } else {
                    setCurrentPage((prev) => prev - 1);
                  }
                }}
              >
                <ChevronLeft/>
                Previous
              </button>
              <span className="">
                {" "}
                Page {currentPage} of {totalPages}
              </span>

              <button
                className="p-2 m-10 font-[600] text-lg rounded-md border-1 border-gray-300 h-13 w-30 bg-white"
                onClick={() => {
                  if (currentPage > totalPages - 1) {
                    setCurrentPage(totalPages);
                  } else {
                    setCurrentPage((prev) => prev + 1);
                  }
                }}
              >
                Next
               <ChevronRight/>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
// https://dummyjson.com/products/search?q=phone
// fetch('https://dummyjson.com/products?sortBy=title&order=asc')
// https://dummyjson.com/docs/products#products-add
// 'https://dummyjson.com/products/category/  '
