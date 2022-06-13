import { AiOutlineDownCircle } from "react-icons/ai";
import AboutMe from "./AboutPages/AboutMe";
import Skills from "./AboutPages/Skills";

function About() {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="w-full h-[100vh] carousel rounded-box bg-opacity-20">
        <AboutMe />
        <Skills />
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
