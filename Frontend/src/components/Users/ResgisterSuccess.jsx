import organizer from "../../assets/img/organizer.jpg"; // <-- Check this path carefully!
// import { useNavigate } from "react-router-dom"; // You might not need this if no buttons on success page

export default function ResgisterSuccess() {
  // const navigate = useNavigate(); // Initialize useNavigate if you plan to add navigation buttons here

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#23235B] text-center mb-8 mt-4">
        Our Event supports Girl
      </h1>
      <div className="flex justify-center mb-10 w-full">
        <img
          src={organizer} // <-- Is this image path correct from ResgisterSuccess.jsx?
          alt="Organizer"
          className="w-full max-w-[700px] h-auto object-contain rounded-lg shadow"
        />
      </div>
      <div className="flex flex-col items-center mt-8">
        <svg
          width="160"
          height="160"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4"
        >
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#23235B"
            strokeWidth="8"
            fill="none"
          />
          <path
            d="M50 85L75 110L110 65"
            stroke="#23235B"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <span className="text-xl font-bold text-[#23235B]">Successful</span>
        {/* Example: Add a button to go back to Register/Check-in page if needed */}
        {/* <button
          onClick={() => navigate("/user/Register")}
          className="mt-8 px-6 py-3 bg-[#110E5B] text-white text-lg font-semibold rounded-lg hover:bg-[#2d295c] transition-colors duration-300"
        >
          Back to Check In
        </button> */}
      </div>
    </div>
  );
}