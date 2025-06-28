import React from 'react';
const EventsTable = () => {
  const events = [
    {
      name: 'Nlcc Event',
      start: '7:00 am',
      end: '10:30 am',
      location: 'Rupp',
      status: 'Active',
    },
    {
      name: 'Ryl Event',
      start: '7:00 am',
      end: '10:30 am',
      location: 'ITC',
      status: 'Active',
    },
    {
      name: 'Ckcc Event',
      start: '7:00 am',
      end: '10:30 am',
      location: 'Rupp',
      status: 'Active',
    },
    {
      name: 'Eday Event',
      start: '7:00 am',
      end: '10:30 am',
      location: 'ITC',
      status: 'Active',
    },
    {
      name: 'ITC Event',
      start: '7:00 am',
      end: '10:30 am',
      location: 'Rupp',
      status: 'Active',
    },
    {
      name: 'Comex Event',
      start: '7:00 am',
      end: '10:30 am',
      location: 'Khos pech',
      status: 'Active',
    },
    {
      name: 'Nlcc Event',
      start: '7:00 am',
      end: '10:30 am',
      location: 'Rupp',
      status: 'Active',
    },
    {
      name: 'Ryl Event',
      start: '7:00 am',
      end: '10:30 am',
      location: 'ITC',
      status: 'Active',
    },
    {
      name: 'Ckcc Event',
      start: '7:00 am',
      end: '10:30 am',
      location: 'Rupp',
      status: 'Active',
    },
    {
      name: 'Eday Event',
      start: '7:00 am',
      end: '10:30 am',
      location: 'ITC',
      status: 'Active',
    },
    {
      name: 'ITC Event',
      start: '7:00 am',
      end: '10:30 am',
      location: 'Rupp',
      status: 'Active',
    },
    {
      name: 'Comex Event',
      start: '7:00 am',
      end: '10:30 am',
      location: 'Khos pech',
      status: 'Active',
    },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          List All Events
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name Event
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Time Start
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Time End
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map((event, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {event.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {event.start}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {event.end}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {event.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {event.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default EventsTable;