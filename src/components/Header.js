import { useState } from "react"; // import state

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between py-8 bg-gray-800 h-20">
      <a href="/">
        <img className="pl-10" src="https://via.placeholder.com/150x50" alt="logo" />
      </a>
      <nav>
        <section className="flex">
          <div
            className="space-y-2 mr-10"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 bg-gray-300"></span>
            <span className="block h-0.5 w-8 bg-gray-400"></span>
            <span className="block h-0.5 w-8 bg-gray-500"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="my-8 text-gray-300 font-medium text-2xl">
                <a href="/about">About</a>
              </li>
              <li className="my-8 text-gray-300 font-medium text-2xl">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="my-8 text-gray-300 font-medium text-2xl">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #111827;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

export default Header;
