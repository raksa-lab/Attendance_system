// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import EventCard from '../../EventCard';

// const API_BASE_URL = "http://localhost:3001/api/Organizer";
// const BACKEND_BASE_URL = "http://localhost:3001";

// const EventsTable = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const response = await fetch(API_BASE_URL);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         if (!Array.isArray(data)) {
//           throw new Error("Expected array but got: " + typeof data);
//         }
//         setEvents(data);
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEvents();
//   }, []);

//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A";
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
//   };
  
//   const formatTime = (timeString) => {
//     if (!timeString) return "N/A";
//     const [hour, minute] = timeString.split(":");
//     return `${hour}:${minute}`;
//   };

//   const filteredEvents = events.filter((event) => {
//     if (!event) return false;
//     return (
//       String(event.fullNameEvent || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
//       String(event.venue || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
//       String(event.address || "").toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });

//   // This function correctly navigates to the event detail page
//   const handleCardClick = (eventId) => {
//     navigate(`/eventdetail/${eventId}`);
//   };

//   if (loading) {
//     return (
//       <div className="p-6 text-center">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
//         <p>Loading events...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-6 text-center text-red-500">
//         <p>Error loading events:</p>
//         <p className="font-mono text-sm">{error}</p>
//         <button
//           onClick={() => window.location.reload()}
//           className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <section className="bg-white p-6 rounded-lg shadow-md">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold text-gray-800">List All Events</h2>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search events..."
//             className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {filteredEvents.length > 0 ? (
//           filteredEvents.map((event) => (
//             <div key={event.id} onClick={() => handleCardClick(event.id)}>
//               <EventCard
//                 imageUrl={event.imageUrl ? `${BACKEND_BASE_URL}${event.imageUrl}` : null}
//                 eventTitle={String(event.fullNameEvent || "Unnamed Event")}
//                 date={`${formatDate(event.startDate)} to ${formatDate(event.endDate)}`}
//                 time={`${formatTime(event.startTime)} to ${formatTime(event.endTime)}`}
//                 venue={String(event.venue || "N/A")}
//                 address={String(event.address || "N/A")}
//               />
//             </div>
//           ))
//         ) : (
//           <div className="col-span-full text-center text-gray-500 py-10">
//             {events.length === 0 ? "No events available" : "No events match your search"}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default EventsTable;





import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from '../../EventCard'; // Assuming EventCard is in the parent directory

const API_BASE_URL = "http://localhost:3001/api/Organizer";
const BACKEND_BASE_URL = "http://localhost:3001";

const EventsTable = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };
  
  const formatTime = (timeString) => {
    if (!timeString) return "N/A";
    const [hour, minute] = timeString.split(":");
    return `${hour}:${minute}`;
  };

  const filteredEvents = events.filter((event) => {
    if (!event) return false;
    return (
      String(event.fullNameEvent || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(event.venue || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(event.address || "").toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleCardClick = (eventId) => {
    navigate(`/eventdetail/${eventId}`);
  };

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
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} onClick={() => handleCardClick(event.id)}>
              <EventCard
                imageUrl={event.imageUrl ? `${BACKEND_BASE_URL}${event.imageUrl}` : null}
                eventTitle={String(event.fullNameEvent || "Unnamed Event")}
                date={`${formatDate(event.startDate)} to ${formatDate(event.endDate)}`}
                time={`${formatTime(event.startTime)} to ${formatTime(event.endTime)}`}
                venue={String(event.venue || "N/A")}
                address={String(event.address || "N/A")}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            {events.length === 0 ? "No events available" : "No events match your search"}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsTable;