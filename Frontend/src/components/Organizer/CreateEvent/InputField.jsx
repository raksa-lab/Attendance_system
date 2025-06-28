import React from 'react';

const InputField = ({ label, name, value, onChange, type = 'text' }) => {
  const isTextArea = type === 'textarea';
  const inputClasses = `
    w-full p-3 border border-gray-300 rounded-md
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    transition duration-150 ease-in-out
  `;

  return (
    <div className={`mb-4 ${isTextArea ? 'md:col-span-2' : ''}`}> {/* Textarea spans full width on medium screens and up */}
      <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows="4" // Default rows for textarea
          className={`${inputClasses} resize-y`}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClasses}
        />
      )}
    </div>
  );
};

export default InputField;