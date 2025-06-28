import React from 'react';

const FormSection = ({ title, children }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-6 shadow-inner">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
};

export default FormSection;