import { Outlet, Link, useLocation } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const OrganizerSidebar = ({ open, onClose }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden transition-opacity ${
          open ? "block" : "hidden"
        }`}
        onClick={onClose}
      />
      <aside
        className={`
          fixed z-40 top-0 left-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col rounded-tr-lg rounded-br-lg
          transform transition-transform duration-200
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0 lg:flex
        `}
      >
        <div className="flex items-center mb-10">
          <span className="text-xl font-bold text-gray-800">DashBoard</span>
        </div>
        <nav className="flex-grow">
          <ul>
            <li className="mb-4">
              <Link
                to="/organizer/overview"
                className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isActive("/organizer/overview")
                    ? "text-blue-600 bg-blue-50 hover:bg-blue-100"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={onClose}
              >
                <HomeIcon className="w-5 h-5 mr-3" />
                Overview
              </Link>
            </li>

            <li className="mb-4">
              <Link
                to="/organizer/create-event"
                className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isActive("/organizer/create-event")
                    ? "text-blue-600 bg-blue-50 hover:bg-blue-100"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={onClose}
              >
                <PlusCircleIcon className="w-5 h-5 mr-3" />
                Create Event
              </Link>
            </li>

            <li className="mb-4">
              <Link
                to="/organizer/view-event"
                className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isActive("/organizer/view-event")
                    ? "text-blue-600 bg-blue-50 hover:bg-blue-100"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={onClose}
              >
                <EyeIcon className="w-5 h-5 mr-3" />
                View Event Detail
              </Link>
            </li>

            <li className="mb-4">
              <Link
                to="/organizer/update-event"
                className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isActive("/organizer/update-event")
                    ? "text-blue-600 bg-blue-50 hover:bg-blue-100"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={onClose}
              >
                <PencilSquareIcon className="w-5 h-5 mr-3" />
                Update
              </Link>
            </li>

            <li className="mb-4">
              <Link
                to="/organizer/delete"
                className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isActive("/organizer/delete")
                    ? "text-blue-600 bg-blue-50 hover:bg-blue-100"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={onClose}
              >
                <TrashIcon className="w-5 h-5 mr-3" />
                Delete
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-auto text-center text-black-500 font-bold">Organizer</div>
      </aside>
    </>
  );
};

export default function OrganizerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Hamburger button for mobile */}
      <button
        className="absolute top-4 left-4 z-50 p-2 rounded-md bg-white shadow lg:hidden"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* Sidebar */}
      <OrganizerSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      {/* Main content */}
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto w-full">
        <Outlet />
      </main>
    </div>
  );
}
