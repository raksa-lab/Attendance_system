import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center h-screen bg-[#e0e5ec]">
      <div className="bg-[#e0e5ec] p-8 rounded-2xl shadow-[10px_10px_30px_#c2c8d0,-10px_-10px_30px_#ffffff] w-80">
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 font-bold rounded-xl transition duration-300 ${
              isLogin
                ? "bg-[#d1d9e6] shadow-inner shadow-[inset_2px_2px_5px_#bec4cb,inset_-2px_-2px_5px_#f0f5fa]"
                : ""
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 font-bold rounded-xl transition duration-300 ${
              !isLogin
                ? "bg-[#d1d9e6] shadow-inner shadow-[inset_2px_2px_5px_#bec4cb,inset_-2px_-2px_5px_#f0f5fa]"
                : ""
            }`}
          >
            Register
          </button>
        </div>

        {isLogin ? (
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              required
              defaultValue="annaschawdhary157@gmail.com"
              className="my-2 py-3 px-4 rounded-xl border-none bg-[#e0e5ec] shadow-inner shadow-[inset_4px_4px_6px_#c8ccd1,inset_-4px_-4px_6px_#f0f5fa]"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="my-2 py-3 px-4 rounded-xl border-none bg-[#e0e5ec] shadow-inner shadow-[inset_4px_4px_6px_#c8ccd1,inset_-4px_-4px_6px_#f0f5fa]"
            />
            <button
              type="submit"
              className="mt-3 py-3 bg-[#e0e5ec] rounded-xl font-bold shadow-[6px_6px_10px_#c2c8d0,-6px_-6px_10px_#ffffff] hover:bg-[#d6dce4] transition"
            >
              Login
            </button>
            <p className="text-center my-3 text-sm text-gray-600">Or continue with</p>
            <div className="flex justify-around">
              <button className="w-10 h-10 rounded-full bg-[#e0e5ec] shadow-[6px_6px_10px_#c2c8d0,-6px_-6px_10px_#ffffff] text-lg">G</button>
              <button className="w-10 h-10 rounded-full bg-[#e0e5ec] shadow-[6px_6px_10px_#c2c8d0,-6px_-6px_10px_#ffffff] text-lg">f</button>
              <button className="w-10 h-10 rounded-full bg-[#e0e5ec] shadow-[6px_6px_10px_#c2c8d0,-6px_-6px_10px_#ffffff] text-lg">t</button>
            </div>
          </form>
        ) : (
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="my-2 py-3 px-4 rounded-xl border-none bg-[#e0e5ec] shadow-inner shadow-[inset_4px_4px_6px_#c8ccd1,inset_-4px_-4px_6px_#f0f5fa]"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="my-2 py-3 px-4 rounded-xl border-none bg-[#e0e5ec] shadow-inner shadow-[inset_4px_4px_6px_#c8ccd1,inset_-4px_-4px_6px_#f0f5fa]"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="my-2 py-3 px-4 rounded-xl border-none bg-[#e0e5ec] shadow-inner shadow-[inset_4px_4px_6px_#c8ccd1,inset_-4px_-4px_6px_#f0f5fa]"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="my-2 py-3 px-4 rounded-xl border-none bg-[#e0e5ec] shadow-inner shadow-[inset_4px_4px_6px_#c8ccd1,inset_-4px_-4px_6px_#f0f5fa]"
            />
            <button
              type="submit"
              className="mt-3 py-3 bg-[#e0e5ec] rounded-xl font-bold shadow-[6px_6px_10px_#c2c8d0,-6px_-6px_10px_#ffffff] hover:bg-[#d6dce4] transition"
            >
              Register
            </button>
            <p className="text-center my-3 text-sm text-gray-600">Or sign up with</p>
            <div className="flex justify-around">
              <button className="w-10 h-10 rounded-full bg-[#e0e5ec] shadow-[6px_6px_10px_#c2c8d0,-6px_-6px_10px_#ffffff] text-lg">G</button>
              <button className="w-10 h-10 rounded-full bg-[#e0e5ec] shadow-[6px_6px_10px_#c2c8d0,-6px_-6px_10px_#ffffff] text-lg">f</button>
              <button className="w-10 h-10 rounded-full bg-[#e0e5ec] shadow-[6px_6px_10px_#c2c8d0,-6px_-6px_10px_#ffffff] text-lg">t</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}