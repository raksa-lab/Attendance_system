// import { Routes, Route } from "react-router-dom";
// import GetStart from "../components/Users/GetStart/Getstart.jsx";
// import OnlineRegister from "../components/Users/OnlineRegis/OnlineRegister.jsx";
// import InputDesgin from "../components/Users/ResgisterNow/InputDesgin.jsx";
// import ResgisterSuccess from "../components/Users/ResgisterSuccess.jsx";

// export default function RouteUser() {
//   return (
//     <Routes>
//       <Route index element={<Welcome />} />
//       <Route path="GetStart" element={<GetStart />} />
//       <Route path="Register" element={<OnlineRegister />} />
//       <Route path="Register-Now" element={<InputDesgin />} />
//       <Route path="Register-Success" element={<ResgisterSuccess />} />
//     </Routes>
//   );
// }

import { Routes, Route } from "react-router-dom";
import GetStart from "../components/Users/GetStart/Getstart.jsx";
import OnlineRegister from "../components/Users/OnlineRegis/OnlineRegister.jsx";
import InputDesgin from "../components/Users/ResgisterNow/InputDesgin.jsx";
import ResgisterSuccess from "../components/Users/ResgisterSuccess.jsx";
import Welcome from "../components/Users/Welcome/welcome.jsx"; // Import Welcome component

export default function RouteUser() {
  return (
    // <Routes>
    //   <Route path="/" >
    //     <Route index element={<Welcome />} />
    //     <Route path="GetStart" element={<GetStart />} />
    //     <Route path="Register" element={<OnlineRegister />} />
    //     <Route path="Register-Now" element={<InputDesgin />} />
    //     <Route path="Register-Success" element={<ResgisterSuccess />} />
    //   </Route>
    // </Routes>

    <Routes>
      {/* This outer route captures the base path for all nested routes.
          When BrowserRouter has basename="/user", path="/" here means "/user/"
      */}
      <Route path="/">
        {/* Matches /user/ */}
        <Route index element={<Welcome />} />
        {/* Matches /user/GetStart */}
        <Route path="GetStart" element={<GetStart />} />

        {/* Make Register a parent route to nest Register-Success under it */}
        <Route path="Register">
          {/* This makes /user/Register show OnlineRegister */}
          <Route index element={<OnlineRegister />} />
          {/* This is now /user/Register/Register-Success */}
          <Route path="Register-Success" element={<ResgisterSuccess />} />
        </Route>

        {/* Matches /user/Register-Now */}
        <Route path="Register-Now" element={<InputDesgin />} />
      </Route>
    </Routes>
  );
}
