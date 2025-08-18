import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigator = useNavigate();
  return (
    <div className="flex justify-center items-center">
      <div className="text-6xl text-center  mt-auto pt-36 ">Contact Page </div>

      <button
        className="bg-gray-600 h-10 w-20 mt-40 rounded-2xl text-white"
        onClick={() => navigator("details")}
      >
        Details
      </button>
      <button
        className="bg-gray-600 h-10 w-20 mt-40 rounded-2xl text-white"
        onClick={() => navigator("form")}
      >
        Form
      </button>
    </div>
  );
};

export default Contact;
