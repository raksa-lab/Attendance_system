// src/components/EventDetailsCard.jsx
import React from 'react';
// Import specific icons from react-icons/hi2 (Heroicons v2)
import { CalendarDaysIcon, ClockIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline'; // Outline style icons

const EventDetailsCard = ({ event }) => {
  if (!event) {
    return <div className="text-gray-600 p-4">No event data to display.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full">
        {/* Header Section */}
        <div className="bg-gray-200 p-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            {event.name || "NICC Event"}
          </h1>
        </div>

        {/* Organizer and Status */}
        <div className="border-b border-gray-300 p-6 space-y-4">
          <div className="flex items-center">
            <span className="text-gray-600 font-medium w-24">Organizer :</span>
            <span className="text-gray-800">{event.organizer || "Sapanha Kea"}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 font-medium w-24">Status :</span>
            <span className="flex items-center space-x-2">
              <span className={`h-2.5 w-2.5 rounded-full ${event.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
              <span className="text-gray-800">{event.status || "Active"}</span>
            </span>
          </div>
        </div>

        {/* Event Details (Date, Time, Location, Registration) */}
        <div className="p-6 space-y-4">
          <div className="flex items-center">
            <CalendarDaysIcon className="h-5 w-5 text-gray-500 mr-3" />
            <span className="text-gray-700">{event.date || "10-12 Apr 2025"}</span>
          </div>

          <div className="flex items-center">
            <ClockIcon className="h-5 w-5 text-gray-500 mr-3" />
            <span className="text-gray-700">{event.time || "9:00 AM - 5:00 PM"}</span>
          </div>

          <div className="flex items-center">
            <MapPinIcon className="h-5 w-5 text-gray-500 mr-3" />
            <span className="text-gray-700">{event.location || "Rupp CJCC"}</span>
          </div>

          <div className="flex items-center">
            <UsersIcon className="h-5 w-5 text-gray-500 mr-3" />
            <span className="text-gray-700">{event.registered || "150/200 Registered"}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="p-6 bg-gray-100 flex justify-center space-x-4">
          <button
            onClick={() => console.log('Back button clicked')}
            className="px-6 py-3 rounded-lg text-white font-semibold bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Back
          </button>
          <button
            onClick={() => console.log('Export button clicked')}
            className="px-6 py-3 rounded-lg text-white font-semibold bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsCard;