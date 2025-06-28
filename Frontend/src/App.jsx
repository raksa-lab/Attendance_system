import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteOrganizer from "./routes/RouteOrganizer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/organizer/*" element={<RouteOrganizer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;