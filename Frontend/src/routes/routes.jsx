import { Routes, Route } from "react-router-dom";
import Welcome from "../components/Welcome/welcome";
import GetStart from "../components/GetStart/Getstart";
import OnlineRegister from "../components/OnlineRegis/OnlineRegister";
import ResgisterSuccess from "../components/ResgisterSuccess";
import InputDesgin from "../components/ResgisterNow/InputDesgin";

export default function AppRoutes() {
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
