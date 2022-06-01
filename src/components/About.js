import { AiOutlineDownCircle } from "react-icons/ai";

function About() {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="w-screen">
        <div className="mt-[5%] ml-[10%] text-gray-200 ">
          <h1 className="font-medium text-7xl mb-3">About me.</h1>
          <h3 className="font-light text-gray-400 text-3xl">Who am I?</h3>
        </div>
      </div>
      <div className="h-full w-screen flex justify-center">
        <div className="h-full w-[30%] flex justify-center items-center ">
          <img
            className="rounded-full duration-500 w-80 h-80 min-w-[20rem]"
            alt="Dan Michell"
            src="https://drive.google.com/uc?export=view&id=1wucOFHiV3wLZX-bM4HAz_4fbqjOL4SPJ"
          />
        </div>
        <div className="h-full w-[55%] flex items-center relative z-20">
          <p class="text-xl font-light leading-relaxed text-gray-300">
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
        <a href="#work">
          <AiOutlineDownCircle size={44} className="text-gray-300" />
        </a>
      </button>
    </div>
  );
}

export default About;
