// import React from "react";
// import { useSelector } from "react-redux";
// import ProductCard from "/src/components/ProductCard";
// import NoProduct from "../assets/Images/not_found.jpg";

// const FilterData = () => {
//   const filterProducts = useSelector((state) => state.product.filteredData);
//   return (
//     <div className="bg-green-900 mx-auto py-12 px-4 md:px-16 lg:px-24">
//       {filterProducts.length > 0 ? (
//         <>
//           <h2 className=" text-2xl font-bold mb-6 text-center">Shop</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
//             {filterProducts.map((product) => (
//               <ProductCard product={product} />
//             ))}
//           </div>
//         </>
//       ) : (
//         <div className="flex justify-center">
//           <img src={NoProduct} alt="" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilterData;

///////////////////////////////////////////////////////////////////////////////////////////////////////

import { useSelector } from "react-redux";
import ProductCard from "/src/components/ProductCard.jsx";
import { FaFilter, FaTimes } from "react-icons/fa";
import { useState } from "react";

const FilterData = () => {
  const { filteredProducts, filters } = useSelector((state) => state.product);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-green-50 min-h-screen py-12 px-4 md:px-16 lg:px-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">
          {filters.category
            ? `${filters.category} Collection`
            : "Filtered Products"}
        </h2>
        <button
          className="flex items-center gap-2 bg-green-900 text-white px-4 py-2 rounded-lg"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? <FaTimes /> : <FaFilter />}
          {showFilters ? "Close Filters" : "Filters"}
        </button>
      </div>

      {showFilters && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="font-bold mb-4">Filter Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block mb-2 font-medium">Price Range</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full p-2 border rounded"
                />
                <span>to</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 font-medium">Categories</label>
              <select className="w-full p-2 border rounded">
                <option value="">All Categories</option>
                <option value="statues">Statues</option>
                <option value="malas">Malas</option>
                <option value="incense">Incense</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 font-medium">Sort By</label>
              <select className="w-full p-2 border rounded">
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          <button className="mt-4 bg-green-900 text-white px-6 py-2 rounded-lg">
            Apply Filters
          </button>
        </div>
      )}

      {filteredProducts?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={`filtered-${product.id}`} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <div className="max-w-md mx-auto">
            <img
              src="/images/no-products-found.png"
              alt="No products found"
              className="w-full max-w-xs mx-auto mb-6"
            />
            <h3 className="text-xl font-bold mb-2">No Matching Products</h3>
            <p className="text-gray-600 mb-4">
              We couldn not find any products matching your filters.
            </p>
            <button className="bg-green-900 hover:bg-green-800 text-white px-6 py-2 rounded-lg transition-colors">
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterData;
