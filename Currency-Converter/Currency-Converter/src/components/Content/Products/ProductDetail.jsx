import { Link, useLoaderData } from "react-router";

export const ProductDetail = () => {
  const product = useLoaderData();
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
  {/* Back Link */}
  <Link
    to="/products"
    className="text-blue-500 hover:underline mb-6 inline-block"
  >
    ← Back to Products
  </Link>

  {/* Main Product Section */}
  <div className="flex flex-col md:flex-row gap-10">
    {/* Product Image */}
    <div className="w-full md:w-1/3 flex justify-center items-center">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-3/4 rounded-lg shadow-lg object-cover"
      />

      
    </div>

    {/* Right Side - Product Info */}
    <div className="flex-1 space-y-6">
      {/* Product Card */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>

        {/* Rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`material-icons text-lg ${
                index < Math.round(product.rating)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            >
              star
            </span>
          ))}
          <span className="ml-2 text-lg font-medium text-gray-700">
            {product.rating.toFixed(1)}
          </span>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed">
          {product.description}
        </p>

        {/* Price Section */}
        <div>
          <p className="text-3xl font-extrabold text-green-600">
            ${product.price}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 line-through text-lg">
              {(() => {
                const originalPrice =
                  Number(product.price) /
                  (1 - Number(product.discountPercentage) / 100);
                return `MRP: $${originalPrice.toFixed(2)}`;
              })()}
            </span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-semibold">
              {product.discountPercentage}% OFF
            </span>
          </div>
        </div>
      </div>

      {/* Delivery Details Card */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-5 text-gray-900">
          Delivery Details
        </h2>
        <div className="space-y-3">
          {/* Warranty */}
          <div className="flex items-start">
            <span className="material-icons text-blue-500 mr-2">
              verified_user
            </span>
            <p className="text-gray-700">
              <span className="font-semibold">Warranty:</span>{" "}
              {product.warrantyInformation}
            </p>
          </div>

          {/* Shipping */}
          <div className="flex items-start">
            <span className="material-icons text-green-500 mr-2">
              local_shipping
            </span>
            <p className="text-gray-700">
              <span className="font-semibold">Shipping:</span>{" "}
              {product.shippingInformation}
            </p>
          </div>

          {/* Availability */}
          <div className="flex items-start">
            <span
              className={`material-icons mr-2 ${
                product.availabilityStatus.toLowerCase() === "in stock"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              inventory_2
            </span>
            <p className="text-gray-700">
              <span className="font-semibold">Availability:</span>{" "}
              {product.availabilityStatus}
            </p>
          </div>

          {/* Return Policy */}
          <div className="flex items-start">
            <span
              className={`material-icons mr-2 ${
                product.returnPolicy.toLowerCase() == "no return policy"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              inventory_2
            </span>
            <p className="text-gray-700">
              <span className="font-semibold">Return Policy:</span>{" "}
              {product.returnPolicy}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Reviews Section */}
  <div className="mt-10">
    <h2 className="text-3xl mb-6 font-bold text-gray-900">Customer Reviews</h2>

    {product.reviews && product.reviews.length > 0 ? (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.reviews.map((review, id) => (
          <div
            key={id}
            className="p-5 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition"
          >
            {/* Reviewer Info */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-semibold text-gray-800">
                  {review.reviewerName}
                </h4>
                <p className="text-sm text-gray-500">
                  {review.reviewerEmail}
                </p>
              </div>
              <span className="text-sm text-gray-400">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, starIndex) => (
                <span
                  key={starIndex}
                  className={`material-icons text-lg ${
                    starIndex < review.rating
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                >
                  star
                </span>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {review.rating} / 5
              </span>
            </div>

            {/* Comment */}
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-gray-500 italic">No reviews available.</p>
    )}
  </div>
   {product.images && product.images.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Product Images</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Product Image ${index + 1}`}
                      className="object-cover rounded-md"
                    />
                  ))}
                </div>
              </div>
            )}
</div>

  )
};

export const ProductDetailLoader = async ({ params }) => {
  const productId = params.productId;
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await response.json();
  return data;
};
