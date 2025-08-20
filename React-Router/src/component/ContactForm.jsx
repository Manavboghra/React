import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col w-56 ml-auto gap-1 border-2 p-2 shadow-2xl border-gray-300 mr-auto mt-4">
      <input className="border p-2" type="text" placeholder="Name" />
      <input className="border p-2" type="email" placeholder="Email" />
      <textarea className="border p-2" placeholder="Details"></textarea>
      <button className="border w-20 items-center ml-auto mr-auto mt-2" type="submit">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
