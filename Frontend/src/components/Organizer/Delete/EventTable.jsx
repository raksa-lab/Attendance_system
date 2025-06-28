// src/components/EventTable.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export function EventTable() {
  const navigate = useNavigate();

  const events = [
    //it need to take data from backend to show on this
    {
      title: "NICC Event",
      startDate: "Apr 10, 2025 9:00am",
      endDate: "Apr 12, 2025 5:00pm",
    },
    {
      title: "CJCC Event",
      startDate: "June 2, 2025 8:00am",
      endDate: "June 2, 2025 4:00pm",
    },
    {
      title: "Cyber",
      startDate: "Aug 8, 2025 7:00am",
      endDate: "Aug 8, 2025 5:00pm",
    },
    {
      title: "RYL",
      startDate: "Sep 9, 2025 1:00pm",
      endDate: "Sep 12, 2025 5:00pm",
    },
  ];

  const handleDeleteClick = (title) => {
    navigate("/Deleteshow", { state: { title } });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase">
              Title
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase">
              Start Date
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase">
              End Date
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
          {events.map((event, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{event.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{event.startDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{event.endDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleDeleteClick(event.title)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs shadow-sm transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventTable;
