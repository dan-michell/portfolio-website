import { TiArrowDownOutline } from "react-icons/ti";
import { RiArrowDownSLine } from "react-icons/ri";

function LandingContent(props) {
  return (
    <div className="flex flex-col items-center h-[100%]">
      <div className="w-screen">
        <div className="mt-[6%] ml-[10%] text-gray-200">
          <h1 className="font-semibold text-9xl">Hello,</h1>
          <h1 className="font-semibold text-9xl">I'm Dan</h1>
          <h3 className=" font-light text-gray-400 text-4xl">
            Fullstack Software Enginer with a passion for
            <br /> learning and problem solving!
          </h3>
        </div>
      </div>
      <div className="mt-36 flex flex-col items-center">
        <h2 className="text-gray-300 text-2xl font-light italic">Take a look at my work!</h2>
        <RiArrowDownSLine size={64} className=" text-gray-200" />
      </div>
    </div>
  );
}

export default LandingContent;
