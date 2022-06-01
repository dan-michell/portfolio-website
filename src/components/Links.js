import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

function Links(props) {
  return (
    <div className="flex gap-5 mt-5">
      <a href="https://www.linkedin.com/in/dan-michell/" target="_blank" rel="noreferrer">
        <BsLinkedin size={32} className="text-gray-300 hover:scale-110 transition-all" />
      </a>
      <a href="https://github.com/dan-michell" target="_blank" rel="noreferrer">
        <BsGithub size={32} className="text-gray-300 hover:scale-110 transition-all" />
      </a>
      <a href="#" target="_blank" rel="noreferrer">
        <BsFillFileEarmarkPersonFill size={32} className="text-gray-300 hover:scale-110 transition-all" />
      </a>
    </div>
  );
}

export default Links;
