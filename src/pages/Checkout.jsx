// import React, { useState } from "react";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// function Checkout({ setOrder }) {
//   const [billingToggle, setBillingToggle] = useState(true);
//   const [shippingToggle, setShippingToggle] = useState(false);
//   const [paymentToggle, setPaymentToggle] = useState(false);

//   const [paymentMethod, setPaymentMethod] = useState("cod");
//   const [shippingInfo, setShippingInfo] = useState({
//     address: "",
//     city: "",
//     zip: "",
//   });

//   const cart = useSelector((state) => state.cart);
//   const navigate = useNavigate();

//   const handleOrder = () => {
//     const newOrder = {
//       products: cart.products,
//       orderNumber: "123456",
//       shippingInformation: shippingInfo,
//       totalPrice: cart.totalPrice,
//     };
//     setOrder(newOrder);
//     navigate("/order-confirmation");
//   };

//   return (
//     <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
//       <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
//       <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8 ">
//         <div className="md:w-2/3">
//           <div className="border p-2 mb-6">
//             <div
//               className="flex items-center justify-between"
//               onClick={() => setBillingToggle(!billingToggle)}
//             >
//               <h3 className="text-lg font-semibold mb-2">
//                 Billing Information
//               </h3>
//               {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
//             </div>

//             <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
//               <div>
//                 <label className="block text-gray-700" htmlFor="">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter Name"
//                   className="w-full px-3 py-2 border"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700" htmlFor="">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter Email"
//                   className="w-full px-3 py-2 border "
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor="">
//                   Phone
//                 </label>
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Enter Phone"
//                   className="w-full px-3 py-2 border"
//                 />
//               </div>
//             </div>
//           </div>
//           {/* shipping  */}
//           <div className="border p-2 mb-6">
//             <div
//               className="flex items-center justify-between"
//               onClick={() => setShippingToggle(!shippingToggle)}
//             >
//               <h3 className="text-lg font-semibold mb-2">
//                 Shipping Information
//               </h3>
//               {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
//             </div>

//             <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
//               <div>
//                 <label className="block text-gray-700" htmlFor="">
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Enter address"
//                   className="w-full px-3 py-2 border"
//                   onChange={(e) =>
//                     setShippingInfo({
//                       ...shippingInfo,
//                       address: e.target.value,
//                     })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700">City</label>
//                 <input
//                   type="text"
//                   name="city"
//                   placeholder="Enter city"
//                   className="w-full px-3 py-2 border "
//                   onChange={(e) =>
//                     setShippingInfo({ ...shippingInfo, city: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700" htmlFor="">
//                   Zip Code
//                 </label>
//                 <input
//                   type="text"
//                   name="zip"
//                   placeholder="Enter zip code"
//                   className="w-full px-3 py-2 border"
//                   onChange={(e) =>
//                     setShippingInfo({ ...shippingInfo, zip: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700" htmlFor="">
//                   Country
//                 </label>
//                 <input
//                   type="text"
//                   name="country"
//                   placeholder="Enter country"
//                   className="w-full px-3 py-2 border "
//                   onChange={(e) =>
//                     setShippingInfo({
//                       ...shippingInfo,
//                       country: e.target.value,
//                     })
//                   }
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Payment */}

//           <div className="border p-2 mb-6">
//             <div
//               className="flex items-center justify-between"
//               onClick={() => setPaymentToggle(!paymentToggle)}
//             >
//               <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
//               {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
//             </div>

//             <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
//               <div className="flex items-center mb-2 space-x-2">
//                 <input
//                   type="radio"
//                   name="payment"
//                   checked={paymentMethod === "cod"}
//                   onChange={() => setPaymentMethod("cod")}
//                 />
//                 <label className="block text-gray-700 ml-2">
//                   Cash on Delivery
//                 </label>
//               </div>

