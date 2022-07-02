import { AiOutlineDownCircle } from "react-icons/ai";
import { useState } from "react";
import Links from "./Links";

function LandingContent(props) {
  const [wave, setWave] = useState(false);

  return (
    <div className="flex flex-col items-center h-full">
      <div className="carousel w-screen flex justify-center sm:justify-start">
        <div className="mt-[16vh] sm:ml-[22vw] relative text-gray-200 carousel-item flex flex-col items-center sm:items-start border-2">
          <div
            className={`animate-wave text-7xl w-20 origin-bottom-right absolute sm:top-[-45px] sm:left-[-60px] left-[90px] top-[-40px] ${
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
            className="font-semibold sm:text-9xl text-8xl"
          >
            Hello,
          </h1>
          <h1 className="font-semibold sm:text-9xl text-8xl">I'm Dan.</h1>
          <h3 className="font-light text-gray-400 sm:text-4xl text-xl flex flex-wrap text-center sm:text-left sm:w-auto">
            Fullstack Software Engineer with a passion
            <br /> for learning and problem solving.
          </h3>
          <Links />
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
