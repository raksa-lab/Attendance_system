import { Outlet } from "react-router-dom";

export default function GetStartLayout() {
  return (
    <div>
      {/* Optional header/navigation can go here */}
      <Outlet /> {/* This renders the nested routes inside /GetStart/* */}
    </div>
  );
}
