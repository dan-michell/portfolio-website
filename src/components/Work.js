import { AiOutlineDownCircle } from "react-icons/ai";

function Work() {
  return (
    <div className="flex flex-col items-center h-full">
      <button className="flex items-center justify-center mt-auto mb-3 hover:scale-110 transition-all">
        <a href="#contact">
          <AiOutlineDownCircle size={44} className="text-gray-300" />
        </a>
      </button>
    </div>
  );
}

export default Work;
