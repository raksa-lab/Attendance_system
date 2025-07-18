import React, { useState, useEffect } from 'react';

const API_BASE_URL = "http://localhost:3001/api/Organizer";
const BACKEND_BASE_URL = "http://localhost:3001";

// Icons for the details list
const CalendarIcon = () => (
  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V8h14v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm0 4h-2v2h2v-2zm4-4h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.9 14h-1.8v-6l4-2-.2.8-3 1.5V16z"></path>
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"></path>
  </svg>
);

const Card = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("API response is not an array or is empty.");
        }

        setEvent(data[0]);
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
    return `${hour}:${minute} PM`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] w-full">
        <div className="p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-b-4 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading event...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] w-full">
        <div className="p-8 text-center bg-red-50 rounded-lg shadow-xl">
          <p className="text-xl font-bold text-red-700">Error loading event</p>
          <p className="font-mono text-sm mt-2 text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] w-full">
        <div className="p-8 text-center bg-gray-50 rounded-lg shadow-xl">
          <p className="text-xl font-bold text-gray-500">No event data found.</p>
        </div>
      </div>
    );
  }

  const imageUrl = event.imageUrl ? `${BACKEND_BASE_URL}${event.imageUrl}` : null;
  const startDate = formatDate(event.startDate);
  const endDate = formatDate(event.endDate);
  const startTime = formatTime(event.startTime);
  const endTime = formatTime(event.endTime);

  return (
    <div className="max-w-sm w-full rounded-2xl overflow-hidden shadow-2xl bg-white transition-all transform hover:scale-105 duration-300">
      {/* Hero Image with Overlay */}
      <div className="relative w-full aspect-video">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={event.fullNameEvent}
          onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e5e7eb/000000?text=No+Image'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {event.fullNameEvent}
          </h2>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="p-6 space-y-4">
        {/* Date and Time */}
        <div className="flex items-center space-x-3 text-gray-700">
          <CalendarIcon />
          <p className="text-sm font-medium">
            {startDate} to {endDate}
          </p>
        </div>
        
        <div className="flex items-center space-x-3 text-gray-700">
          <ClockIcon />
          <p className="text-sm font-medium">
            {startTime} to {endTime}
          </p>
        </div>

        {/* Venue and Address */}
        <div className="flex items-start space-x-3 text-gray-700">
          <LocationIcon />
          <p className="text-sm font-medium">
            {event.venue || "N/A"} - {event.address || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;