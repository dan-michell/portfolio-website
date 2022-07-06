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
    <div className="flex flex-col items-center h-full" id="work">
      <div class="w-full h-[100vh] carousel rounded-box bg-opacity-20 text-gray-300">
        <div class="carousel-item w-full flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-medium sm:text-9xl text-7xl mb-3">My Work.</h1>
            <h3 className="font-light text-gray-400 sm:text-4xl text-2xl">Personal and professional projects.</h3>
          </div>
          <div className="flex justify-center items-center gap-5 mt-10 sm:flex-row flex-col">
            <h1 className="sm:text-4xl text-3xl">Take a look...</h1>
            <MdOutlineSwipe size={76} className="text-gray-300 animate-swipe origin-bottom" />
          </div>
        </div>
        {populateProjects()}
      </div>
    </div>
  );
}

export default Work;
