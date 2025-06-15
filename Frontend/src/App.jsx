import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/routes/routes";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;