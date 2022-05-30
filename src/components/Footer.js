import { GoTerminal } from "react-icons/go";

function Footer() {
  return (
    <footer class="p-4 bg-slate-900 bg-opacity-60 rounded-lg shadow w-screen snap-center">
      <div className="flex items-center justify-center">
        <GoTerminal size={40} className="text-gray-300" />
        <span className="text-xl text-gray-300 ml-3 font-mono">Dan Michell</span>
      </div>
    </footer>
  );
}

export default Footer;
