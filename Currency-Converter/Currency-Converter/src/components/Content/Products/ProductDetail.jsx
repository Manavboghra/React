import {  Link, useLoaderData } from "react-router";


export const ProductDetail = () => {
  const product = useLoaderData();
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10">
      <Link to="/products" className="text-blue-500 hover:underline mb-4 block">
         Back to Products
      </Link>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-xl text-gray-700 my-4">{product.description}</p>
          <p className="text-3xl font-light">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export const ProductDetailLoader = async ({ params }) => {
  const productId = params.productId;
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await response.json();
  return data;
};
