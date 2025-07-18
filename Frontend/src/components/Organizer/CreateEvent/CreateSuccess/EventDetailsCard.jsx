// // src/components/EventDetailsCard.jsx
// import React from 'react';
// // Import specific icons from react-icons/hi2 (Heroicons v2)
// import { CalendarDaysIcon, ClockIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline'; // Outline style icons

// const EventDetailsCard = ({ event }) => {
//   if (!event) {
//     return <div className="text-gray-600 p-4">No event data to display.</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full">
//         {/* Header Section */}
//         <div className="bg-gray-200 p-6">
//           <h1 className="text-2xl font-semibold text-gray-800">
//             {event.name || "NICC Event"}
//           </h1>
//         </div>

//         {/* Organizer and Status */}
//         <div className="border-b border-gray-300 p-6 space-y-4">
//           <div className="flex items-center">
//             <span className="text-gray-600 font-medium w-24">Organizer :</span>
//             <span className="text-gray-800">{event.organizer || "Sapanha Kea"}</span>
//           </div>
//           <div className="flex items-center">
//             <span className="text-gray-600 font-medium w-24">Status :</span>
//             <span className="flex items-center space-x-2">
//               <span className={`h-2.5 w-2.5 rounded-full ${event.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
//               <span className="text-gray-800">{event.status || "Active"}</span>
//             </span>
//           </div>
//         </div>

//         {/* Event Details (Date, Time, Location, Registration) */}
//         <div className="p-6 space-y-4">
//           <div className="flex items-center">
//             <CalendarDaysIcon className="h-5 w-5 text-gray-500 mr-3" />
//             <span className="text-gray-700">{event.date || "10-12 Apr 2025"}</span>
//           </div>

//           <div className="flex items-center">
//             <ClockIcon className="h-5 w-5 text-gray-500 mr-3" />
//             <span className="text-gray-700">{event.time || "9:00 AM - 5:00 PM"}</span>
//           </div>

//           <div className="flex items-center">
//             <MapPinIcon className="h-5 w-5 text-gray-500 mr-3" />
//             <span className="text-gray-700">{event.location || "Rupp CJCC"}</span>
//           </div>

//           <div className="flex items-center">
//             <UsersIcon className="h-5 w-5 text-gray-500 mr-3" />
//             <span className="text-gray-700">{event.registered || "150/200 Registered"}</span>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="p-6 bg-gray-100 flex justify-center space-x-4">
//           <button
//             onClick={() => console.log('Back button clicked')}
//             className="px-6 py-3 rounded-lg text-white font-semibold bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//           >
//             Back
//           </button>
//           <button
//             onClick={() => console.log('Export button clicked')}
//             className="px-6 py-3 rounded-lg text-white font-semibold bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 transition duration-150 ease-in-out"
//           >
//             Export
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetailsCard;





import React from 'react';

function EventDetailsCard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* View Events Detail Button/Header */}
      <div className="bg-gray-300 text-gray-800 py-3 px-8 rounded-lg mb-8 shadow-md">
        <h1 className="text-xl font-semibold">View Events Detail</h1>
      </div>

      {/* Main Event Card */}
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        {/* NICC Event Header */}
        <div className="pb-4 mb-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">NICC Event</h2>
        </div>

        {/* Organizer and Status */}
        <div className="mb-4">
          <p className="text-gray-600 text-sm mb-1">
            Organizer : <span className="font-medium text-gray-800">Sopanha Kea</span>
          </p>
          <p className="text-gray-600 text-sm flex items-center">
            Status : <span className="h-2 w-2 rounded-full bg-green-500 mx-2"></span> Active
          </p>
          {/* NEW: Description under Status */}
          <p className="text-gray-500 text-xs mt-1 pl-6">
            This event is currently open for registrations and participation.
          </p>
        </div>

        {/* Separator Line */}
        <hr className="border-gray-200 mb-4" />

        {/* Event Details (Date, Time, Location, Registered) */}
        <div className="space-y-3">
          <div className="flex items-center text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm">10-12 Apr 2025</span>
          </div>

          <div className="flex items-center text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm">9:00 AM- 5:00 PM</span>
          </div>

          <div className="flex items-center text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm">Rupp CJCC</span>
          </div>

          <div className="flex items-center text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h2a2 2 0 002-2V4a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2m0 0l-2 2m2-2l2 2m0 0h-3.586a1 1 0 01-.707-.293l-3.414-3.414A1 1 0 009.293 11.293L11.707 9.293A1 1 0 0112 8h3v1a3 3 0 01-3 3H9m1.5-3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
              />
            </svg>
            <span className="text-sm">150/200 Registered</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex mt-8 space-x-4">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out">
          Back
        </button>
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out">
          Export
        </button>
      </div>
    </div>
  );
}

export default EventDetailsCard;