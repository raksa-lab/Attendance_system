import EventTable from "./EventTable";
import Header from "./Header";

const MainContent = () => {
  return (
    <div className="flex-grow bg-gray-100">
      <Header />
      {/* Main Content with padding */}
      <div className="p-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="sticky top-0 z-10 bg-white flex justify-between items-center mb-6 pb-2">
            <h2 className="text-xl font-semibold text-gray-800">
              List All Events
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* Search Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          {/* Event Table */}
          <EventTable />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
