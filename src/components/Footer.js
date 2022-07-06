import { GoTerminal } from "react-icons/go";
import { AiOutlineToTop } from "react-icons/ai";

function Footer() {
  return (
    <footer class="py-4 px-16 bg-slate-900 bg-opacity-90 rounded-lg shadow w-screen flex items-center justify-between">
      <div className="flex items-center justify-center">
        <GoTerminal size={40} className="text-gray-300" />
        <span className="text-xl text-gray-300 ml-3 font-mono">Dan Michell</span>
      </div>
      <button className="flex items-center justify-center mt-auto hover:scale-110 transition-all">
        <a href="#home">
          <AiOutlineToTop size={40} className="text-gray-300" />
        </a>
      </button>
    </footer>
  );
}

export default Footer;
