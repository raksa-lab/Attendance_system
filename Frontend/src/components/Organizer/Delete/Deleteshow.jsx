import React from 'react';
// import {useNavigate} from 'react-router-dom';
export default function Deleteshow({ onDelete, onCancel }) {
  // const navigate = useNavigate();
  
  // Stop click inside modal from closing it
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn"
      onClick={onCancel} // clicking outside modal cancels
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-96"
        onClick={stopPropagation}
      >
        <h2 className="text-xl font-semibold mb-4">Delete Event</h2>
        <p className="mb-4">
          Are you sure you want to delete this event? This action cannot be
          undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}



