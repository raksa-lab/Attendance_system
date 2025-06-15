import organizer from "../assets/img/organizer.jpg";

export default function ResgisterSuccess() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#23235B] text-center mb-8 mt-4">
        Our Event is support Girl
      </h1>
      <div className="flex justify-center mb-10 w-full">
        <img
          src={organizer}
          alt="Organizer"
          className="w-full max-w-[700px] h-auto object-contain rounded-lg shadow"
        />
      </div>
      {/* Success Icon */}
      <div className="flex flex-col items-center mt-8">
        <svg
          width="160" 
          height="160"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4"
        >
          <circle cx="80" cy="80" r="70" stroke="#23235B" strokeWidth="8" fill="none" />
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
      </div>
    </div>
  );
}