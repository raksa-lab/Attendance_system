// src/components/EventDetailCard.jsx
import React from 'react';

const EventDetailCard = () => {
  const getStatusDotColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500';
      case 'Inactive':
        return 'bg-red-500';
      case 'Pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-400';
    }
  };

  const eventStatus = 'Active';

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4 sm:p-6 font-sans">
      <header className="mb-10 py-3 px-6 bg-blue-600 text-white rounded-xl shadow-lg font-extrabold text-2xl tracking-wide">
        Event Details
      </header>
      <section className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl transform hover:scale-[1.005] transition duration-300 ease-in-out">
        {/* NICC Event Header */}
        <div className="pb-6 border-b border-gray-200 mb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">NICC Tech Summit 2025</h1>
        </div>

        {/* Organizer and Status Section */}
        <div className="mb-8 pb-6 border-b border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center text-lg">
            <span className="text-gray-600 font-semibold mr-3">Organizer :</span>
            <span className="text-gray-800 font-medium">Sopanha Kea</span>
          </div>
          <div className="flex items-center text-lg">
            <span className="text-gray-600 font-semibold mr-3">Status :</span>
            <span
              className={`h-3 w-3 rounded-full mr-2 ${getStatusDotColor(eventStatus)}`}
              aria-label={`Event status: ${eventStatus}`}
            ></span>
            <span className="text-green-600 font-bold">{eventStatus}</span>
          </div>
        </div>

        {/* Event Details Section (Date, Time, Location, Registered) */}
        <div className="space-y-5 text-lg">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-800 font-medium">10-12 April, 2025</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-800 font-medium">9:00 AM - 5:00 PM (GMT+7)</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-800 font-medium">Royal University of Phnom Penh (RUPP), CJCC</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a4 4 0 014-4h12.55M18 10a6 6 0 00-12 0v2H4a2 2 0 00-2 2v2a2 2 0 002 2h16a2 2 0 002-2v-2a2 2 0 00-2-2h-3v-2z" />
            </svg>
            <span className="text-gray-800 font-medium">
              <span className="font-bold text-blue-600">150</span> / 200 Registered
            </span>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <footer className="mt-10 flex space-x-6">
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-75">
          Back
        </button>
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-opacity-75">
          Export Data
        </button>
      </footer>
    </div>
  );
};

export default EventDetailCard;
