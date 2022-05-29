import { AiOutlineDownCircle } from "react-icons/ai";
import { AiOutlineUpCircle } from "react-icons/ai";

function About() {
  return (
    <div className="flex flex-col items-center h-full">
      <button className="flex items-center justify-center mt-3 hover:scale-110 transition-all">
        <AiOutlineUpCircle size={44} className="text-gray-300" />
      </button>
      <div className="w-screen">
        <div className="mt-[3%] ml-[10%] text-gray-200 ">
          <h1 className="font-semibold text-5xl">About me.</h1>
          <h3 className=" font-light text-gray-400 text-2xl">Who am I? How did I get here? Where am I going?</h3>
        </div>
      </div>
      <div className="h-full w-screen flex mt-6">
        <div className="h-full w-[40%] flex justify-center">
          <img src="https://via.placeholder.com/300" className="rounded-full w-80 h-80 mt-10" />
        </div>
        <div className="h-full w-[55%]">
          <p class="text-xl font-light leading-relaxed mt-8 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero iste quod quibusdam maxime
            recusandae odit eveniet, aspernatur culpa provident error molestiae vitae corporis in vero est! Beatae,
            ipsum voluptatibus.
            <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero iste quod quibusdam maxime
            recusandae odit eveniet, aspernatur culpa provident error molestiae vitae corporis in vero est! Beatae,
            ipsum voluptatibus.
            <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero iste quod quibusdam maxime
            recusandae odit eveniet, aspernatur culpa provident error molestiae vitae corporis in vero est! Beatae,
            ipsum voluptatibus.
          </p>
        </div>
      </div>
      <button className="flex items-center justify-center mt-auto mb-3 hover:scale-110 transition-all">
        <AiOutlineDownCircle size={44} className="text-gray-300" />
      </button>
    </div>
  );
}

export default About;