//               <div className="flex items-center mb-2 space-x-2">
//                 <input
//                   type="radio"
//                   name="payment"
//                   checked={paymentMethod === "dc"}
//                   onChange={() => setPaymentMethod("dc")}
//                 />
//                 <label className="block text-gray-700 ml-2">Debit Card</label>
//               </div>
//               {paymentMethod === "dc" && (
//                 <div className="bg-gray-100 p-4 rounded-lg mb-4">
//                   <h3 className="text-xl font-semibold mb-4">
//                     Debit Card Information
//                   </h3>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       Card Number
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Card Number"
//                       className="border p-2 w-full rounded"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       Card Holder Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Card Holder Name"
//                       className="border p-2 w-full rounded"
//                       required
//                     />
//                   </div>
//                   <div className="flex justify-between mb-4">
//                     <div className="w-1/2 mr-2">
//                       <label className="block text-gray-700 font-semibold mb-2">
//                         Expire Date
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="MM/YY"
//                         className="border p-2 w-full rounded"
//                         required
//                       />
//                     </div>
//                     <div className="w-1/2 ml-2">
//                       <label className="block text-gray-700 font-semibold mb-2">
//                         CVV
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="CVV"
//                         className="border p-2 w-full rounded"
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
//           <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
//           <div className="space-y-4">
//             {cart.products.map((product) => (
//               <div key={product.id} className="flex justify-between">
//                 <div className="flex items-center">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-16 h-16 object-contain rounded"
//                   />
//                   <div className="ml-4">
//                     <h4 className="text-md font-semibold">{product.name}</h4>
//                     <p className="text-gray-600">
//                       &{product.price} x {product.quantity}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="text-gray-800">
//                   ${product.price * product.quantity}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-4 border-t pt-4">
//             <div className="flex justify-between ">
//               <span>Total Price</span>
//               <span className="font-semibold">
//                 ${cart.totalPrice.toFixed(2)}
//               </span>
//             </div>
//           </div>
//           <button
//             className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
//             onClick={handleOrder}
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;

/////////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import PropTypes from "prop-types";

