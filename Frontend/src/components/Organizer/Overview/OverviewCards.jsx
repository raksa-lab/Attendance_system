import React, { useEffect, useState } from "react";
import { CalendarDaysIcon, FolderIcon, UsersIcon } from "@heroicons/react/24/outline";
import axios from "axios";

const OverviewCards = () => {
  const [eventCount, setEventCount] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);

  useEffect(() => {
    // Fetch events
    axios.get("http://localhost:3001/api/Organizer")
      .then((response) => {
        setEventCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });

    // Fetch members (checked-in + not checked-in)
    const fetchMembers = async () => {
      try {
        const [checkedRes, notCheckedRes] = await Promise.all([
          axios.get("http://localhost:3001/api/user/students_checkIns"),
          axios.get("http://localhost:3001/api/user/students_not_checkins"),
        ]);
        const total = checkedRes.data.length + notCheckedRes.data.length;
        setTotalMembers(total);
      } catch (error) {
        console.error("Error fetching member data:", error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
      {/* Event Card */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-center">
        <div className="p-2 sm:p-3 bg-green-100 rounded-full mr-3 sm:mr-4">
          <CalendarDaysIcon className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
        </div>
        <div>
          <p className="text-gray-500 text-xs sm:text-sm">Event</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800">{eventCount}</p>
        </div>
      </div>

      {/* Export Card */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-center">
        <div className="p-2 sm:p-3 bg-green-100 rounded-full mr-3 sm:mr-4">
          <FolderIcon className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
        </div>
        <div>
          <p className="text-gray-500 text-xs sm:text-sm">Export</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800">17</p>
        </div>
      </div>

      {/* Members Card */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-center">
        <div className="p-2 sm:p-3 bg-green-100 rounded-full mr-3 sm:mr-4">
          <UsersIcon className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
        </div>
        <div>
          <p className="text-gray-500 text-xs sm:text-sm">Members</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800">
            {totalMembers.toLocaleString()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewCards;
