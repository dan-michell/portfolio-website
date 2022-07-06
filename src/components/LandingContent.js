import { useState } from "react";
import Links from "./Links";

function LandingContent(props) {
  const [wave, setWave] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <div className="carousel w-screen h-full flex justify-center sm:justify-start items-center">
        <div className="sm:ml-[22vw] relative text-gray-200 carousel-item flex flex-col items-center sm:items-start">
          <div
            className={`animate-wave text-7xl w-20 origin-bottom-right absolute sm:top-[-45px] sm:left-[-60px] left-[110px] top-[-60px] ${
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
            className="font-semibold sm:text-[170px] text-8xl"
          >
            Hello!
          </h1>
          <h1 className="font-semibold sm:text-[170px] text-8xl">I'm Dan.</h1>
          <h3 className="font-light text-gray-400 sm:text-4xl text-xl flex flex-wrap text-center sm:text-left sm:w-auto">
            Fullstack Software Engineer with a passion
            <br /> for learning and problem solving.
          </h3>
          <Links />
        </div>
      </div>
    </div>
  );
}

export default LandingContent;
