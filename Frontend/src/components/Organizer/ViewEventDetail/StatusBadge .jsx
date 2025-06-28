// src/components/StatusBadge.jsx
import React from 'react';

const StatusBadge = ({ status }) => {
  const baseClasses = "px-2 inline-flex text-xs leading-5 font-semibold rounded-full";
  const activeClasses = "bg-green-100 text-green-800";
  const inactiveClasses = "bg-red-100 text-red-800";

  return (
    <span
      className={`${baseClasses} ${status === 'Active' ? activeClasses : inactiveClasses}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;