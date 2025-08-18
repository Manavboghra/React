import React from "react";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center m-5">
      <input className="border-1" type="text" placeholder="Name" />
      <input className="border-1" type="email" placeholder="Email" />
      <textarea className="border-1" placeholder="Details"></textarea>
      <button className="border-1" type="submit">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