import {
  FaAngleDown,
  FaAngleUp,
  FaCreditCard,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
  const [activeSection, setActiveSection] = useState({
    billing: true,
    shipping: false,
    payment: false,
  });

  const [formData, setFormData] = useState({
    billing: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    shipping: {
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "India",
    },
    payment: {
      method: "cod",
      cardNumber: "",
      expiry: "",
      cvv: "",
      nameOnCard: "",
    },
  });

  const [errors, setErrors] = useState({});
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setActiveSection((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === section ? !prev[key] : false;
        return acc;
      }, {}),
    }));
  };

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));

    // Clear error when user starts typing
    if (errors[`${section}${field}`]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[`${section}${field}`];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Billing Validation
    if (!formData.billing.firstName)
      newErrors.billingFirstName = "First name is required";
    if (!formData.billing.lastName)
      newErrors.billingLastName = "Last name is required";
    if (!formData.billing.email) {
      newErrors.billingEmail = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.billing.email)) {
      newErrors.billingEmail = "Email is invalid";
    }
    if (!formData.billing.phone) newErrors.billingPhone = "Phone is required";

    // Shipping Validation
    if (!formData.shipping.address)
      newErrors.shippingAddress = "Address is required";
    if (!formData.shipping.city) newErrors.shippingCity = "City is required";
    if (!formData.shipping.zip) newErrors.shippingZip = "Zip code is required";
    if (!formData.shipping.country)
      newErrors.shippingCountry = "Country is required";

    // Payment Validation if not COD
    if (formData.payment.method === "card") {
      if (!formData.payment.cardNumber)
        newErrors.cardNumber = "Card number is required";
      if (!formData.payment.expiry)
        newErrors.expiry = "Expiry date is required";
      if (!formData.payment.cvv) newErrors.cvv = "CVV is required";
      if (!formData.payment.nameOnCard)
        newErrors.nameOnCard = "Name on card is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const order = {
      orderNumber: `ORD-${Date.now().toString().slice(-6)}`,
      date: new Date().toISOString(),
      customer: {
        ...formData.billing,
        shipping: formData.shipping,
      },
      paymentMethod: formData.payment.method,
      items: cart.products.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image,
      })),
      subtotal: cart.totalPrice,
      shippingFee: cart.totalPrice > 5000 ? 0 : 99,
      tax: Math.round(cart.totalPrice * 0.18),
      status: "Processing",
      total:
        cart.totalPrice +
        (cart.totalPrice > 5000 ? 0 : 99) +
        Math.round(cart.totalPrice * 0.18),
    };

    setOrder(order);
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Complete Your Purchase</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Forms */}
          <div className="lg:w-2/3 space-y-6">
            {/* Billing Information */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => toggleSection("billing")}
              >
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  {activeSection.billing ? (
                    <FaAngleUp className="text-green-900" />
                  ) : (
                    <FaAngleDown className="text-green-900" />
                  )}
                  <span>1. Billing Information</span>
                </h2>
                {formData.billing.firstName && formData.billing.lastName && (
                  <FaCheckCircle className="text-green-500" />
                )}
              </div>

              {activeSection.billing && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 font-medium">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.billing.firstName}
                      onChange={(e) =>
                        handleInputChange(
                          "billing",
                          "firstName",
                          e.target.value
                        )
                      }
                      className={`w-full px-4 py-2 border rounded ${
                        errors.billingFirstName ? "border-red-500" : ""
                      }`}
                    />
                    {errors.billingFirstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.billingFirstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.billing.lastName}
                      onChange={(e) =>
                        handleInputChange("billing", "lastName", e.target.value)
                      }
                      className={`w-full px-4 py-2 border rounded ${
                        errors.billingLastName ? "border-red-500" : ""
                      }`}
                    />
                    {errors.billingLastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.billingLastName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Email *</label>
                    <input
                      type="email"
                      value={formData.billing.email}
                      onChange={(e) =>
                        handleInputChange("billing", "email", e.target.value)
                      }
                      className={`w-full px-4 py-2 border rounded ${
                        errors.billingEmail ? "border-red-500" : ""
                      }`}
                    />
                    {errors.billingEmail && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.billingEmail}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Phone *</label>
                    <input
                      type="tel"
                      value={formData.billing.phone}
                      onChange={(e) =>
                        handleInputChange("billing", "phone", e.target.value)
                      }
                      className={`w-full px-4 py-2 border rounded ${
                        errors.billingPhone ? "border-red-500" : ""
                      }`}
                    />
                    {errors.billingPhone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.billingPhone}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Shipping Information */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => toggleSection("shipping")}
              >
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  {activeSection.shipping ? (
                    <FaAngleUp className="text-green-900" />
                  ) : (
                    <FaAngleDown className="text-green-900" />
                  )}
                  <span>2. Shipping Information</span>
                </h2>
                {formData.shipping.address && formData.shipping.city && (
                  <FaCheckCircle className="text-green-500" />
                )}
              </div>

              {activeSection.shipping && (
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 font-medium">Address *</label>
                    <input
                      type="text"
                      value={formData.shipping.address}
                      onChange={(e) =>
                        handleInputChange("shipping", "address", e.target.value)
                      }
                      className={`w-full px-4 py-2 border rounded ${
                        errors.shippingAddress ? "border-red-500" : ""
                      }`}
                      placeholder="Street address"
                    />
                    {errors.shippingAddress && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shippingAddress}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block mb-1 font-medium">City *</label>
                      <input
                        type="text"
                        value={formData.shipping.city}
                        onChange={(e) =>
                          handleInputChange("shipping", "city", e.target.value)
                        }
                        className={`w-full px-4 py-2 border rounded ${
                          errors.shippingCity ? "border-red-500" : ""
                        }`}
                      />
                      {errors.shippingCity && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.shippingCity}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">State</label>
                      <input
                        type="text"
                        value={formData.shipping.state}
                        onChange={(e) =>
                          handleInputChange("shipping", "state", e.target.value)
                        }
                        className="w-full px-4 py-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        value={formData.shipping.zip}
                        onChange={(e) =>
                          handleInputChange("shipping", "zip", e.target.value)
                        }
                        className={`w-full px-4 py-2 border rounded ${
                          errors.shippingZip ? "border-red-500" : ""
                        }`}
                      />
                      {errors.shippingZip && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.shippingZip}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">Country *</label>
                    <select
                      value={formData.shipping.country}
                      onChange={(e) =>
                        handleInputChange("shipping", "country", e.target.value)
                      }
                      className={`w-full px-4 py-2 border rounded ${
                        errors.shippingCountry ? "border-red-500" : ""
                      }`}
                    >
                      <option value="India">India</option>
                      <option value="USA">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                    {errors.shippingCountry && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shippingCountry}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => toggleSection("payment")}
              >
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  {activeSection.payment ? (
                    <FaAngleUp className="text-green-900" />
                  ) : (
                    <FaAngleDown className="text-green-900" />
                  )}
                  <span>3. Payment Method</span>
                </h2>
                {formData.payment.method && (
                  <FaCheckCircle className="text-green-500" />
                )}
              </div>

              {activeSection.payment && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      className={`flex-1 flex items-center justify-center px-4 py-3 border rounded-lg ${
                        formData.payment.method === "cod"
                          ? "bg-green-100 border-green-500 text-green-900"
                          : "bg-white border-gray-300"
                      }`}
                      onClick={() =>
                        handleInputChange("payment", "method", "cod")
                      }
                    >
                      <FaMoneyBillWave className="mr-2" />
                      Cash on Delivery
                    </button>
                    <button
                      type="button"
                      className={`flex-1 flex items-center justify-center px-4 py-3 border rounded-lg ${
                        formData.payment.method === "card"
                          ? "bg-green-100 border-green-500 text-green-900"
                          : "bg-white border-gray-300"
                      }`}
                      onClick={() =>
                        handleInputChange("payment", "method", "card")
                      }
                    >
                      <FaCreditCard className="mr-2" />
                      Credit/Debit Card
                    </button>
                  </div>

                  {formData.payment.method === "card" && (
                    <div className="bg-gray-50 p-4 rounded-lg space-y-4 mt-4">
                      <div>
                        <label className="block mb-1 font-medium">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          value={formData.payment.cardNumber}
                          onChange={(e) =>
                            handleInputChange(
                              "payment",
                              "cardNumber",
                              e.target.value
                            )
                          }
                          className={`w-full px-4 py-2 border rounded ${
                            errors.cardNumber ? "border-red-500" : ""
                          }`}
                        />
                        {errors.cardNumber && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.cardNumber}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-1 font-medium">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            value={formData.payment.expiry}
                            onChange={(e) =>
                              handleInputChange(
                                "payment",
                                "expiry",
                                e.target.value
                              )
                            }
                            className={`w-full px-4 py-2 border rounded ${
                              errors.expiry ? "border-red-500" : ""
                            }`}
                          />
                          {errors.expiry && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.expiry}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block mb-1 font-medium">
                            CVV *
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            value={formData.payment.cvv}
                            onChange={(e) =>
                              handleInputChange(
                                "payment",
                                "cvv",
                                e.target.value
                              )
                            }
                            className={`w-full px-4 py-2 border rounded ${
                              errors.cvv ? "border-red-500" : ""
                            }`}
                          />
                          {errors.cvv && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.cvv}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block mb-1 font-medium">
                          Name on Card *
                        </label>
                        <input
                          type="text"
                          value={formData.payment.nameOnCard}
                          onChange={(e) =>
                            handleInputChange(
                              "payment",
                              "nameOnCard",
                              e.target.value
                            )
                          }
                          className={`w-full px-4 py-2 border rounded ${
                            errors.nameOnCard ? "border-red-500" : ""
                          }`}
                        />
                        {errors.nameOnCard && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.nameOnCard}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow sticky top-4">
              <h2 className="text-xl font-bold mb-4">Your Order</h2>

              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                {cart.products.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-4"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-contain mr-4"
                      />
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-600 text-sm">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="font-medium">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{cart.totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{cart.totalPrice > 5000 ? "Free" : "₹99.00"}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>₹{(cart.totalPrice * 0.18).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2">
                  <span>Total</span>
                  <span>
                    ₹
                    {(
                      cart.totalPrice +
                      (cart.totalPrice > 5000 ? 0 : 99) +
                      cart.totalPrice * 0.18
                    ).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleSubmitOrder}
                className="w-full bg-green-900 hover:bg-green-800 text-white py-3 px-4 rounded-lg mt-6 transition-colors"
                disabled={cart.products.length === 0}
              >
                {cart.products.length > 0 ? "Place Order" : "Cart is Empty"}
              </button>

              <div className="mt-4 text-sm text-gray-500">
                <p>
                  By placing your order, you agree to our{" "}
                  <a href="/terms" className="text-green-900">
                    Terms of Service
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Checkout.propTypes = {
  setOrder: PropTypes.func.isRequired, // or PropTypes.func if not always required
};

export default Checkout;
