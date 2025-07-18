
import React, { useState } from "react";
import organizer from "../../../assets/img/organizer.jpg";
import { useNavigate } from "react-router-dom";

export default function OnlineRegister() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckIn = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/user/students_checkIns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone_number: phoneNumber }),
      });

      if (response.ok) {
        // Navigates to /user/Register/Register-Success
        navigate("/user/Register/Register-Success");
      } else {
        const result = await response.json();
        alert("Check-in failed: " + result.error);
      }
    } catch (error) {
      alert("❌ Error submitting form.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#110E5B] text-center mb-8 py-8">
        Our Event Supports Girls
      </h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center mb-10 w-full">
          <img
            src={organizer}
            alt="No Img"
            className="w-full max-w-[700px] h-auto object-contain rounded-lg shadow"
          />
        </div>
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#23235B] text-center mb-6">
          Input to Check In
        </h2>
        <div className="w-full flex flex-col items-center">
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-[300px] px-4 py-2 border border-gray-400 rounded mb-6 text-center focus:outline-none focus:ring-2 focus:ring-[#23235B]"
          />
          <button
            onClick={handleCheckIn}
            disabled={!phoneNumber || loading}
            className={`w-[180px] mb-4 px-6 py-3 bg-[#3B3676] text-white text-lg font-semibold rounded-lg transition-colors duration-300 ${
              !phoneNumber || loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#2d295c]"
            }`}
          >
            {loading ? "Checking In..." : "Check In"}
          </button>
          <button
            // Navigates to /user/GetStart
            onClick={() => navigate("/user/GetStart")}
            className="w-[180px] px-6 py-3 bg-[#3B3676] text-white text-lg font-semibold rounded-lg hover:bg-[#2d295c] transition-colors duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}