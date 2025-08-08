import React,{useState} from "react";

export const CreateTask = ({ products, setProducts }) => {
  const [createTitle, setCreateTitle] = useState("");
  const [createPrice, setCreatePrice] = useState("");
  const [createThumbnail, setCreateThumbnail] = useState("");

  const handleCreateTask = (e) => {
    e.preventDefault();
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

  const handleCreateTitle = (e) => {
    setCreateTitle(e.target.value);
  };
  const handleCreatePrice = (e) => {
    setCreatePrice(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={handleCreateTask}
        className="max-w-md mx-auto mt-8 bg-gray-50 rounded-xl shadow-lg p-8 font-sans"
      >
        <h1 className="text-xl font-bold text-center">Create Task</h1>
        <label
          htmlFor="text"
          className="block mb-2 text-gray-700 font-semibold"
        >
          Name
          <input
            name="text"
            id="text"
            value={createTitle}
            onChange={handleCreateTitle}
            type="text"
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
          type="number"
          value={createPrice}
          onChange={handleCreatePrice}
          className="block w-full mt-2 mb-4 px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <div className="mb-4">
          <label htmlFor="imageUpload">Choose an image:</label>
          <input
            type="file"
            id="imageUpload"
            name="image"
            accept="image/png, image/jpeg, image/gif"
            onChange={(e) =>
              setCreateThumbnail(URL.createObjectURL(e.target.files[0]))
            }
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-blue-700 transition"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};
