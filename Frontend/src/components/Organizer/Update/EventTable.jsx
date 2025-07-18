// // src/components/EventTable.jsx
// import React from 'react';
// // import StatusBadge from './StatusBadge'; // No longer needed

// const mockEvents = [
//   { id: 1, name: 'Nicc Event', timeStart: '7:00 am', timeEnd: '10:30 am', location: 'Rupp', status: 'Active' },
//   { id: 2, name: 'Ryl Event', timeStart: '7:00 am', timeEnd: '10:30 am', location: 'ITC', status: 'Inactive' },
//   { id: 3, name: 'Ckcc Event', timeStart: '7:00 am', timeEnd: '10:30 am', location: 'Rupp', status: 'Active' },
//   { id: 4, name: 'Eday Event', timeStart: '7:00 am', timeEnd: '10:30 am', location: 'ITC', status: 'Inactive' },
//   { id: 5, name: 'ITC Event', timeStart: '7:00 am', timeEnd: '10:30 am', location: 'ITC', status: 'Active' },
//   { id: 6, name: 'Camnex Event', timeStart: '7:00 am', timeEnd: '10:30 am', location: 'Khos pech', status: 'Inactive' },
// ];

// const EventTable = () => {
//   const handleUpdateClick = (eventId) => {
//     console.log(`Update button clicked for event ID: ${eventId}`);
//     // Implement your update logic here, e.g., redirect to an edit form
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Name Event
//             </th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Time Start
//             </th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Time End
//             </th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Location
//             </th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Status {/* This column header remains generic */}
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {mockEvents.map((event) => (
//             <tr key={event.id}>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                 {event.name}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 {event.timeStart}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 {event.timeEnd}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 {event.location}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm">
//                 <button
//                   onClick={() => handleUpdateClick(event.id)}
//                   className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 text-xs font-semibold"
//                 >
//                   Update
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EventTable;




// import React, { useState, useEffect } from 'react';

// const EventTable = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/api/Organizer');

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("✅ Fetched Events:", data); // ← Check this in your browser console
//         setEvents(data);
//       } catch (err) {
//         setError(err);
//         console.error("Error fetching events:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleUpdateClick = (eventId) => {
//     console.log(`🛠 Update button clicked for event ID: ${eventId}`);
//     // You can navigate or open a modal here
//   };

//   if (loading) {
//     return <div className="text-center py-8">Loading events...</div>;
//   }

//   if (error) {
//     return (
//       <div className="text-center py-8 text-red-600">
//         ❌ Error: {error.message}.<br />
//         Please ensure your API server is running at <code>http://localhost:3001</code>.
//       </div>
//     );
//   }

//   if (events.length === 0) {
//     return <div className="text-center py-8 text-gray-500">No events found.</div>;
//   }

//   return (
//     <div className="p-4 overflow-x-auto">
//       <h1 className="text-xl font-semibold mb-4">List All Events</h1>
//       <table className="min-w-full divide-y divide-gray-200 border rounded shadow">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name Event</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Start</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date End</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Start</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time End</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {events.map((event) => (
//             <tr key={event.id}>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{event.fullNameEvent}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.startDate}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.endDate}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.startTime}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.endTime}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.venue}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.status}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm">
//                 <button
//                   onClick={() => handleUpdateClick(event.id)}
//                   className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs font-semibold"
//                 >
//                   Update
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EventTable;




import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Base URL for your API. Ensure your backend server is running on this address.
const API_BASE_URL = 'http://localhost:3001/api/Organizer';

const EventTable = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchEvents = async () => {
    try {
      setLoading(true); 
      setError(null);   
      const res = await axios.get(API_BASE_URL);
      setEvents(res.data); 
    } catch (err) {
      console.error("Failed to fetch events:", err);
      setError('Failed to fetch events. Please ensure your backend is running and accessible.');
    } finally {
      setLoading(false); // Set loading state to false regardless of success or failure
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleUpdateClick = (event) => {
    setSelectedEvent({
      ...event,
      capacity: event.capacity || '', // Default to empty string if capacity is null/undefined
    });
    setIsModalOpen(true); // Open the modal for editing
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Use a functional update to ensure we're working with the latest state
    setSelectedEvent((prev) => ({ ...prev, [name]: value }));
  };

  // --- Handle Update Form Submission ---
  // This asynchronous function is called when the "Save Changes" button in the modal is clicked.
  const handleUpdateSubmit = async () => {
    try {
      if (!selectedEvent) {
        // Basic check: if no event is selected, do nothing and alert the user
        alert('No event selected for update.'); // Using alert for simplicity, consider a custom modal for production
        return;
      }

      // Make a PUT request to update the event.
      // The URL includes the event's ID, and the request body contains the updated 'selectedEvent' data.
      await axios.put(`${API_BASE_URL}/${selectedEvent.id}`, selectedEvent);
      
      setIsModalOpen(false); // Close the modal after successful update
      fetchEvents();         // Re-fetch the events list to display the updated data in the table
      alert('✅ Event updated successfully!'); // Success message
    } catch (err) {
      // If the update fails, log the error and inform the user.
      console.error("Failed to update event:", err);
      alert('❌ Failed to update event. Please check your backend server logs for details.');
    }
  };

  // --- Rendered Component UI ---
  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans"> {/* Added font-sans for consistent font */}
      {/* Header Section: Title and Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">List All Events</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Conditional Messages: Loading, Error, No Data */}
      {loading && (
        <p className="text-center text-blue-600 text-lg mt-8">Loading events...</p>
      )}
      {error && (
        <p className="text-center text-red-600 text-lg mt-8">{error}</p>
      )}
      {!loading && !error && events.length === 0 && (
        <p className="text-center text-gray-500 text-lg mt-8">No events found. Please add some events to your database or check your API connection.</p>
      )}

      {/* Event Table - Only renders if not loading, no error, and there are events */}
      {!loading && !error && events.length > 0 && (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Start</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">End</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">venue</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">address</th>
                {/* <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th> */}
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {events.map((event) => (
                // Important for hydration warning: Ensure no extra whitespace/newlines directly inside <tr>
                // or between <td> elements that could create text nodes.
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.fullNameEvent}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{(event.startTime)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{(event.endTime)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.venue}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.address}</td>
                  {/* <td className="px-6 py-4 whitespace-nowrap text-sm"> */}
                    {/* Dynamic styling for status badge */}
                    {/* <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      event.status === 'Active' ? 'bg-green-100 text-green-800' :
                      event.status === 'Inactive' ? 'bg-gray-100 text-gray-800' :
                      event.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800' // Default for 'Cancelled' or other statuses
                    }`}>
                      {event.status}
                    </span> */}
                  {/* </td> */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleUpdateClick(event)}
                      className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Event Modal - Renders only when isModalOpen is true and an event is selected */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg"> {/* Increased max-w for better spacing */}
            {/* Modal Header */}
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Edit : {selectedEvent.name || 'N/A'} {/* Dynamic event name in modal title */}
            </h2>
            <hr className="border-t border-gray-300 mb-6" /> {/* Horizontal separator line */}

            <div className="space-y-5"> {/* Increased vertical spacing between form fields */}
              {/* Title Field */}
              <div className="flex items-center">
                <label htmlFor="name" className="w-28 text-gray-700 font-medium mr-4">Title :</label>
                <div className="flex-1 border border-gray-300 rounded-md px-3 py-2 flex items-center">
                  <input
                    id="name"
                    name="name"
                    value={selectedEvent.name || ''} // Populate with current event name
                    onChange={handleChange}
                    placeholder="Event Title"
                    className="w-full bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              {/* Start Date Field */}
              <div className="flex items-center">
                <label htmlFor="timeStart" className="w-28 text-gray-700 font-medium mr-4">Start Date :</label>
                <div className="flex-1 border border-gray-300 rounded-md px-3 py-2 flex items-center">
                  <input
                    id="timeStart"
                    name="timeStart"
                    // If your API returns full date-time strings, you might want to use type="date"
                    // and format the value to "YYYY-MM-DD" e.g., value={selectedEvent.timeStart ? selectedEvent.timeStart.split('T')[0] : ''}
                    // For now, keeping as text and showing raw string.
                    value={selectedEvent.timeStart || ''} // Populate with current start time
                    onChange={handleChange}
                    placeholder="e.g., 2025-04-10"
                    className="w-full bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              {/* End Time Field */}
              <div className="flex items-center">
                <label htmlFor="timeEnd" className="w-28 text-gray-700 font-medium mr-4">End Time :</label>
                <div className="flex-1 border border-gray-300 rounded-md px-3 py-2 flex items-center">
                  <input
                    id="timeEnd"
                    name="timeEnd"
                    value={selectedEvent.timeEnd || ''} // Populate with current end time
                    onChange={handleChange}
                    placeholder="e.g., 2025-04-12"
                    className="w-full bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              {/* Location Field */}
              <div className="flex items-center">
                <label htmlFor="location" className="w-28 text-gray-700 font-medium mr-4">Location :</label>
                <div className="flex-1 border border-gray-300 rounded-md px-3 py-2 flex items-center">
                  <input
                    id="location"
                    name="location"
                    value={selectedEvent.location || ''} // Populate with current location
                    onChange={handleChange}
                    placeholder="e.g., NICC, Hall A"
                    className="w-full bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              {/* Capacity Field (New field based on image) */}
              <div className="flex items-center">
                <label htmlFor="capacity" className="w-28 text-gray-700 font-medium mr-4">Capacity :</label>
                <div className="flex-1 border border-gray-300 rounded-md px-3 py-2 flex items-center">
                  <input
                    id="capacity"
                    name="capacity"
                    type="number" // Use type="number" for numerical input
                    value={selectedEvent.capacity || ''} // Populate with current capacity
                    onChange={handleChange}
                    placeholder="e.g., 200"
                    className="w-full bg-transparent focus:outline-none"
                  />
                  {/* You could add a dropdown icon here if you want a visual cue like the image,
                      but for a number input, it's not functionally necessary. */}
                </div>
              </div>

              {/* Status Field (Retained from your original code, as it's useful for events) */}
              {/* You can remove this block if you strictly only want the fields shown in the image. */}
              <div className="flex items-center">
                <label htmlFor="status" className="w-28 text-gray-700 font-medium mr-4">Status :</label>
                <div className="flex-1 border border-gray-300 rounded-md px-3 py-2 flex items-center">
                  <select
                    id="status"
                    name="status"
                    value={selectedEvent.status || 'Active'} // Populate with current status
                    onChange={handleChange}
                    className="w-full bg-transparent focus:outline-none"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Modal Action Buttons */}
            <div className="flex justify-end space-x-3 mt-8">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition duration-150 ease-in-out"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-150 ease-in-out"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventTable;
