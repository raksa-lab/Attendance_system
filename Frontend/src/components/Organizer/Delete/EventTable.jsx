// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // New component for the delete success popup (defined inline for self-containment)
// const DeleteSuccessPopup = ({ eventTitle, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-90 flex items-center justify-center z-50 p-4"> {/* Opacity changed to 90 */}
//       <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 text-center">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Deletion Successful!</h2>
//         <p className="text-gray-700 mb-6">
//           The event "<span className="font-medium text-lg">{eventTitle}</span>" has been successfully deleted.
//         </p>
//         <button
//           onClick={onClose}
//           className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
//         >
//           OK
//         </button>
//       </div>
//     </div>
//   );
// };
// const formatDate = (isoDate) => {
//   if (!isoDate) return '';
//   const date = new Date(isoDate);
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}-${month}-${year}`;
// };


// // Deleteshow component defined inline for self-containment
// const Deleteshow = ({ onDelete, onCancel }) => {
//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-90 flex items-center justify-center z-50 p-4"> {/* Opacity changed to 90 */}
//       <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 text-center">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Confirm Deletion</h2>
//         <p className="text-gray-700 mb-6">
//           Are you sure you want to delete this event? This action cannot be undone.
//         </p>
//         <div className="flex justify-center space-x-4">
//           <button
//             onClick={onDelete}
//             className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
//           >
//             Delete
//           </button>
//           <button
//             onClick={onCancel}
//             className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// export function EventTable() {
//   const [events, setEvents] = useState([]);
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false); // Renamed for clarity
//   const [eventToDelete, setEventToDelete] = useState(null);

//   // New state for delete success popup
//   const [showDeleteSuccessPopup, setShowDeleteSuccessPopup] = useState(false);
//   const [deletedEventTitle, setDeletedEventTitle] = useState("");
//   const [fetchError, setFetchError] = useState(null); // New state for fetch errors

//   // Fetch events from the backend API
//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/api/Organizer");
//       setEvents(response.data);
//       setFetchError(null); // Clear any previous errors
//     } catch (error) {
//       console.error("❌ Failed to fetch events:", error);
//       setFetchError("Failed to load events. Please ensure the backend server is running."); // Set user-friendly error message
//     }
//   };

//   const openDeleteModal = (event) => {
//     setEventToDelete(event);
//     setShowDeleteConfirm(true);
//   };

//   const confirmDelete = async () => {
//     if (!eventToDelete) return; // Safety check

//     try {
//       await axios.delete(`http://localhost:3001/api/Organizer/${eventToDelete.id}`);
//       // Set state for success popup before closing confirmation
//       setDeletedEventTitle(eventToDelete.title || eventToDelete.fullNameEvent || 'Unknown Event'); // Assuming 'title' or 'fullNameEvent'
//       setShowDeleteSuccessPopup(true);

//       // Refetch or filter out deleted event
//       setEvents(events.filter((e) => e.id !== eventToDelete.id));
//     } catch (error) {
//       console.error("❌ Failed to delete event:", error);
//       alert("Something went wrong while deleting the event."); // Fallback alert
//     } finally {
//       // Always close the confirmation modal and clear eventToDelete
//       setShowDeleteConfirm(false);
//       setEventToDelete(null);
//     }
//   };

//   const cancelDelete = () => {
//     setShowDeleteConfirm(false);
//     setEventToDelete(null);
//   };

//   const closeDeleteSuccessPopup = () => {
//     setShowDeleteSuccessPopup(false);
//     setDeletedEventTitle(""); // Clear the title
//   };

//   return (
//     <div className="overflow-x-auto relative p-4 bg-gray-100 min-h-screen">
//       {fetchError && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
//           <strong className="font-bold">Error:</strong>
//           <span className="block sm:inline"> {fetchError}</span>
//         </div>
//       )}

