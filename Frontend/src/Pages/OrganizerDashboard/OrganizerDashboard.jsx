import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "../../components/Organizer/Overview/Overview";
import CreateEvent from "../../components/Organizer/CreateEvent/CreateEvent";
import ViewEvent from "../../components/Organizer/ViewEventDetail/ViewEvent";
import Update from "../../components/Organizer/Update/Update";
// import DashboardLayout from "./ViewEventDetail/DashboardLayout";

export default function OrganizerDashboard() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Routes>
        <Route path="/organizer" element={<OrganizerDashboard />}>
          <Route path="/overview" element={<Overview />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/view-event/:id" element={<ViewEvent />} />
          <Route path="/update-event/:id" element={<Update />} />
        </Route>

        {/* <Route path="dashboard-layout" element={<DashboardLayout />} /> */}
      </Routes>
    </div>
  );
}
