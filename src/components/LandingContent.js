import { AiOutlineDownCircle } from "react-icons/ai";
import { useState } from "react";

function LandingContent(props) {
  const [wave, setWave] = useState(true);

  return (
    <div ref={props.landingPageRef} className="flex flex-col items-center h-[100%]">
      <div className="w-screen">
        <div
          onMouseEnter={(e) => {
            setWave(true);
          }}
          onMouseLeave={(e) => {
            setWave(true);
          }}
          className="mt-[18vh] ml-[22vw] relative text-gray-200 inline-block"
        >
          {wave ? (
            <div className="animate-wave text-7xl w-20 origin-bottom-right absolute top-[-45px] left-[-60px]">👋</div>
          ) : (
            ""
          )}
          <h1 className="font-semibold text-9xl">Hello,</h1>
          <h1 className="font-semibold text-9xl">I'm Dan.</h1>
          <h3 className=" font-light text-gray-400 text-4xl">
            Fullstack Software Engineer with a passion for
            <br /> learning and problem solving.
          </h3>
        </div>
      </div>
      <button className="flex items-center justify-center mt-auto mb-3 hover:scale-110 transition-all">
        <AiOutlineDownCircle size={44} className="text-gray-300" />
      </button>
    </div>
  );
}

export default LandingContent;
