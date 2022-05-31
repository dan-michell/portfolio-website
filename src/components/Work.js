import { AiOutlineDownCircle } from "react-icons/ai";
import { MdOutlineSwipe } from "react-icons/md";

function Work() {
  return (
    <div className="flex flex-col items-center h-full">
      <div class="w-[96%] h-[80%] carousel rounded-box bg-opacity-20 bg-slate-900 m-10 text-gray-300">
        <div class="carousel-item w-full flex items-center justify-center gap-10">
          <h1 className="text-7xl font-medium">Swipe</h1>
          <MdOutlineSwipe size={96} className="text-gray-300 animate-swipe origin-bottom" />
        </div>
        <div class="carousel-item w-full">2</div>
        <div class="carousel-item w-full">3</div>
        <div class="carousel-item w-full">4</div>
        <div class="carousel-item w-full">5</div>
      </div>
      <button className="flex items-center justify-center mt-auto mb-3 hover:scale-110 transition-all">
        <a href="#contact">
          <AiOutlineDownCircle size={44} className="text-gray-300" />
        </a>
      </button>
    </div>
  );
}

export default Work;
