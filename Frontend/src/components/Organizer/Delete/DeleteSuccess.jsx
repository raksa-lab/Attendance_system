import React from "react";

export default function DeleteSuccess({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg text-center relative">
        {/* Close button (optional) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
        >
          &times;
        </button>

        {/* Icon */}
        <div className="text-red-600 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            <path
              fillRule="evenodd"
              d="M18 13a1 1 0 100 2h.01a1 1 0 100-2H18z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-semibold text-gray-800">Delete Successful</h2>
        <p className="text-gray-600 mt-2">The event was removed successfully.</p>

        {/* Okay Button */}
        <button
          onClick={onClose}
          className="mt-6 px-8 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
        >
          Okay
        </button>
      </div>
    </div>
  );
}


