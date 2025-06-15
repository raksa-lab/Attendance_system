import { useNavigate } from "react-router-dom";
import organizer from "../../assets/img/organizer.jpg";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl font-bold text-[#110E5B] text-center mb-8">
          Welcome to Our Event
        </h1>
        <img
          src={organizer}
          alt="Organizer"
          className="w-1/2 mb-8 rounded-lg shadow-lg"
        />
        <button
          onClick={() => navigate("/GetStart")}
          className="px-6 py-3 bg-[#110E5B] text-white rounded-lg hover:bg-blue-900 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </>
  );
}
