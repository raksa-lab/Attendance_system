import organizer from "../../assets/img/organizer.jpg";
import { useNavigate } from "react-router-dom";
export default function GetStart() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#110E5B] text-center mb-8 py-8">
        Our Event is support Girl
      </h1>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex justify-center mb-10 w-full">
          <img
            src={organizer}
            alt="No Img"
            className="w-full max-w-[700px] h-auto object-contain rounded-lg shadow"
          />
        </div>
        <div className="flex flex-row gap-16">
          <button 
          onClick={() => navigate("/Register")}
          className="px-10 py-3 bg-[#110E5B] text-white text-lg font-semibold rounded-lg hover:bg-[#2d295c] transition-colors duration-300">
            Check In
          </button>
          <button
          onClick={() => navigate("/Register-Now")}
           className="px-10 py-3 bg-[#110E5B] text-white text-lg font-semibold rounded-lg hover:bg-[#2d295c] transition-colors duration-300">
            Resgister Now
          </button>
        </div>
      </div>
    </>
  );
}
