// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Order from "./pages/Order";
// import FilterData from "./pages/filterData";
// import ProductDetail from "./pages/ProductDetail";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import { useState, useEffect, useRef } from "react";
// import omChanting from "./assets/Images/Om_Chanting.mp3";
// import SplashScreen from "./components/SplashScreen";
// import "./components/SplashScreen.css";
// import Cookies from "./pages/Cookies";

// function App() {
//   const [order, setOrder] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const audioRef = useRef(null);

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.volume = 0.2;
//       audioRef.current.play().catch((error) => {
//         console.error("Audio playback failed:", error);
//       });
//     }
//   }, []);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 6000); // 2-second delay
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) return <SplashScreen />;

//   return (
//     <BrowserRouter>
//       <audio ref={audioRef} src={omChanting} loop autoPlay />
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
//         <Route path="/order-confirmation" element={<Order order={order} />} />
//         <Route path="/filter-data" element={<FilterData />} />
//         <Route path="/product/:id" element={<ProductDetail />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/cookies" element={<Cookies />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

////////////////////////////////////////////////////////////////////////////

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import FilterData from "./pages/filterData";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { useState, useEffect, useRef } from "react";
import omChanting from "./assets/Images/Om_Chanting.mp3";
import SplashScreen from "./components/SplashScreen";
import "./components/SplashScreen.css";
import Cookies from "./pages/Cookies";

function App() {
  const [order, setOrder] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);

  // Audio playback setup
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
  }, []);

  // Fetch products
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false)); // Stop loading after fetch
  }, []);

  // Splash screen timer (fallback in case fetch is slow)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <BrowserRouter>
      <audio ref={audioRef} src={omChanting} loop autoPlay />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/shop" element={<Shop products={products} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
        <Route path="/order-confirmation" element={<Order order={order} />} />
        <Route
          path="/filter-data"
          element={<FilterData products={products} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetail products={products} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
