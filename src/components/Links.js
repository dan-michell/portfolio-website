import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { SiCodewars } from "react-icons/si";

function Links(props) {
  return (
    <div className="flex gap-5 mt-5">
      <a href="https://www.linkedin.com/in/dan-michell/" target="_blank" rel="noreferrer">
        <BsLinkedin size={32} className="text-gray-300 hover:scale-110 transition-all" />
      </a>
      <a href="https://github.com/dan-michell" target="_blank" rel="noreferrer">
        <BsGithub size={32} className="text-gray-300 hover:scale-110 transition-all" />
      </a>
      <a
        href="https://docs.google.com/document/d/1A_d70lTEmuXkLDCSQ1S_TizhpciS73Jw/edit?usp=sharing&ouid=113481022304426538285&rtpof=true&sd=true"
        target="_blank"
        rel="noreferrer"
      >
        <BsFillFileEarmarkPersonFill size={32} className="text-gray-300 hover:scale-110 transition-all" />
      </a>
      <a href="https://www.codewars.com/users/Danjm" target="_blank" rel="noreferrer">
        <SiCodewars size={32} className="text-gray-300 hover:scale-110 transition-all" />
      </a>
    </div>
  );
}

export default Links;
