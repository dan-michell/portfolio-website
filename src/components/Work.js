import { AiOutlineDownCircle } from "react-icons/ai";
import { MdOutlineSwipe } from "react-icons/md";
import ProjectTemplate from "./ProjectTemplate";
import { projectData } from "../data";

function Work() {
  function populateProjects() {
    return projectData.map((project, i) => {
      return <ProjectTemplate key={i} projectInfo={project} />;
    });
  }

  return (
    <div className="flex flex-col items-center h-full">
      <div class="w-full h-[100vh] carousel rounded-box bg-opacity-20 text-gray-300">
        <div class="carousel-item w-full flex flex-col items-center justify-center gap-10">
          <div>
            <h1 className="font-medium text-8xl mb-3">My Work.</h1>
            <h3 className="font-light text-gray-400 text-4xl">
              Personal and professional projects,
              <br />
              ordered by scale.
            </h3>
          </div>
          <div className="flex justify-center items-center gap-5 mt-10">
            <h1 className="text-4xl">Take a look...</h1>
            <MdOutlineSwipe size={86} className="text-gray-300 animate-swipe origin-bottom" />
          </div>
        </div>
        {populateProjects()}
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
