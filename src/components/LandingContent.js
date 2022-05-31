import { AiOutlineDownCircle } from "react-icons/ai";
import { useState } from "react";

function LandingContent(props) {
  const [wave, setWave] = useState(false);

  return (
    <div className="flex flex-col items-center h-full">
      <div className="w-screen">
        <div className="mt-[18vh] ml-[22vw] relative text-gray-200 inline-block">
          <div
            className={`animate-wave text-7xl w-20 origin-bottom-right absolute top-[-45px] left-[-60px] ${
              wave ? "opacity-100 transition-opacity duration-500" : "opacity-0 transition-opacity duration-700"
            }`}
          >
            👋
          </div>
          <h1
            onMouseEnter={(e) => {
              setWave(true);
            }}
            onMouseLeave={(e) => {
              setWave(false);
            }}
            className="font-semibold text-9xl"
          >
            Hello,
          </h1>
          <h1 className="font-semibold text-9xl">I'm Dan.</h1>
          <h3 className=" font-light text-gray-400 text-4xl">
            Fullstack Software Engineer with a passion for
            <br /> learning and problem solving.
          </h3>
        </div>
      </div>
      <button className="flex items-center justify-center mt-auto mb-3 hover:scale-110 transition-all">
        <a href="#about">
          <AiOutlineDownCircle size={44} className="text-gray-300" />
        </a>
      </button>
    </div>
  );
}

export default LandingContent;
