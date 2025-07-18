import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteOrganizer from "./routes/RouteOrganizer";
import From from "./components/From";
import AppRoutes from "./routes/routes";
import RouteUser from "./routes/RouteUser";
import ViewEventDetail from "./components/Organizer/ViewEventDetail/ViewEventDetail";
// import EventDetailsCard from "./components/Organizer/CreateEvent/CreateSuccess/EventDetailsCard";
import Card from "./components/Card";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/organizer/*" element={<RouteOrganizer />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/user/*" element={<RouteUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
