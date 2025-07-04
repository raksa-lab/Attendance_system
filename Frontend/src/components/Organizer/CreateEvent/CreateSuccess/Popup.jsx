import React, { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// Main App component
function Popup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      {/* <button
        onClick={togglePopup}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
      >
        Open Event Details
      </button> */}

      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 transform transition-all duration-300 ease-in-out scale-100 opacity-100">
            {/* Popup Header */}
            <div className="pb-4 border-b border-gray-200 mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">NICC Event</h2>
            </div>

            {/* Event Details */}
            <div className="space-y-4 text-gray-700">
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm">
                  <span className="font-medium">Organizer:</span> Sopanha Kea
                </p>
                <p className="text-sm flex items-center mt-1">
                  <span className="font-medium mr-2">Status:</span>
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span> Active
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  {/* Calendar icon - using a simple SVG for demonstration */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>10-12 Apr 2025</span>
                </div>

                <div className="flex items-center text-sm">
                  {/* Clock icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>9:00 AM - 5:00 PM</span>
                </div>

                <div className="flex items-center text-sm">
                  {/* Location icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Rupp CJCC</span>
                </div>

                <div className="flex items-center text-sm">
                  {/* Users icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2m3-2h4m-4 0h4m-1-5a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span>150/200 Registered</span>
                </div>
              </div>
            </div>

            {/* Popup Actions */}
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={togglePopup}
                className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
              >
                Back
              </button>
              <button
                className="px-6 py-2 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75"
              >
                Export
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;

// This part is typically in your main.jsx or index.jsx for a Vite React app
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css'; // Assuming you have a basic CSS file for Tailwind imports

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
