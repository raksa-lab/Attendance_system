import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import OrganizerDashboard from "../Pages/OrganizerDashboard/OrganizerDashboard";
import Logins from "../components/Login/login";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Logins />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/organizer-dashboard" element={<OrganizerDashboard />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
