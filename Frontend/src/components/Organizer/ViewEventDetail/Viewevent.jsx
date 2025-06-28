// src/components/DashboardLayout.jsx
import React from 'react';  
import MainContent from './MainContent';

const ViewEvent = () => {
  return (
    <div className="flex min-h-screen">
      {/* <Sidebar /> */}
      <MainContent />
    </div>
  );
};

export default ViewEvent;