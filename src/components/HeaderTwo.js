import { useState } from "react";

function HeaderTwo(props) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className=" border-b-[1px] border-gray-600 px-2 sm:px-4 py-2.5 w-[75%] mt-3">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://google.com" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dan Michell</span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          Menu
        </button>
        <div className={navOpen ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"}>
          <ul className="flex items-center flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="https://google.com"
                className="block py-2 pr-4 pl-3 text-gray-200 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://google.com"
                className="block py-2 pr-4 pl-3 text-gray-200 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="https://google.com"
                className="block py-2 pr-4 pl-3 text-gray-200 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://google.com"
                className="block py-2 pr-4 pl-3 text-gray-200 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"
              >
                Links
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderTwo;
