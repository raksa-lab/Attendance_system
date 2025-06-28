// src/components/EventTable.jsx
import React from 'react';
// import StatusBadge from './StatusBadge'; // No longer needed

const mockEvents = [
  { id: 1, name: 'Nicc Event', timeStart: '7:00 am', timeEnd: '10:30 am', location: 'Rupp', status: 'Active' },
  { id: 2, name: 'Ryl Event', timeStart: '7:00 am', timeEnd: '10:30 am', location: 'ITC', status: 'Inactive' },
  { id: 3, name: 'Ckcc Event', timeStart: '7:00 am', timeEnd: '10:30 am', location: 'Rupp', status: 'Active' },
  { id: 4, name: 'Eday Event', timeStart: '7:00 am', timeEnd: '10:30 am', location: 'ITC', status: 'Inactive' },
  { id: 5, name: 'ITC Event', timeStart: '7:00 am', timeEnd: '10:30 am', location: 'ITC', status: 'Active' },
  { id: 6, name: 'Camnex Event', timeStart: '7:00 am', timeEnd: '10:30 am', location: 'Khos pech', status: 'Inactive' },
];

const EventTable = () => {
  const handleUpdateClick = (eventId) => {
    console.log(`Update button clicked for event ID: ${eventId}`);
    // Implement your update logic here, e.g., redirect to an edit form
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name Event
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time Start
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time End
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status {/* This column header remains generic */}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {mockEvents.map((event) => (
            <tr key={event.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {event.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {event.timeStart}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {event.timeEnd}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {event.location}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button
                  onClick={() => handleUpdateClick(event.id)}
                  className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 text-xs font-semibold"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;