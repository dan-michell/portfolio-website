import AboutMe from "./AboutPages/AboutMe";
import Skills from "./AboutPages/Skills";

function About() {
  return (
    <div className="flex flex-col items-center h-full" id="about">
      <div className="w-full h-[100vh] carousel rounded-box bg-opacity-20">
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}

export default About;
