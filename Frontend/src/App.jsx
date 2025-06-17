import { BrowserRouter as Router } from "react-router-dom";
// import AppRoutes from "../src/routes/routes";
import Logins from "./components/Login/login.jsx";
import Login from "./Pages/Login/Login.jsx";
import { BrowserRouter} from "react-router-dom";
import UserDashboard from "./Pages/UserDashboard/UserDashboard.jsx";
function App() {
  return (
    // <Router>
    //   <AppRoutes />
    // </Router>
    //   <Login/>
      <BrowserRouter>
        <UserDashboard/>
      </BrowserRouter>

  );
}

export default App;