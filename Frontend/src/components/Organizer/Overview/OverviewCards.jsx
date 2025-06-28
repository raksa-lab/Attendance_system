import React from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { FolderIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/24/outline"; 
const OverviewCards = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-center">
        <div className="p-2 sm:p-3 bg-green-100 rounded-full mr-3 sm:mr-4">
          <CalendarDaysIcon className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
        </div>
        <div>
          <p className="text-gray-500 text-xs sm:text-sm">Event</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800">21</p>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-center">
        <div className="p-2 sm:p-3 bg-green-100 rounded-full mr-3 sm:mr-4">
          <FolderIcon className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
        </div>
        <div>
          <p className="text-gray-500 text-xs sm:text-sm">Export</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800">17</p>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-center">
        <div className="p-2 sm:p-3 bg-green-100 rounded-full mr-3 sm:mr-4">
          <UsersIcon className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
        </div>
        <div>
          <p className="text-gray-500 text-xs sm:text-sm">Members</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800">1,893</p>
        </div>
      </div>
    </section>
  );
};

export default OverviewCards;
