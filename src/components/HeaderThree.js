import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoTerminal } from "react-icons/go";

export default function HeaderThree() {
  return (
    <div className="navbar sm:px-10">
      <div className="flex-1">
        <div className="flex items-center">
          <GoTerminal size={40} className="text-gray-300" />
          <span className="text-xl text-gray-300 ml-3 font-mono">Dan Michell</span>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <label tabindex="0" className="btn btn-ghost btn-circle avatar">
          <BsThreeDots size={24} />
        </label>
        <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-[#0a0c0e] rounded-box w-52">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
