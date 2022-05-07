import { IoMdContact } from "react-icons/io";
import { IoHardwareChipSharp } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { BsInfoCircle, BsBookHalf } from "react-icons/bs";
import SidebarIcon from "./SidebarIcon";

function Header() {
  return (
    <div className="w-screen flex justify-evenly items-center">
      <p className="font-medium text-gray-200 text-2xl m-3">Dan Michell</p>
      <ul className="flex items-center">
        <li className="text-hover  ">About</li>
        <li className="text-gray-200 text-xl">/</li>
        <li className="text-hover ">Work</li>
        <li className="text-gray-200 text-xl">/</li>
        <li className="text-hover ">Links</li>
      </ul>

      {/* <SidebarIcon icon={<BsInfoCircle size={32} />} />
      <SidebarIcon icon={<BsBookHalf size={32} />} />
      <SidebarIcon icon={<IoMdContact size={32} />} /> */}
    </div>
  );
}

export default Header;
