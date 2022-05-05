import { IoMdContact } from "react-icons/io";
import { BsInfoCircle, BsBookHalf } from "react-icons/bs";
import SidebarIcon from "./SidebarIcon";

function Header() {
  return (
    <div className="fixed top-0 w-screen m-0 flex justify-around items-center rounded-b-xl bg-gray-900">
      <SidebarIcon icon={<BsInfoCircle size={32} />} />
      <SidebarIcon icon={<BsBookHalf size={32} />} />
      <SidebarIcon icon={<IoMdContact size={32} />} />
    </div>
  );
}

export default Header;
