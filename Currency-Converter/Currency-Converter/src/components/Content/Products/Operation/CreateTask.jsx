import React, { useState } from "react";

export const CreateTask = ({ products, setProducts, onClose }) => {
  const [createTitle, setCreateTitle] = useState("");
  const [createPrice, setCreatePrice] = useState("");
  const [createThumbnail, setCreateThumbnail] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleCreateTask = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,
      title: createTitle,
      price: parseFloat(createPrice),
      thumbnail:
        createThumbnail ||
        "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=",
    };
    setProducts([...products, newProduct]);
    setCreateTitle("");
    setCreatePrice("");
    setCreateThumbnail("");
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
      // Create a temporary URL for the selected file
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
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
              placeholder="99.99"
              className="block w-full pl-7 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label
            htmlFor="imageUpload"
            className="block text-sm font-medium text-gray-700"
          >
            Product Image
          </label>
          <div className="mt-1 flex flex-col items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-0.5 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              ></svg>

              {!previewUrl && (
                <div className="flex items-center justify-center text-sm text-gray-600 space-x-2">
                  <label
                    htmlFor="imageUpload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 px-3 py-1"
                  >
                    <span>Upload a file or drag and drop</span>
                    <input
                      id="imageUpload"
                      name="image"
                      type="file"
                      className="sr-only"
                      accept="image/png, image/jpeg, image/gif"
                      onChange={handleImageChange}
                    />
                  </label>
                  <p className="text-xs text-gray-500">(PNG, JPG, GIF)</p>
                </div>
              )}

              {previewUrl && (
                <div className="mt-4 max-w-xs max-h-60 border border-gray-300 rounded overflow-hidden">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-full object-contain"
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
