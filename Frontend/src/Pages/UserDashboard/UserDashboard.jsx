import {Route, Routes} from "react-router-dom";
import Welcome from "../../components/Welcome/welcome.jsx";
import GetStart from "../../components/GetStart/Getstart.jsx";
import OnlineRegister from "../../components/OnlineRegis/OnlineRegister.jsx";
import InputDesgin from "../../components/ResgisterNow/InputDesgin.jsx";
import ResgisterSuccess from "../../components/ResgisterSuccess.jsx";

export default function UserDashboard() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/GetStart" element={<GetStart />} />
            <Route path="/Register" element={<OnlineRegister />} />
            <Route path="/Register-Now" element={<InputDesgin />} />
            <Route path="/Register-Success" element={<ResgisterSuccess />} />
        </Routes>
    );
}