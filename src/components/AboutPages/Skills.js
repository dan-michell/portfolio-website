import { AiOutlineLeftCircle } from "react-icons/ai";
import {
  SiDeno,
  SiJavascript,
  SiJest,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

function Skills() {
  return (
    <div className="carousel-item w-full" id="skills">
      <div className="flex justify-center items-center">
        <button className="flex items-center justify-center hover:scale-110 transition-all ml-3">
          <a href="#about-me">
            <AiOutlineLeftCircle size={44} className="text-gray-300" />
          </a>
        </button>
      </div>
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="ml-[15%] mt-[12vh] text-gray-200 w-full">
          <h1 className="font-medium text-7xl mb-3">Skills.</h1>
          <h3 className="font-light text-gray-400 text-3xl">Technologies I have been working with recently.</h3>
        </div>
        <div className="w-full flex flex-col mt-[8vh] gap-14">
          <div className="w-full flex justify-around">
            <div className="flex flex-col items-center justify-center">
              <button className="flex items-center justify-center hover:scale-110 transition-all">
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <SiReact size={94} className="text-gray-300" />
                </a>
              </button>
              <p className="mt-1 text-lg ">React JS</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="flex items-center justify-center hover:scale-110 transition-all">
                <a href="https://deno.land/" target="_blank" rel="noreferrer">
                  <SiDeno size={94} className="text-gray-300" />
                </a>
              </button>
              <p className="mt-1 text-lg ">Deno</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="flex items-center justify-center hover:scale-110 transition-all">
                <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                  <SiNodedotjs size={94} className="text-gray-300" />
                </a>
              </button>
              <p className="mt-1 text-lg ">Node.js</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="flex items-center justify-center hover:scale-110 transition-all">
                <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
                  <SiPostgresql size={94} className="text-gray-300" />
                </a>
              </button>
              <p className="mt-1 text-lg ">PostgreSQL</p>
            </div>
          </div>
          <div className="w-full flex justify-around">
            <div className="flex flex-col items-center justify-center">
              <button className="flex items-center justify-center hover:scale-110 transition-all">
                <a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
                  <SiJavascript size={94} className="text-gray-300" />
                </a>
              </button>
              <p className="mt-1 text-lg ">JavaScript</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="flex items-center justify-center hover:scale-110 transition-all">
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                  <SiTypescript size={94} className="text-gray-300" />
                </a>
              </button>
              <p className="mt-1 text-lg ">TypeScript</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="flex items-center justify-center hover:scale-110 transition-all">
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                  <SiTailwindcss size={94} className="text-gray-300" />
                </a>
              </button>
              <p className="mt-1 text-lg ">Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="flex items-center justify-center hover:scale-110 transition-all">
                <a href="https://jestjs.io/" target="_blank" rel="noreferrer">
                  <SiJest size={94} className="text-gray-300" />
                </a>
              </button>
              <p className="mt-1 text-lg ">Jest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
