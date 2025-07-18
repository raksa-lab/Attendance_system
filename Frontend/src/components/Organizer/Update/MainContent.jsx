// src/components/MainContent.jsx
import React from "react";
import EventTable from "./EventTable";
import Header from "./Header";

const MainContent = () => {
  return (
    <div className="flex-1 bg-gray-100">
      <Header />
      <EventTable />
    </div>
  );
};

export default MainContent;
