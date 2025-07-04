import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EventDetailsCard from './EventDetailsCard';

const EventDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event; // Get event data from router state

  // If no event data, redirect back to the form or a fallback page
  if (!event) {
    // Optionally show an error message or loading state before redirecting
    setTimeout(() => { // Small delay for UX before redirect
      navigate('/create-event', { replace: true });
    }, 100);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-700 text-xl">
        Loading event details... or redirecting if no data.
      </div>
    );
  }

  const handleBackToForm = () => {
    navigate('/create-event'); // Navigate back to the event creation form
  };

  const handleExport = () => {
    console.log('Exporting event data:', event);
    alert('Export functionality would be implemented here!');
    // Example: Trigger a download, open a new window with printable content, etc.
  };

  return (
    <EventDetailsCard
      event={event}
      onBackToList={handleBackToForm} // Pass the handler to the card
      onExport={handleExport}       // Pass the handler to the card
    />
  );
};

export default EventDetailsPage;