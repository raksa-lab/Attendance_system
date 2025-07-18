// import { Routes, Route } from "react-router-dom";
// import OrganizerLayout from "../components/Organizer/OrganizerSidebar";
// import Overview from "../components/Organizer/Overview/Overview";
// import CreateEvent from "../components/Organizer/CreateEvent/CreateEvent";
// import Update from "../components/Organizer/Update/Update";
// import Delete from "../components/Organizer/Delete/Delete";
// import ViewEvent from "../components/Organizer/ViewEventDetail/ViewEvent";
// import Deleteshow from "../components/Organizer/Delete/Deleteshow";

// export default function RouteOrganizer() {
//   return (
//     <Routes>
//       <Route path="/" element={<OrganizerLayout />}>
//         <Route index element={<Overview />} />
//         <Route path="overview" element={<Overview />} />
//         <Route path="create-event" element={<CreateEvent />} />
//         <Route path="view-event" element={<ViewEvent />} />
//         <Route path="update-event" element={<Update />} />
//         <Route path="delete" element={<Delete />} />
//         <Route path="delete/deleteshow" element={<Deleteshow />} />
//       </Route>
//     </Routes>
//   );
// }


// // src/RouteOrganizer.jsx
// import { Routes, Route } from "react-router-dom";
// import OrganizerLayout from "../components/Organizer/OrganizerSidebar";
// import Overview from "../components/Organizer/Overview/Overview";
// import CreateEvent from "../components/Organizer/CreateEvent/CreateEvent";
// import Update from "../components/Organizer/Update/Update";
// import Delete from "../components/Organizer/Delete/Delete";
// import ViewEvent from "../components/Organizer/ViewEventDetail/ViewEvent";
// import Deleteshow from "../components/Organizer/Delete/Deleteshow";
// import EventDetail from "../components/Organizer/EventDetail/Eventdetail";
// // import EventDetailCard from "../components/Organizer/EventDetail/EventDetailCard";


// export default function RouteOrganizer() {
//   return (
//     <Routes>
//       <Route path="/" element={<OrganizerLayout />}>
//         <Route index element={<Overview />} />
//         <Route path="overview" element={<Overview />} />
//         <Route path="create-event" element={<CreateEvent />} />
//         <Route path="/event/:eventId" element={<EventDetail />}/>
//         <Route path="view-event" element={<ViewEvent />} />
//         <Route path="update-event" element={<Update />} />
//         <Route path="delete" element={<Delete />} />
//         <Route path="delete/deleteshow" element={<Deleteshow />} />
//       </Route>
//     </Routes>
//   );
// }






import { Routes, Route } from "react-router-dom";
import OrganizerLayout from "../components/Organizer/OrganizerSidebar";
import Overview from "../components/Organizer/Overview/Overview";
import CreateEvent from "../components/Organizer/CreateEvent/CreateEvent";
import Update from "../components/Organizer/Update/Update";
import Delete from "../components/Organizer/Delete/Delete";
import ViewEvent from "../components/Organizer/ViewEventDetail/ViewEvent";
import Deleteshow from "../components/Organizer/Delete/Deleteshow";
import EventDetail from "../components/Organizer/EventDetail/Eventdetail";
// import EventDetailCard from "../components/Organizer/EventDetail/EventDetailCard";


export default function RouteOrganizer() {
  return (
    <Routes>
      <Route path="/" element={<OrganizerLayout />}>
        <Route index element={<Overview />} />
        <Route path="overview" element={<Overview />} />
        <Route path="create-event" element={<CreateEvent />} />
        {/* This is the crucial route for EventDetail */}
        <Route path="/event/:eventId" element={<EventDetail />}/>
        <Route path="view-event" element={<ViewEvent />} />
        <Route path="update-event" element={<Update />} />
        <Route path="delete" element={<Delete />} />
        <Route path="delete/deleteshow" element={<Deleteshow />} />
      </Route>
    </Routes>
  );
}
