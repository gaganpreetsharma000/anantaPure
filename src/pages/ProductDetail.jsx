import { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();

  useEffect(() => {
    const newProduct = products.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id, products]);

  if (!product) return <div>Loading....</div>;
  return (
    <div className=" container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className=" flex flex-col md:flex-row gap-x-16">
        {/* Product Information */}
        <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
          <img src={product.image} alt={product.name} className="h-full" />
        </div>

        {/* Product Information */}
        <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ${product.price}
          </p>

          <div className="flex items-center mb-4 gap-x-2">
            {/*<label htmlFor="quantity" className="mr-2"> Quantity: </label>*/}
            <input id="quantity" type="number" className="border p-1 w-16" />
            <button className="bg-red-600 text-white py-1.5 px-4 hover:bg-red-800">
              Add to Cart
            </button>
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center">
              <FaCarSide className="mr-1" />
              Dilevery & Return
            </p>
            <p className="flex item-center">
              <FaQuestion className="mr-1" />
              Ask a Question
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Product Description</h3>
        <p>We have to write product description here </p>
      </div>
    </div>
  );
};

export default ProductDetail;
////////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";
// import { FaCarSide, FaQuestion } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import PropTypes from "prop-types";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const products = useSelector((state) => state.product.products);
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const foundProduct = products.find((p) => p.id === parseInt(id));
//     setProduct(foundProduct);
//     setLoading(false);
//   }, [id, products]);

//   if (loading) return <div className="text-center py-8">Loading...</div>;
//   if (!product)
//     return <div className="text-center py-8">Product not found</div>;

//   return (
//     <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
//       <div className="flex flex-col md:flex-row gap-x-16">
//         <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="h-full object-contain"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = "/path/to/default-image.jpg";
//             }}
//           />
//         </div>

//         <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
//           <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
//           <p className="text-xl font-semibold text-gray-800 mb-4">
//             ${product.price.toFixed(2)}
//           </p>
//           {/* ... rest of the component ... */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
//////////////////////////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";
// import {
//   FaStar,
//   FaRegStar,
//   FaStarHalfAlt,
//   FaShoppingCart,
//   FaHeart,
// } from "react-icons/fa";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
// import { addToCart } from "src/redux/cartSlice";
// import LoadingSpinner from "../components/LoadingSpinner.jsx";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const products = useSelector((state) => state.product.products);
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   useEffect(() => {
//     const foundProduct = products.find((p) => p.id === parseInt(id));
//     if (foundProduct) {
//       setProduct({
//         ...foundProduct,
//         images: foundProduct.images || [foundProduct.image],
//       });
//     }
//     setLoading(false);
//   }, [id, products]);

//   const handleAddToCart = () => {
//     dispatch(
//       addToCart({
//         ...product,
//         quantity: quantity,
//       })
//     );
//     alert(`${quantity} × ${product.name} added to cart`);
//   };

//   const toggleWishlist = () => {
//     setIsWishlisted(!isWishlisted);
//   };

//   if (loading) return <LoadingSpinner />;
//   if (!product)
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl mb-4">Product not found</h2>
//         <button
//           className="bg-green-900 text-white px-6 py-2 rounded-lg"
//           onClick={() => navigate("/shop")}
//         >
//           Back to Shop
//         </button>
//       </div>
//     );

//   return (
//     <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 min-h-screen">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Image Gallery */}
//         <div className="lg:w-1/2">
//           <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
//             <img
//               src={product.images[selectedImage]}
//               alt={product.name}
//               className="w-full h-96 object-contain"
//             />
//           </div>
//           <div className="flex gap-2 overflow-x-auto py-2">
//             {product.images.map((img, index) => (
//               <button
//                 key={index}
//                 className={`w-16 h-16 border-2 ${
//                   selectedImage === index
//                     ? "border-green-900"
//                     : "border-transparent"
//                 }`}
//                 onClick={() => setSelectedImage(index)}
//               >
//                 <img
//                   src={img}
//                   alt={`${product.name} thumbnail ${index + 1}`}
//                   className="w-full h-full object-contain"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="lg:w-1/2">
//           <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//           <div className="flex items-center mb-4">
//             <div className="flex text-yellow-500 mr-2">
//               {[1, 2, 3, 4, 5].map((star) =>
//                 product.rating >= star ? (
//                   <FaStar key={star} />
//                 ) : product.rating >= star - 0.5 ? (
//                   <FaStarHalfAlt key={star} />
//                 ) : (
//                   <FaRegStar key={star} />
//                 )
//               )}
//             </div>
//             <span className="text-gray-600">
//               ({product.reviewCount || 0} reviews)
//             </span>
//           </div>

//           <div className="mb-6">
//             <span className="text-2xl font-bold text-green-900">
//               ${product.price.toFixed(2)}
//             </span>
//             {product.originalPrice && (
//               <span className="ml-2 text-gray-500 line-through">
//                 ${product.originalPrice.toFixed(2)}

//               </span>
//             )}
//           </div>

//           <div className="mb-6">
//             <label htmlFor="quantity" className="block mb-2 font-medium">
//               Quantity:
//             </label>
//             <div className="flex items-center">
//               <button
//                 className="bg-gray-200 px-3 py-1 rounded-l"
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//               >
//                 -
//               </button>
//               <input
//                 type="number"
//                 id="quantity"
//                 min="1"
//                 value={quantity}
//                 onChange={(e) =>
//                   setQuantity(Math.max(1, parseInt(e.target.value) || 1))
//                 }
//                 className="w-16 text-center border-t border-b border-gray-300 py-1"
//               />
//               <button
//                 className="bg-gray-200 px-3 py-1 rounded-r"
//                 onClick={() => setQuantity(quantity + 1)}
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <div className="flex gap-4 mb-8">
//             <button
//               onClick={handleAddToCart}
//               className="flex-1 bg-green-900 hover:bg-green-800 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2"
//             >
//               <FaShoppingCart /> Add to Cart
//             </button>
//             <button
//               onClick={toggleWishlist}
//               className={`w-12 flex items-center justify-center rounded-lg border ${
//                 isWishlisted
//                   ? "bg-red-100 text-red-500 border-red-500"
//                   : "bg-white border-gray-300"
//               }`}
//             >
//               <FaHeart />
//             </button>
//           </div>

//           <div className="bg-gray-50 p-4 rounded-lg mb-6">
//             <h3 className="font-bold mb-2">Product Details</h3>
//             <ul className="list-disc pl-5 space-y-1">
//               <li>Material: {product.material || "Sacred materials"}</li>
//               <li>Dimensions: {product.dimensions || "Varies by item"}</li>
//               <li>Weight: {product.weight || "Lightweight"}</li>
//               <li>Made in: {product.origin || "India"}</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Description Section */}
//       <div className="mt-12 bg-white p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold mb-4">Sacred Description</h2>
//         <div className="prose max-w-none">
//           {product.description ||
//             "This sacred item carries spiritual significance..."}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
