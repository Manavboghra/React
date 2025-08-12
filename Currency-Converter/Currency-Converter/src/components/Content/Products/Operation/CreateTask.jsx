import React, { useState } from "react";

export const CreateTask = ({ products, setProducts, onClose }) => {
  const [createTitle, setCreateTitle] = useState("");
  const [createPrice, setCreatePrice] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);

  const onCancelImage = () => {
    setPreviewUrl(null);
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,
      title: createTitle,
      category: "Newly Added",
      reviews: 0,
      rating: 0,
      discountPercentage: 0,
      price: parseFloat(createPrice),
      thumbnail:
        previewUrl ||
        "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=",
    };
    setProducts([...products, newProduct]);
    setCreateTitle("");
    setCreatePrice("");
    setPreviewUrl("");
    if (onClose) {
      onClose();
    }
  };

  const handleCreateTitle = (e) => {
    setCreateTitle(e.target.value);
  };
  const handleCreatePrice = (e) => {
    setCreatePrice(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  return (
    <div
      className="fixed inset-0 backdrop-blur-md flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      <form
        onSubmit={handleCreateTask}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Create New Product
          </h1>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            &#x2715;
          </button>
        </div>

        <div>
          <label
            htmlFor="text"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            name="text"
            id="text"
            value={createTitle}
            onChange={handleCreateTitle}
            type="text"
            required
            placeholder="e.g. Wireless Earbuds"
            className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label
            htmlFor="number"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              $
            </span>
            <input
              id="number"
              type="number"
              value={createPrice}
              onChange={handleCreatePrice}
              onKeyDown={(e) => {
                if (e.key === "e" || e.key === "E") {
                  e.preventDefault();
                }
              }}
              required
              placeholder="99.99"
              className="block w-full pl-7 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>
        {/* Image Upload */}
        <div className="space-y-1">
          <label
            htmlFor="imageUpload"
            className="block text-sm font-medium text-gray-700"
          >
            Product Image
          </label>
          {previewUrl && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onCancelImage}
                className="text-gray-400 hover:text-gray-600 "
              >
                &#x2715;
              </button>
            </div>
          )}

          <div className="mt-1 flex flex-col items-center  border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              {!previewUrl ? (
                <label
                  htmlFor="imageUpload"
                  className="relative cursor-pointer bg-white rounded-md font-medium 
             text-blue-600 hover:text-blue-500 focus-within:outline-none 
             focus-within:ring-2 focus-within:ring-offset-2 
             focus-within:ring-blue-500 flex flex-col items-center 
             justify-center text-sm  space-y-2 w-[380px] h-[200px] "
                >
                  <span>Upload a file or drag and drop</span>
                  <p className="text-xs text-gray-500">(PNG, JPG, GIF)</p>

                  <input
                    id="imageUpload"
                    name="image"
                    type="file"
                    accept="image/png, image/jpeg, image/gif"
                    onChange={handleImageChange}
                    required
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </label>
              ) : (
                <div className="  w-[380px] h-[200px] border border-gray-300 rounded overflow-hidden">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};
