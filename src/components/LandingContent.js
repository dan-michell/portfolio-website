import { AiOutlineDownCircle } from "react-icons/ai";

function LandingContent(props) {
  return (
    <div ref={props.landingPageRef} className="flex flex-col items-center h-[100%]">
      <div className="w-screen">
        <div className="mt-[8%] ml-[18%] text-gray-200 ">
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
