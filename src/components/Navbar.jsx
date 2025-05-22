// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import Modal from "./Modal";
// import Login from "./Login";
// import Register from "./Register";
// import { setSearchTerm } from "/src/redux/productSlice";

// const Navbar = () => {
//   const [isModelOpen, setIsModelOpen] = useState(false);
//   const [isLogin, setIsLogin] = useState(true);
//   const [search, setSearch] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     dispatch(setSearchTerm(search));
//     navigate("/filter-data");
//   };

//   const openSignUp = () => {
//     setIsLogin(false);
//     setIsModelOpen(true);
//   };

//   const openLogin = () => {
//     setIsLogin(true);
//     setIsModelOpen(true);
//   };

//   const products = useSelector((state) => state.cart.products);
//   return (
//     // <nav className="bg-black shadow-md">
//     <nav className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 shadow-lg shadow-gradient-to-r">
//       <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
//         {/* <div className="text-lg font-bold">
//           <Link to="/">ANANTA PURE</Link>
//         </div> */}

//         <div>
//           <img
//             src="images\NoBackgroundAnanta_Pure_for_browser_Favicon.png"
//             alt="ANANTA PURE Logo"
//             style={{
//               width: "160px",
//               height: "140px",
//               // marginRight: "10px",
//               borderRadius: "10px",
//               // marginLeft: "50px",
//             }}
//           />
//         </div>

//         {/* <div className="text-lg font-bold">
//           <Link
//             to="/"
//             className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 tracking-wide shadow-md" // <== Changes applied here
//           >
//             ANANTA PURE
//           </Link>
//         </div> */}

//         <div className="relative flex-1 mx-4">
//           <form onSubmit={handleSearch}>
//             <input
//               type="text"
//               placeholder="Search Product"
//               className="w-full border py-2 px-4"
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <FaSearch className="absolute top-3 right-3 text-red-500"></FaSearch>
//           </form>
//         </div>
//         <div className="flex items-center space-x-4">
//           <Link to="/cart" className="relative">
//             <FaShoppingCart className="text-lg" />
//             {products.length > 0 && (
//               <span className="absolute top-0 text-xs w-4 h-4 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
//                 {products.length}
//               </span>
//             )}
//           </Link>
//           <button
//             className="hidden md:block text-slate-50 text-lg"
//             onClick={() => setIsModelOpen(true)}
//             aria-label="Login or Register"
//           >
//             Login | Register
//           </button>

//           <button className="block md:hidden">
//             <FaUser />
//           </button>
//         </div>
//       </div>
//       <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
//         <Link to="/" className="hover:underline text-slate-50 text-lg ">
//           HOME
//         </Link>
//         <Link to="/shop" className="hover:underline text-slate-50 text-lg">
//           SHOP
//         </Link>
//         <Link to="/contact" className="hover:underline text-slate-50 text-lg">
//           CONTACT
//         </Link>
//         <Link to="/about" className="hover:underline text-slate-50 text-lg">
//           ABOUT
//         </Link>
//       </div>
//       <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
//         {isLogin ? (
//           <Login openSignUp={openSignUp} />
//         ) : (
//           <Register openLogin={openLogin} />
//         )}
//       </Modal>
//     </nav>
//   );
// };
// export default Navbar;
////////////////////////////////////////////////////////////////////////////////////////

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import Modal from "./Modal";
// import Login from "./Login";
// import Register from "./Register";
// import { setSearchTerm } from "/src/redux/productSlice";

// const Navbar = () => {
//   const [isModelOpen, setIsModelOpen] = useState(false);
//   const [isLogin, setIsLogin] = useState(true);
//   const [search, setSearch] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const products = useSelector((state) => state.cart.products);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     dispatch(setSearchTerm(search));
//     navigate("/filter-data");
//   };

//   const openSignUp = () => {
//     setIsLogin(false);
//     setIsModelOpen(true);
//   };

//   const openLogin = () => {
//     setIsLogin(true);
//     setIsModelOpen(true);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-green-900 via-yellow-500 to-red-500 shadow-lg">
//       <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
//         <div>
//           <Link to="/">
//             <img
//               src="images/NoBackgroundAnanta_Pure_for_browser_Favicon.png"
//               alt="ANANTA PURE Logo"
//               className="w-40 h-35 rounded-lg"
//             />
//           </Link>
//         </div>

//         <div className="relative flex-1 mx-4">
//           <form onSubmit={handleSearch}>
//             <input
//               type="text"
//               placeholder="Search Product"
//               className="w-full border py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//               onChange={(e) => setSearch(e.target.value)}
//               value={search}
//               aria-label="Search products"
//             />
//             <button
//               type="submit"
//               className="absolute top-3 right-3 text-red-500"
//               aria-label="Submit search"
//             >
//               <FaSearch />
//             </button>
//           </form>
//         </div>

