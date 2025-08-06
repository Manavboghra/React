// import React, { useId } from 'react'

// export const ReverseCalculator = () => {
//     let customID = useId()
//   return (
//     <div>
//         <label htmlFor="customID"></label>
//         500 <input key={customID} type="number" />
//         200 <input key={customID} type="number" />
//         100 <input key={customID} type="number" />
//         50 <input key={customID} type="number" />
//         10 <input key={customID} type="number" />
//         5 <input key={customID} type="number" />
//         2 <input key={customID} type="number" />
//         1 <input key={customID} type="number" />
//     </div>
//   )
// }

import React, { useState } from "react";

export const ReverseCalculator = () => {
  const notes = [500, 200, 100, 50, 20, 10, 5, 2, 1];
  const [noteCounts, setNoteCounts] = useState(
    notes.reduce((acc, note) => {
      acc[note] = "";
      return acc;
    }, {})
  );

  const [totalAmount, setTotalAmount] = useState(null);

  const handleChange = (note, value) => {
    setNoteCounts((prevCounts) => ({
      ...prevCounts,
      [note]: value,
    }));
  };

  const handleClick = () => {
    let total = 0;
    for (const note of notes) {
      const count = parseInt(noteCounts[note]) || 0;
      total += note * count;
    }
    setTotalAmount(total);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-8 font-sans">
      <div className="w-full max-w-xs bg-gray-800 p-6 rounded-xl shadow-2xl">
        <h1 className="text-2xl font-bold text-center text-amber-400 mb-6">
          Enter Notes
        </h1>
        <div className="flex flex-col gap-4">
          {notes.map((note) => (
            <div key={note} className="flex items-center gap-4">
              <label
                htmlFor={`note-${note}`}
                className="w-12 text-right font-semibold text-gray-400"
              >
                ₹{note}
              </label>
              <input
                id={`note-${note}`}
                className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 w-full
                           text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                type="number"
                placeholder="0"
                onChange={(e) => handleChange(note, e.target.value)}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="bg-amber-600 hover:bg-amber-700 font-bold py-2 px-4 rounded-lg 
                       text-lg transition-colors w-full mt-4"
          onClick={handleClick}
        >
          Calculation
        </button>
        {totalAmount !== null && (
          <div className="mt-6 text-center bg-gray-700 p-4 rounded-lg">
            <p className="text-gray-400 text-sm">Total Amount:</p>
            <h2 className="text-3xl font-bold text-amber-400">
              ₹{totalAmount.toLocaleString()}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};
