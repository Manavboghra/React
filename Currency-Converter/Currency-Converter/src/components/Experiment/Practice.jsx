import React, { useState } from "react";

export default function Practice1() {
  const [namesList, setNamesList] = useState([]);
  const [currentName, setCurrentName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentName.trim()) return;
    setNamesList((prevList) => [currentName, ...prevList]);
    setCurrentName("");
  };

  const handleDelete = () => {
     setNamesList((prevList) => {
    const [_, ...rest] = prevList;
    return rest;
  })};

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center p-8 text-white font-sans">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">Name Collector</h1>

      <form onSubmit={handleSubmit} className="flex items-center gap-4 mb-8">
        <input
          type="text"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          placeholder="Enter a name..."
          className="bg-gray-700 border border-gray-600 rounded-md px-4 py-2 w-72
                     text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 font-bold py-2 px-6 rounded-md transition-colors"
        >
          Add Name
        </button>

        <button
          type="submit"
          onClick={handleDelete}
          className="bg-blue-600 hover:bg-blue-700 font-bold py-2 px-6 rounded-md transition-colors"
        >
          Delete Name
        </button>
      </form>

      {namesList.length > 0 && (
        <div className="w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Todo-List:</h2>
          <ul>
            {namesList.map((name, index) => (
              <li 
                key={index}
                className="p-2 border-b border-gray-700 last:border-b-0"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// import React, { useState } from "react";

// export function Practice() {
//   const [name, setName] = useState("");
//   const [submitedName, setSubmitedName] = useState("");
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     setSubmitedName( name);
//     setName("");
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h2>Enter Your Name</h2>
//         <input
//           type="text"
//           placeholder="Your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <button type="submit">Submit</button>
//       </form>

//       {submitedName && (
//         <div>
//           <hr />
//           <h2>Hello, {submitedName}!</h2>
//         </div>
//       )}
//     </div>
//   );
// }

//  default Practice;
