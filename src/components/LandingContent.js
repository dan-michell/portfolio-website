import { TiArrowDownOutline } from "react-icons/ti";
import { RiArrowDownSLine } from "react-icons/ri";

function LandingContent(props) {
  return (
    <div className="flex flex-col items-center h-[100%]">
      <div className="w-screen">
        <div className="mt-[8%] ml-[18%] text-gray-200 ">
          <h1 className="font-semibold text-9xl">Hello,</h1>
          <h1 className="font-semibold text-9xl">I'm Dan</h1>
          <h3 className=" font-light text-gray-400 text-4xl">
            Fullstack Software Engineer with a passion for
            <br /> learning and problem solving.
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center mt-auto mb-2">
        <RiArrowDownSLine size={44} className="text-gray-300" />
        <button className="text-gray-300 text-xl font-light hover:text-2xl transition-all">About me</button>
        <RiArrowDownSLine size={44} className="text-gray-300" />
      </div>
    </div>
  );
}

export default LandingContent;
