import React from 'react';
const RevenueSection = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        REVENUE BY SECTION
      </h2>
      <div className="flex items-center space-x-8">
        {/* Pie chart placeholder */}
        <div className="w-24 h-24 relative rounded-full overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `conic-gradient(#a78bfa 0% 40%, #f472b6 40% 100%)`,
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
            <span className="text-gray-700">Men</span>
            <span className="ml-2 font-bold text-gray-800">40%</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-pink-400 rounded-full mr-2"></span>
            <span className="text-gray-700">Women</span>
            <span className="ml-2 font-bold text-gray-800">60%</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RevenueSection;