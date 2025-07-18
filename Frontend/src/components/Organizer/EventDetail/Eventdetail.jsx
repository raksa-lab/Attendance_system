// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const API_BASE_URL = "http://localhost:3001/api/Organizer";
// const BACKEND_BASE_URL = "http://localhost:3001";

// const EventDetail = () => {
//   const { eventId } = useParams();
//   const navigate = useNavigate();
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEventDetail = async () => {
//       if (!eventId) {
//         setError("No event ID provided.");
//         setLoading(false);
//         return;
//       }

//       try {
//         setLoading(true);
//         setError(null);
//         const response = await fetch(`${API_BASE_URL}/${eventId}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setEvent(data);
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEventDetail();
//   }, [eventId]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="p-8 text-center bg-white rounded-lg shadow-xl">
//           <div className="animate-spin rounded-full h-12 w-12 border-4 border-b-4 border-indigo-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600 font-medium">Loading event details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="p-8 text-center bg-red-50 rounded-lg shadow-xl">
//           <p className="text-xl font-bold text-red-700">Error loading event</p>
//           <p className="font-mono text-sm mt-2 text-red-500">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (!event) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="p-8 text-center bg-gray-50 rounded-lg shadow-xl">
//           <p className="text-xl font-bold text-gray-500">Event not found.</p>
//         </div>
//       </div>
//     );
//   }

//   const imageUrl = event.imageUrl ? `${BACKEND_BASE_URL}${event.imageUrl}` : null;
//   const startDate = new Date(event.startDate).toLocaleDateString();
//   const endDate = new Date(event.endDate).toLocaleDateString();
//   const startTime = event.startTime?.split(":").slice(0, 2).join(":") || "N/A";
//   const endTime = event.endTime?.split(":").slice(0, 2).join(":") || "N/A";

//   return (
//     <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">
//       <div className="bg-white rounded-2xl shadow-3xl max-w-6xl mx-auto overflow-hidden">
//         <div className="relative">
//           <button
//             onClick={() => navigate(-1)}
//             className="absolute top-6 left-6 z-10 p-3 bg-white rounded-full shadow-md text-gray-600 transition-transform hover:scale-110 hover:text-gray-800"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
//             </svg>
//           </button>
          
//           {imageUrl && (
//             <div className="w-full relative aspect-video overflow-hidden">
//               <img
//                 src={imageUrl}
//                 alt={event.fullNameEvent}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                 onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x675/e5e7eb/000000?text=No+Image'; }}
//               />
//             </div>
//           )}
//         </div>

//         <div className="p-8 md:p-12 lg:p-16">
//           <div className="flex flex-col md:flex-row md:space-x-12">
//             <div className="flex-1 mb-8 md:mb-0">
//               <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
//                 {event.fullNameEvent}
//               </h1>
//               <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
//                 {event.description || "No description provided for this event."}
//               </p>
//               <div className="mt-8 border-t border-gray-200 pt-6">
//                 <p className="text-sm text-gray-400 italic">
//                   Short Name: {event.shortNameEvent || "N/A"}
//                 </p>
//               </div>
//             </div>

//             <div className="w-full md:w-2/5">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100 transition-transform hover:scale-105 duration-300">
//                   <h3 className="text-lg font-bold text-indigo-800 mb-2">Dates</h3>
//                   <p className="text-sm text-indigo-600">
//                     <span className="block">{startDate}</span>
//                     <span className="block">to {endDate}</span>
//                   </p>
//                 </div>
                
//                 <div className="p-6 bg-red-50 rounded-xl border border-red-100 transition-transform hover:scale-105 duration-300">
//                   <h3 className="text-lg font-bold text-red-800 mb-2">Times</h3>
//                   <p className="text-sm text-red-600">
//                     <span className="block">Start: {startTime}</span>
//                     <span className="block">End: {endTime}</span>
//                   </p>
//                 </div>

//                 <div className="p-6 bg-teal-50 rounded-xl border border-teal-100 transition-transform hover:scale-105 duration-300">
//                   <h3 className="text-lg font-bold text-teal-800 mb-2">Venue</h3>
//                   <p className="text-sm text-teal-600">{event.venue || "N/A"}</p>
//                 </div>
                
//                 <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-100 transition-transform hover:scale-105 duration-300">
//                   <h3 className="text-lg font-bold text-yellow-800 mb-2">Address</h3>
//                   <p className="text-sm text-yellow-600">{event.address || "N/A"}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetail;




import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:3001/api/Organizer";
const BACKEND_BASE_URL = "http://localhost:3001";

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDetail = async () => {
      if (!eventId) {
        setError("No event ID provided.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${API_BASE_URL}/${eventId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEventDetail();
  }, [eventId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 text-center bg-white rounded-lg shadow-xl">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-b-4 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading event details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 text-center bg-red-50 rounded-lg shadow-xl">
          <p className="text-xl font-bold text-red-700">Error loading event</p>
          <p className="font-mono text-sm mt-2 text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 text-center bg-gray-50 rounded-lg shadow-xl">
          <p className="text-xl font-bold text-gray-500">Event not found.</p>
        </div>
      </div>
    );
  }

  const imageUrl = event.imageUrl ? `${BACKEND_BASE_URL}${event.imageUrl}` : null;
  const startDate = event.startDate ? new Date(event.startDate).toLocaleDateString() : "N/A";
  const endDate = event.endDate ? new Date(event.endDate).toLocaleDateString() : "N/A";
  const startTime = event.startTime?.split(":").slice(0, 2).join(":") || "N/A";
  const endTime = event.endTime?.split(":").slice(0, 2).join(":") || "N/A";

  return (
    <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-3xl max-w-6xl mx-auto overflow-hidden">
        <div className="relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-6 left-6 z-10 p-3 bg-white rounded-full shadow-md text-gray-600 transition-transform hover:scale-110 hover:text-gray-800"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </button>
          {imageUrl && (
            <div className="w-full relative aspect-video overflow-hidden">
              <img
                src={imageUrl}
                alt={event.fullNameEvent}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x675/e5e7eb/000000?text=No+Image'; }}
              />
            </div>
          )}
        </div>
        <div className="p-8 md:p-12 lg:p-16">
          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="flex-1 mb-8 md:mb-0">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                {event.fullNameEvent}
              </h1>
              <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
                {event.description || "No description provided for this event."}
              </p>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-400 italic">
                  Short Name: {event.shortNameEvent || "N/A"}
                </p>
              </div>
            </div>
            <div className="w-full md:w-2/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100 transition-transform hover:scale-105 duration-300">
                  <h3 className="text-lg font-bold text-indigo-800 mb-2">Dates</h3>
                  <p className="text-sm text-indigo-600">
                    <span className="block">{startDate}</span>
                    <span className="block">to {endDate}</span>
                  </p>
                </div>
                <div className="p-6 bg-red-50 rounded-xl border border-red-100 transition-transform hover:scale-105 duration-300">
                  <h3 className="text-lg font-bold text-red-800 mb-2">Times</h3>
                  <p className="text-sm text-red-600">
                    <span className="block">Start: {startTime}</span>
                    <span className="block">End: {endTime}</span>
                  </p>
                </div>
                <div className="p-6 bg-teal-50 rounded-xl border border-teal-100 transition-transform hover:scale-105 duration-300">
                  <h3 className="text-lg font-bold text-teal-800 mb-2">Venue</h3>
                  <p className="text-sm text-teal-600">{event.venue || "N/A"}</p>
                </div>
                <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-100 transition-transform hover:scale-105 duration-300">
                  <h3 className="text-lg font-bold text-yellow-800 mb-2">Address</h3>
                  <p className="text-sm text-yellow-600">{event.address || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;