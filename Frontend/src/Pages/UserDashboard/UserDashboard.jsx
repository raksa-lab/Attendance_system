import {Route, Routes} from "react-router-dom";
// import Welcome from "../../../src/components/Users/GetStart/Getstart.jsx";
import GetStart from "../../../src/components/Users/GetStart/Getstart.jsx";
import OnlineRegister from "../../../src/components/Users/OnlineRegis/OnlineRegister.jsx";
import InputDesgin from "../../../src/components/Users//ResgisterNow/InputDesgin.jsx";
import ResgisterSuccess from "../../../src/components/Users/ResgisterSuccess.jsx";

export default function UserDashboard() {
    return (
        <Routes>
            {/* <Route path="/" element={<Welcome />} /> */}
            <Route path="/GetStart" element={<GetStart />} />
            <Route path="/Register" element={<OnlineRegister />} />
            <Route path="/Register-Now" element={<InputDesgin />} />
            <Route path="/Register-Success" element={<ResgisterSuccess />} />
        </Routes>
    );
}

