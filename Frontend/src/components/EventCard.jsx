import React from 'react';

// Icons for the card
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

const EventCard = ({ imageUrl, eventTitle, date, time, venue, address }) => {
  return (
    <div className="max-w-sm w-full rounded-2xl overflow-hidden shadow-2xl bg-white transition-all transform hover:scale-105 duration-300">
      <div className="relative w-full aspect-video">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={eventTitle}
          onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e5e7eb/000000?text=No+Image'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {eventTitle}
          </h2>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-3 text-gray-700">
          <CalendarIcon />
          <p className="text-sm font-medium">
            {date}
          </p>
        </div>
        <div className="flex items-center space-x-3 text-gray-700">
          <ClockIcon />
          <p className="text-sm font-medium">
            {time}
          </p>
        </div>
        <div className="flex items-start space-x-3 text-gray-700">
          <LocationIcon />
          <p className="text-sm font-medium">
            {venue} - {address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;