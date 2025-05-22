// import React from "react";
// import {
//   FaHeadset,
//   FaLock,
//   FaMoneyBillWave,
//   FaShippingFast,
//   FaTag,
// } from "react-icons/fa";

// const InfoSection = () => {
//   const infoItems = [
//     {
//       icon: <FaShippingFast className="text-3xl text-red-600" />,
//       title: "Free Shipping",
//       description: "Get your oders delivered with no extra cost",
//     },
//     {
//       icon: <FaHeadset className="text-3xl text-red-600 " />,
//       title: "Support 24/7",
//       description: "We are here to asist you anytime",
//     },
//     {
//       icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
//       title: "100% Money Back",
//       description: "Full refund if you are not satisfied",
//     },
//     {
//       icon: <FaLock className="text-3xl text-red-600" />,
//       title: "Payment Secure",
//       description: "Your payment information is safe with us",
//     },
//     {
//       icon: <FaTag className="text-3xl text-red-600" />,
//       title: "Discount",
//       description: "Enjoy the best prices on our products",
//     },
//   ];
//   return (
//     <div className="bg-green-900 pb-8 pt-12">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
//         {infoItems.map((item, index) => (
//           //////////For great effects///////////////////////////////////////////////////////

//           <div
//             key={index}
//             className="flex flex-col items-center text-center p-4 rounded-lg shadow-md shadow-white border border-white transform transition-transform duration-300 hover:scale-105 cursor-pointer"
//           >
//             {item.icon}
//             <h3 className="mt-4 text-xl font-semibold text-white">
//               {item.title}
//             </h3>
//             <p className="mt-2 text-white">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InfoSection;
///////////////////////////////////////////////////////////////////////////////////////////////

import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
  ];

  return (
    <div className="bg-green-900 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg bg-green-800 hover:bg-green-700 border border-green-600 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
            aria-label={`${item.title} - ${item.description}`}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-200">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
