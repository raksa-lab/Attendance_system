import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteOrganizer from "./routes/RouteOrganizer";
import ViewEventDetail from "./components/Organizer/ViewEventDetail/ViewEventDetail";
// import EventDetailsCard from "./components/Organizer/CreateEvent/CreateSuccess/EventDetailsCard";
// import EventPage from "./components/Organizer/CreateEvent/CreateSuccess/Popup";
// import Main from "./components/Organizer/CreateEvent/CreateSuccess/Main";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/organizer/*" element={<RouteOrganizer />} />
    //   </Routes>
    // </BrowserRouter>
    // <ViewEventDetail/>
    <EventDetailsCard/>
  
  );
}

export default App;
