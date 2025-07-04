// import React from 'react';
// const EventsTable = () => {
//   const events = [
//     {
//       name: 'Nlcc Event',
//       start: '7:00 am',
//       end: '10:30 am',
//       location: 'Rupp',
//       status: 'Active',
//     },
//     {
//       name: 'Ryl Event',
//       start: '7:00 am',
//       end: '10:30 am',
//       location: 'ITC',
//       status: 'Active',
//     },
//     {
//       name: 'Ckcc Event',
//       start: '7:00 am',
//       end: '10:30 am',
//       location: 'Rupp',
//       status: 'Active',
//     },
//     {
//       name: 'Eday Event',
//       start: '7:00 am',
//       end: '10:30 am',
//       location: 'ITC',
//       status: 'Active',
//     },
//     {
//       name: 'ITC Event',
//       start: '7:00 am',
//       end: '10:30 am',
//       location: 'Rupp',
//       status: 'Active',
//     },
//     {
//       name: 'Comex Event',
//       start: '7:00 am',
//       end: '10:30 am',
//       location: 'Khos pech',
//       status: 'Active',
//     },
//     {
//       name: 'Nlcc Event',
//       start: '7:00 am',
//       end: '10:30 am',
//       location: 'Rupp',
//       status: 'Active',
//     },
//     {
//       name: 'Ryl Event',
//       start: '7:00 am',
//       end: '10:30 am',
//       location: 'ITC',
//       status: 'Active',
//     },
//     {
//       name: 'Ckcc Event',
//       start: '7:00 am',
//       end: '10:30 am',
//       location: 'Rupp',
//       status: 'Active',
//     },
//     {
//       name: 'Eday Event',
//       start: '7:00 am',
//       end: '10:30 am',
//       location: 'ITC',
//       status: 'Active',
//     },
//     {
//       name: 'ITC Event',
//       start: '7:00 am',
//       end: '10:30 am',
//       location: 'Rupp',
//       status: 'Active',
//     },
//     {
//       name: 'Comex Event',
//       start: '7:00 am',
//       end: '10:30 am',
//       location: 'Khos pech',
//       status: 'Active',
//     },
//   ];

//   return (
//     <section className="bg-white p-6 rounded-lg shadow-md">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold text-gray-800">
//           List All Events
//         </h2>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search"
//             className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <svg
//             className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//             ></path>
//           </svg>
//         </div>
//       </div>

//       <div className="overflow-x-auto rounded-lg border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th
//                 scope="col"
//                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//               >
//                 Name Event
//               </th>
//               <th
//                 scope="col"
//                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//               >
//                 Time Start
//               </th>
//               <th
//                 scope="col"
//                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//               >
//                 Time End
//               </th>
//               <th
//                 scope="col"
//                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//               >
//                 Location
//               </th>
//               <th
//                 scope="col"
//                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//               >
//                 Status
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {events.map((event, index) => (
//               <tr key={index}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                   {event.name}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {event.start}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {event.end}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {event.location}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm">
//                   <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                     {event.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };
// export default EventsTable;

import React, { useState, useEffect } from "react";

const API_BASE_URL = "http://localhost:3001/api/Organizer";

const EventsTable = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_BASE_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Validate data structure
        if (!Array.isArray(data)) {
          throw new Error("Expected array but got: " + typeof data);
        }

        setEvents(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Format time to display only hours:minutes
  const formatTime = (timeString) => {
    if (!timeString) return "N/A";
    return timeString.split(":").slice(0, 2).join(":");
  };

  // Format date to display in local format
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const filteredEvents = events.filter((event) => {
    if (!event) return false;
    return (
      event.fullNameEvent?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.address?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (loading) {
    return (
      <div className="p-6 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p>Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-500">
        <p>Error loading events:</p>
        <p className="font-mono text-sm">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">List All Events</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search events..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Event Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Short Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Venue
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <tr key={event.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {event.fullNameEvent || "Unnamed Event"}
                    </div>
                    
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {event.shortNameEvent || "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>Start: {formatDate(event.startDate)}</div>
                    <div>End: {formatDate(event.endDate)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>Start: {formatTime(event.startTime)}</div>
                    <div>End: {formatTime(event.endTime)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {event.venue || "Unknown venue"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {event.address || "No address"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  {events.length === 0
                    ? "No events available"
                    : "No events match your search"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EventsTable;
