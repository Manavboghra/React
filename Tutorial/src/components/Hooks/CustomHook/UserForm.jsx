import React, { useState } from "react";
import { useForm } from "./useForm";

export const UserForm = () => {
  const firstNameProps = useForm("Lorem");
  const lastNameProps = useForm("Rai");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input {...firstNameProps} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
             {...lastNameProps}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <hr className="border-gray-200" />

          <h1 className="text-center text-2xl font-semibold text-gray-800">
            Good Morning, <br />
            <span className="text-indigo-600 font-bold">
              {firstNameProps.Name} {lastNameProps.Name}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
