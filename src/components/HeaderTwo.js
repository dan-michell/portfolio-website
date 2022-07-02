import { useState } from "react";
import { GoTerminal } from "react-icons/go";

function HeaderTwo(props) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className=" border-b-[1px] border-gray-600 px-2 sm:px-4 py-2.5 sm:w-[75%] w-[90%] mt-3">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <GoTerminal size={40} className="text-gray-300" />
          <span className="text-xl text-gray-300 ml-3 font-mono">Dan Michell</span>
        </div>
        <button
          type="button"
          className="inline-flex items-center text-sm text-gray-200 rounded-lg md:hidden"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={navOpen ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"}>
          <ul className="flex items-center flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a
                href="#about"
                className="hover:scale-110 transition-all block py-2 pr-4 pl-3 text-gray-200 hover:text-gray-300 md:hover:text-gray-300 md:border-0 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="hover:scale-110 transition-all block py-2 pr-4 pl-3 text-gray-200 hover:text-gray-300 md:hover:text-gray-300 md:border-0 md:p-0"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:scale-110 transition-all block py-2 pr-4 pl-3 text-gray-200 hover:text-gray-300 md:hover:text-gray-300 md:border-0 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderTwo;
