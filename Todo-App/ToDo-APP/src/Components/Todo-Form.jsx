import React, { useState } from "react";
import TodoList  from "./Todo-List";

export const TodoForm = () => {
  const [inputData, setInputData] = useState("");
  const handleInputData = (e) => { 
    setInputData(e.target.value);
    
  };
  return (
    <>
      <form className="flex mb-6">
        <input
          className="flex-grow py-3 px-4 
                   border-2 border-gray-200 
                   rounded-l-lg 
                   focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                   transition-colors duration-200"
          type="text"
          placeholder="Add a new todo..."
          value={inputData}
          onChange={handleInputData}
        />
        <button
          className="bg-blue-600 text-white font-bold 
                   py-3 px-6 
                   rounded-r-lg 
                   hover:bg-blue-500
                   transition-colors duration-200"
          value={inputData}
          type="submit"
        >
          Add
        </button>
        {inputData}
      </form>
    </>
  );
};
