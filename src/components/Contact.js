import { AiOutlineUpCircle } from "react-icons/ai";

function Contact() {
  return (
    <div className="flex flex-col items-center h-full">
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-[50%] text-gray-200 bg-slate-900 rounded-lg"
        placeholder="Your message..."
      ></textarea>
      <button className="flex items-center justify-center mt-auto mb-3 hover:scale-110 transition-all">
        <a href="#home">
          <AiOutlineUpCircle size={44} className="text-gray-300" />
        </a>
      </button>
    </div>
  );
}

export default Contact;
