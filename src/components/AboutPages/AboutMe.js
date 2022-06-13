import { AiOutlineRightCircle } from "react-icons/ai";

function AboutMe() {
  return (
    <div className="carousel-item w-full flex flex-col items-center gap-8" id="about-me">
      <div className="ml-[15%] mt-[12vh] text-gray-200 w-full">
        <h1 className="font-medium text-7xl mb-3">About me.</h1>
        <h3 className="font-light text-gray-400 text-3xl"></h3>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex w-[20%] justify-center items-center mx-10">
          <img
            className="rounded-full"
            alt="Dan Michell"
            src="https://drive.google.com/uc?export=view&id=1wucOFHiV3wLZX-bM4HAz_4fbqjOL4SPJ"
          />
        </div>
        <div className="flex items-center w-[60%]">
          <p className="text-xl font-light leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero iste quod quibusdam maxime
            recusandae odit eveniet, aspernatur culpa provident error molestiae vitae corporis in vero est! Beatae,
            ipsum voluptatibus.
            <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero iste quod quibusdam maxime
            recusandae odit eveniet, aspernatur culpa provident error molestiae vitae corporis in vero est! Beatae,
            ipsum voluptatibus.
            <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero iste quod quibusdam maxime
            recusandae odit take a look at a brief overview of my{" "}
            <span>
              <a href="#skills" className="font-bold hover:underline">
                skills
              </a>
            </span>
            .
          </p>
        </div>
      </div>

      {/* <div className="flex justify-center items-center">
        <button className="flex items-center justify-center hover:scale-110 transition-all mr-3">
          <a href="#skills">
            <AiOutlineRightCircle size={44} className="text-gray-300" />
          </a>
        </button>
      </div> */}
    </div>
  );
}

export default AboutMe;
