import React,{useEffect, useState} from 'react'

export const DeleteTask = ({ products, setProducts }) => {
      const [deleteElement, setDeleteElement] = useState(0);
    


  useEffect(() => {
   if(products.length > 0 && !deleteElement) {
     setDeleteElement(products[0].id.toString());
   }
  }, [products, deleteElement])



  const handleDelete = (e) => {
    e.preventDefault();
    const elementID = Number(deleteElement);
    console.log(elementID)

    const deleteData = products.filter((product) => product.id !== elementID);

    if (deleteData.length === products.length) {
      alert("No element found with that ID");
      return;
    }

    setProducts(deleteData);
    setDeleteElement("");
  };
  return (
    <div>
      <form
        onSubmit={handleDelete}
        className="max-w-md mx-auto mt-8 bg-gray-50 rounded-xl shadow-lg p-8 font-sans"
      >
        <h1 className="text-xl font-bold text-center">Delete Task</h1>
        <div className="mb-4">
          <h1>ID</h1>
          <select
            value={deleteElement}
            onChange={(e) => setDeleteElement(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            {products.map((product) => (
              <option key={product.id} value={product.id.toString()}>
                {product.id}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-blue-700 transition"
        >
          Delete Task
        </button>
      </form>
</div>
  )
}
