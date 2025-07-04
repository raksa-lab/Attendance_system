import React, { useState } from 'react';
import Popup from '../CreateSuccess/Popup'; // Import your Popup component

function Main() {
    // State to control the visibility of the popup
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Data for the event to be displayed in the popup
    const eventDetails = {
        organizer: 'Sopanha Kea',
        status: 'Active',
        date: '10-12 Apr 2025',
        time: '9:00 AM - 5:00 PM',
        location: 'Rupp CJCC',
        registered: '150/200 Registered',
    };

    // Functions to open and close the popup
    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        // Main Main container: Centered content with a background color
        <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
            <div className="text-center p-5">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">NICC Event Page</h1>
                {/* Button to open the popup: Styled with Tailwind classes */}
                <button
                    onClick={handleOpenPopup}
                    className="px-6 py-3 text-lg bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 active:bg-blue-800 transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    View Event Details
                </button>
            </div>

            {/* Popup component: Passed state and data as props */}
            <Popup
                isOpen={isPopupOpen}
                onClose={handleClosePopup}
                eventData={eventDetails}
            />
        </div>
    );
}

export default Main;