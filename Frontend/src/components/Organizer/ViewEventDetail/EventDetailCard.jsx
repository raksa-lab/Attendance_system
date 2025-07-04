import React from "react";
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const DetailRow = ({ label, value }) => (
  <div className="flex items-center text-gray-700">
    <span className="font-semibold w-28 md:w-32">{label}:</span>
    <span>{value}</span>
  </div>
);

const IconRow = ({ value }) => (
  <div className="flex items-center text-gray-700">
    <Icon className="h-6 w-6 text-gray-500 mr-3" />
    <span>{value}</span>
  </div>
);

const EventDetailCard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      {/* Header */}
      <div className="bg-gray-300 text-gray-800 py-3 px-8 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold">View Event Details</h2>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl">
        {/* Title */}
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h1 className="text-2xl font-bold text-gray-800">NICC Event</h1>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <DetailRow label="Organizer" value="Sapanha Kea" />
          <DetailRow
            label="Status"
            value={
              <span className="flex items-center">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                Active
              </span>
            }
          />

          <hr className="my-4 border-gray-200" />

          {/* Icon Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            <IconRow Icon={CalendarDaysIcon} value="10-12 Apr 2025" />
            <IconRow Icon={ClockIcon} value="9:00 AM - 5:00 PM" />
            <IconRow Icon={MapPinIcon} value="RUPP CJCC" />
            <IconRow Icon={UserGroupIcon} value="150 / 200 Registered" />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md transition duration-200">
          Back
        </button>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md transition duration-200">
          Export
        </button>
      </div>
    </div>
  );
};

export default EventDetailCard;