//         <div className="flex items-center space-x-4">
//           <Link to="/cart" className="relative" aria-label="Shopping cart">
//             <FaShoppingCart className="text-lg text-white" />
//             {products.length > 0 && (
//               <span className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-600 rounded-full flex justify-center items-center text-white">
//                 {products.length}
//               </span>
//             )}
//           </Link>

//           <button
//             className="hidden md:block text-white text-lg hover:text-gray-200 transition-colors"
//             onClick={() => setIsModelOpen(true)}
//             aria-label="Login or Register"
//           >
//             Login | Register
//           </button>

//           <button
//             className="block md:hidden text-white"
//             onClick={() => setIsModelOpen(true)}
//             aria-label="User menu"
//           >
//             <FaUser />
//           </button>
//         </div>
//       </div>

//       <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
//         <Link
//           to="/"
//           className="hover:underline text-white text-lg transition-colors"
//         >
//           HOME
//         </Link>
//         <Link
//           to="/shop"
//           className="hover:underline text-white text-lg transition-colors"
//         >
//           SHOP
//         </Link>
//         <Link
//           to="/contact"
//           className="hover:underline text-white text-lg transition-colors"
//         >
//           CONTACT
//         </Link>
//         <Link
//           to="/about"
//           className="hover:underline text-white text-lg transition-colors"
//         >
//           ABOUT
//         </Link>
//       </div>

//       <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
//         {isLogin ? (
//           <Login openSignUp={openSignUp} />
//         ) : (
//           <Register openLogin={openLogin} />
//         )}
//       </Modal>
//     </nav>
//   );
// };

// export default Navbar;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "/src/redux/productSlice";

const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // BACKEND: Replace with actual auth state
  const [userData, setUserData] = useState(null); // BACKEND: User data from auth
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.products);

  // BACKEND: Check auth status on mount
  useEffect(() => {
    // Replace with actual auth check (e.g., verify JWT token)
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
      // Fetch user data here if needed
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  // BACKEND: Implement logout function
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setUserData(null);
    // Optional: Redirect to home after logout
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-green-900 via-yellow-500 to-red-500 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div>
          <Link to="/">
            <img
              src="images/NoBackgroundAnanta_Pure_for_browser_Favicon.png"
              alt="ANANTA PURE Logo"
              className="w-40 h-35 rounded-lg"
              loading="lazy" // Optimization: Lazy load logo
            />
          </Link>
        </div>

        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              aria-label="Search products"
            />
            <button
              type="submit"
              className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition-colors"
              aria-label="Submit search"
            >
              <FaSearch />
            </button>
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="/cart"
            className="relative group"
            aria-label="Shopping cart"
          >
            <FaShoppingCart className="text-lg text-white group-hover:text-gray-200 transition-colors" />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>

          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Link
                to="/account"
                className="hidden md:flex items-center space-x-1 text-white hover:text-gray-200 transition-colors"
                aria-label="User account"
              >
                <FaUser />
                <span>{userData?.name || "Account"}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="hidden md:flex items-center space-x-1 text-white hover:text-gray-200 transition-colors"
                aria-label="Logout"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <button
              className="hidden md:flex items-center space-x-1 text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsModelOpen(true)}
              aria-label="Login or Register"
            >
              <FaUser />
              <span>Login | Register</span>
            </button>
          )}

          <button
            className="block md:hidden text-white hover:text-gray-200 transition-colors"
            onClick={() => setIsModelOpen(true)}
            aria-label="User menu"
          >
            <FaUser />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold bg-green-900 bg-opacity-80">
        <Link
          to="/"
          className="hover:underline text-white text-lg transition-colors hover:text-yellow-300"
        >
          HOME
        </Link>
        <Link
          to="/shop"
          className="hover:underline text-white text-lg transition-colors hover:text-yellow-300"
        >
          SHOP
        </Link>
        <Link
          to="/contact"
          className="hover:underline text-white text-lg transition-colors hover:text-yellow-300"
        >
          CONTACT
        </Link>
        <Link
          to="/about"
          className="hover:underline text-white text-lg transition-colors hover:text-yellow-300"
        >
          ABOUT
        </Link>
        {isLoggedIn && (
          <Link
            to="/orders"
            className="hover:underline text-white text-lg transition-colors hover:text-yellow-300"
          >
            MY ORDERS
          </Link>
        )}
      </div>

      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? (
          <Login
            openSignUp={openSignUp}
            onLoginSuccess={() => setIsLoggedIn(true)}
          />
        ) : (
          <Register
            openLogin={openLogin}
            onRegisterSuccess={() => setIsLoggedIn(true)}
          />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
