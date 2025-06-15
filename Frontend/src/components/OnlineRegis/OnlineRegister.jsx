import React, { useState } from "react";
import organizer from "../../assets/img/organizer.jpg";
import { useNavigate } from "react-router-dom";

export default function OnlineRegister() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState(""); // Add this line

  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#110E5B] text-center mb-8 py-8">
        Our Event is support Girl
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
            value={phoneNumber} // Add this line
            onChange={(e) => setPhoneNumber(e.target.value)} // Add this line
            className="w-[300px] px-4 py-2 border border-gray-400 rounded mb-6 text-center focus:outline-none focus:ring-2 focus:ring-[#23235B]"
          />
          <button
            onClick={() => navigate("/Register-Success")}
            disabled={!phoneNumber}
            className={`w-[180px] mb-4 px-6 py-3 bg-[#3B3676] text-white text-lg font-semibold rounded-lg transition-colors duration-300 ${
              !phoneNumber
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#2d295c]"
            }`}
          >
            Check In
          </button>
          <button
            onClick={() => navigate("/getstart")}
            className="w-[180px] px-6 py-3 bg-[#3B3676] text-white text-lg font-semibold rounded-lg hover:bg-[#2d295c] transition-colors duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}
