// import React from "react";

// const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
//   if (!isModelOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
//         <button
//           className="absolute top-4 right-4 text-gray-300 text-3xl"
//           onClick={() => setIsModelOpen(false)}
//         >
//           &times;
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;

///////////////////////////////////////////////////////////////////////////////////////

import PropTypes from "prop-types";
import { useEffect } from "react";

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; // Re-enable scrolling when modal closes
    };
  }, [isModalOpen, setIsModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={() => setIsModalOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-md relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          onClick={() => setIsModalOpen(false)}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.o                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rg/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
