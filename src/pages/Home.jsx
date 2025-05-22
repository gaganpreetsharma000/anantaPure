import { useEffect } from "react";
import { Categories, mockData } from "../assets/mockData";
import herbal from "../assets/Images/herbal.png";
import InfoSection from "/src/components/InfoSection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "/src/components/ProductCard";
import Shop from "./Shop";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products.slice(0, 5));

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  return (
    <div className="bg-green-900 mt-0.5 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            OUR INVENTORY CONTAINS
          </div>
          <ul className="space-y-4 bg-lime-100 p-3 border">
            {Categories.map((category, index) => (
              <li
                key={`category-${index}`}
                className="flex items-center text-sm font-medium hover:text-green-800 transition-colors"
              >
                <div className="bg-green-900 w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative shadow-lg shadow-white border overflow-hidden">
          <img
            src={herbal}
            alt="Ananta Pure herbal products"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-16 left-8">
            <p className="text-black mb-4 font-medium">Herbal e-Shop</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              WELCOME TO ANANTA PURE
            </h1>
            <p className="text-xl mt-2.5 font-bold text-gray-800">
              PURE LIKE A SOUL
            </p>
            <button
              className="bg-red-600 px-8 py-2 text-white mt-4 hover:bg-red-700 transition-all duration-300 hover:scale-105 rounded-md"
              onClick={() => navigate("/shop")}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <InfoSection />

      <div className="container mx-auto py-12">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">
          Top Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Shop />
    </div>
  );
};

export default Home;