//       <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-md">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Title</th>
//             <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Start</th>
//             <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">End</th>
//             <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Start Date</th>
//             <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">End Date</th>
//             <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Action</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
//           {events.length > 0 ? (
//             events.map((event) => (
//               <tr key={event.id}>
//                 <td className="px-6 py-4 whitespace-nowrap">{event.title || event.fullNameEvent || 'N/A'}</td> 
//                 <td className="px-6 py-4 whitespace-nowrap">{(event.startTime)}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{event.endTime}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{formatDate(event.startDate)}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{formatDate(event.endDate)}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <button
//                     onClick={() => openDeleteModal(event)}
//                     className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs shadow-sm transition transform hover:scale-105"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
//                 {fetchError ? null : "No events found."} {/* Only show "No events found" if no fetch error */}
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {showDeleteConfirm && eventToDelete && (
//         <Deleteshow onDelete={confirmDelete} onCancel={cancelDelete} />
//       )}

//       {showDeleteSuccessPopup && (
//         <DeleteSuccessPopup eventTitle={deletedEventTitle} onClose={closeDeleteSuccessPopup} />
//       )}
//     </div>
//   );
// }

// export default EventTable;



import React, { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_BASE_URL = "http://localhost:3001";

// New component for the delete success popup
const DeleteSuccessPopup = ({ eventTitle, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Deletion Successful!</h2>
        <p className="text-gray-700 mb-6">
          The event "<span className="font-medium text-lg">{eventTitle}</span>" has been successfully deleted.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          OK
        </button>
      </div>
    </div>
  );
};

// Deleteshow component defined inline for self-containment
const Deleteshow = ({ onDelete, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Confirm Deletion</h2>
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete this event? This action cannot be undone.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onDelete}
            className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
          >
            Delete
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable card component to be used inside the table
const EventCard = ({ event, onDelete }) => {
  const formatDate = (isoDate) => {
    if (!isoDate) return '';
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const imageUrl = event.imageUrl ? `${BACKEND_BASE_URL}${event.imageUrl}` : 'https://placehold.co/600x400/e5e7eb/000000?text=No+Image';

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white transform transition-transform hover:scale-105 duration-300">
      <img
        src={imageUrl}
        alt={event.fullNameEvent || 'Event Image'}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
          {event.fullNameEvent || 'Unnamed Event'}
        </h3>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Dates:</span> {formatDate(event.startDate)} to {formatDate(event.endDate)}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-semibold">Times:</span> {event.startTime} - {event.endTime}
        </p>
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(event); }}
          className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm shadow-md transition transform hover:scale-110"
        >
          Delete
        </button>
      </div>
    </div>
  );
};


export function EventTable() {
  const [events, setEvents] = useState([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [showDeleteSuccessPopup, setShowDeleteSuccessPopup] = useState(false);
  const [deletedEventTitle, setDeletedEventTitle] = useState("");
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/Organizer");
      setEvents(response.data);
      setFetchError(null);
    } catch (error) {
      console.error("❌ Failed to fetch events:", error);
      setFetchError("Failed to load events. Please ensure the backend server is running.");
    }
  };

  const openDeleteModal = (event) => {
    setEventToDelete(event);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    if (!eventToDelete) return;

    try {
      await axios.delete(`http://localhost:3001/api/Organizer/${eventToDelete.id}`);
      setDeletedEventTitle(eventToDelete.fullNameEvent || 'Unknown Event');
      setShowDeleteSuccessPopup(true);
      setEvents(events.filter((e) => e.id !== eventToDelete.id));
    } catch (error) {
      console.error("❌ Failed to delete event:", error);
      alert("Something went wrong while deleting the event.");
    } finally {
      setShowDeleteConfirm(false);
      setEventToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setEventToDelete(null);
  };

  const closeDeleteSuccessPopup = () => {
    setShowDeleteSuccessPopup(false);
    setDeletedEventTitle("");
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {fetchError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {fetchError}</span>
        </div>
      )}

      <h1 className="text-3xl font-bold text-gray-800 mb-6">Event Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onDelete={openDeleteModal}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            {fetchError ? null : "No events found."}
          </div>
        )}
      </div>

      {showDeleteConfirm && eventToDelete && (
        <Deleteshow onDelete={confirmDelete} onCancel={cancelDelete} />
      )}

      {showDeleteSuccessPopup && (
        <DeleteSuccessPopup eventTitle={deletedEventTitle} onClose={closeDeleteSuccessPopup} />
      )}
    </div>
  );
}

export default EventTable;