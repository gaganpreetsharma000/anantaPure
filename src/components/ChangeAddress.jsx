// import React, { useState } from "react";

// const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
//   const [newAddress, setNewAddress] = useState("");
//   const onClose = () => {
//     setAddress(newAddress);
//     setIsModelOpen(false);
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter new address"
//         className="border p-2 w-full mb-4"
//         onChange={(e) => setNewAddress(e.target.value)}
//       />
//       <div className="flex justify-end">
//         <button
//           className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
//           onClick={() => setIsModelOpen(false)}
//         >
//           Cancel
//         </button>
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded"
//           onClick={onClose}
//         >
//           Save Address
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChangeAddress;
/////////////////////////////////////////////////////////////////////////////////

import PropTypes from "prop-types";
import { useState } from "react";

const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
  const [newAddress, setNewAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAddress(newAddress);
    setIsModelOpen(false);
  };

  const handleCancel = () => {
    setIsModelOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="new-address"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          New Delivery Address
        </label>
        <input
          id="new-address"
          type="text"
          placeholder="Enter full address including zip code"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
          required
          minLength={10}
          aria-describedby="address-help"
        />
        <p id="address-help" className="mt-1 text-sm text-gray-500">
          Please include street, city, and postal code
        </p>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={handleCancel}
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          disabled={!newAddress.trim() || isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Address"}
        </button>
      </div>
    </form>
  );
};

ChangeAddress.propTypes = {
  setAddress: PropTypes.func.isRequired,
  setIsModelOpen: PropTypes.func.isRequired,
};

export default ChangeAddress;
