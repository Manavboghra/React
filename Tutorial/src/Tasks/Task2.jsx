import React, { useState, useCallback, useEffect, useRef } from "react";

export const Passgenerator = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState(
   localStorage.getItem("password") || ""
  );

  useEffect(() => {
    localStorage.setItem("password", pass);
  }, [pass]);

  const passwordRef = useRef(null);

  const handleCopy = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  const generatePassword = useCallback(() => {
    if (count <= 0) {
      return;
    }
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) str += "1234567890";
    if (char) str += `!@#$%^&*()_+-=[]{}|;':",.<>/?`;

    let generatedPassword = "";
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1);
      generatedPassword += str.charAt(randomIndex);
    }
    setPass(generatedPassword);
  }, [count, number, char]);

  useEffect(() => {
    generatePassword();
  }, [count, number, char, generatePassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-5 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center text-2xl mb-4">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={pass}
          className="outline-none w-full py-2 px-3 bg-gray-700 text-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={handleCopy}
          className="outline-none bg-blue-700 text-white px-4 py-1 shrink-0 hover:bg-blue-600 active:bg-blue-800"
        >
          Copy
        </button>
      </div>

      <div className="flex flex-wrap text-sm gap-x-4 gap-y-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={12}
            value={count}
            className="cursor-pointer"
            onChange={(e) => setCount(e.target.value)}
          />
          <label className="text-white">Length: {count}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={number}
            id="numberInput"
            onChange={() => setNumber((prev) => !prev)}
          />
          <label htmlFor="numberInput" className="text-white cursor-pointer">
            Numbers
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={char}
            id="characterInput"
            onChange={() => setChar((prev) => !prev)}
          />
          <label htmlFor="characterInput" className="text-white cursor-pointer">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
};
