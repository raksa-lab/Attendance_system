import { Routes, Route } from "react-router-dom";
import OrganizerLayout from "../components/Organizer/OrganizerSidebar";
import Overview from "../components/Organizer/Overview/Overview";
import CreateEvent from "../components/Organizer/CreateEvent/CreateEvent";
import Update from "../components/Organizer/Update/Update";
import Delete from "../components/Organizer/Delete/Delete";
import ViewEvent from "../components/Organizer/ViewEventDetail/ViewEvent";

export default function RouteOrganizer() {
  return (
    <Routes>
      <Route path="/" element={<OrganizerLayout />}>
        <Route index element={<Overview />} />
        <Route path="overview" element={<Overview />} />
        <Route path="create-event" element={<CreateEvent />} />
        <Route path="view-event" element={<ViewEvent />} />
        <Route path="update-event" element={<Update />} />
        <Route path="delete" element={<Delete />} />
      </Route>
    </Routes>
  );
}
