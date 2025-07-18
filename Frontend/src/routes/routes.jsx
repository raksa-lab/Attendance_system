// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
// import OrganizerDashboard from "../Pages/OrganizerDashboard/OrganizerDashboard";
// import Logins from "../components/Login/login";
// import UserDashboard from "../Pages/UserDashboard/UserDashboard";

// function AppRoutes() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Logins />} />
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/organizer-dashboard" element={<OrganizerDashboard />} />
//         <Route path="/users" element={<UserDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default AppRoutes;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import EventsTable from './EventsTable';
// import EventDetail from './EventDetail'; // You will need to create this component
import EventTable from '../components/Organizer/Overview/EventTable'; 
import EventDetail from '../components/Organizer/EventDetail/Eventdetail'; // Adjust the import path as necessary

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventTable />} />
        <Route path="/eventdetail/:eventId" element={<EventDetail />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;