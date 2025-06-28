import React from 'react';

const Button = ({ label, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-8 py-3 rounded-md text-lg font-semibold
        transition duration-200 ease-in-out transform
        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;