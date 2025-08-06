import React, { useState } from "react";

export const CurrencyCalculator = () => {
  const [amount, setAmount] = useState("");
  const [submittedAmount, setSubmittedAmount] = useState(null);
  // State to hold the calculated note counts
  const [cash, setCash] = useState(null);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  // This function calculates the notes for a given amount
  const calculateCashAmount = (value) => {
    const notes = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    let remainingAmount = value;
    const result = {};

    for (const note of notes) {
      if (remainingAmount >= note) {
        const count = Math.floor(remainingAmount / note);
        result[note] = count;
        remainingAmount %= note;
      }
    }
    return result;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (amount && parseFloat(amount) > 0) {
      const numericAmount = parseFloat(amount);
      setSubmittedAmount(numericAmount);
      // Calculate and set the denominations state on submit
      setCash(calculateCashAmount(numericAmount));
    } else {
      // Clear previous results if input is invalid
      setSubmittedAmount(null);
      setCash(null);
    }
    setAmount("");
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-8 text-white font-sans">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-emerald-400 mb-6">
          Currency Denominator
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 w-full
                       text-white text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={handleChange}
            step="any"
            min="0"
          />
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 font-bold py-3 px-6 rounded-lg 
                       text-lg transition-colors w-full"
          >
            Calculate Notes
          </button>
        </form>
        {cash && submittedAmount !== null && (
          <div className="mt-8 text-center bg-gray-700 p-6 rounded-lg">
            <p className="text-gray-400 text-sm">Total Amount:</p>
            <h2 className="text-4xl font-bold text-emerald-400 mb-4">
              ₹{submittedAmount.toLocaleString()}
            </h2>
            <h3 className="text-lg font-semibold border-t border-gray-600 pt-4">
              Note Distribution:
            </h3>
            <ul className="mt-2 text-left">
              {Object.entries(cash).map(([note, count]) => (
                <li key={note} className="flex justify-between p-1">
                  <span>{note} x</span>
                  <span>{count}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// import React, { useState } from "react";

// export const CurrencyCalculator = () => {
//   const [amount, setAmount] = useState("");
//   const [submittedAmount, setSubmittedAmount] = useState(null);

//   const handleChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (amount) {
//       setSubmittedAmount(parseFloat(amount));
//     }
//     setAmount("");
//   };

//   return (
//     <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-8 text-white font-sans">
//       <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-2xl">
//         <h1 className="text-3xl font-bold text-center text-emerald-400 mb-6">
//           Currency Converter
//         </h1>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <input
//             className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 w-full
//                        text-white text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             type="number"
//             placeholder="Enter Amount"
//             value={amount}
//             onChange={handleChange}
//             step="any"
//           />
//           <button
//             type="submit"
//             className="bg-emerald-600 hover:bg-emerald-700 font-bold py-3 px-6 rounded-lg
//                        text-lg transition-colors w-full"
//           >
//             Submit
//           </button>
//         </form>
//         {submittedAmount !== null && (
//           <div className="mt-8 text-center bg-gray-700 p-4 rounded-lg">
//             <p className="text-gray-400 text-sm">Submitted Amount:</p>
//             <h2 className="text-4xl font-bold text-emerald-400">
//               ₹{submittedAmount.toLocaleString()}
//             </h2>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
