// import React from "react";
// import { useSelector } from "react-redux";
// import ProductCard from "/src/components/ProductCard";

// const Shop = () => {
//   const products = useSelector((state) => state.product);
//   return (
//     <div className="bg-green-900 mx-auto py-12 px-4 md:px-16 lg:px-24 text-white ">
//       <h2 className="bg-green-900 text-3xl font-bold mb-6 text-center shadow-lg shadow-white border ">
//         Shop
//       </h2>
//       <div className="bg-green-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer shadow-lg shadow-white border">
//         {products.products.map((product) => (
//           <ProductCard product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;

/////////////////////////////////////////////

import { useSelector } from "react-redux";
import ProductCard from "/src/components/ProductCard.jsx";

const Shop = () => {
  const { products, loading, error } = useSelector((state) => ({
    products: state.product.products,
    loading: state.product.loading,
    error: state.product.error,
  }));

  if (loading)
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
        <p className="mt-2">Loading products...</p>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-12 text-red-500">
        <p>⚠️ Error loading products</p>
        <p className="text-sm mt-2">{error.message}</p>
      </div>
    );

  return (
    <div className="bg-green-900 min-h-screen py-12 px-4 md:px-16 lg:px-24 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center border-b-2 border-green-700 pb-4">
        Our Collection
      </h2>

      {products?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={`${product.id}-${product.slug}`}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-green-800 rounded-lg">
          <p className="text-xl mb-4">No products available</p>
          <button
            className="bg-white text-green-900 px-6 py-2 rounded-lg hover:bg-gray-100"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
