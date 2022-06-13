import { AiOutlineUpCircle } from "react-icons/ai";

function Contact() {
  return (
    <div className="flex flex-col items-center h-full">
      <div class="text-gray-200 md:mt-[12vh] mt-[4vh]">
        <div class="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 md:gap-28 md:px-12 lg:px-16">
          <div class="flex flex-col text-gray-300">
            <h2 class="text-4xl md:text-7xl font-medium">Contact me!</h2>
            <div class="text-gray-400 md:mt-5 md:text-2xl mt-2 text-xl">
              Hate forms? Send me a direct <span class="underline">email</span>
              <br /> or message me on <span class="underline">linkedin</span>.
            </div>
          </div>
          <div className="mt-3">
            <div>
              <span class="text-sm font-medium">Full Name</span>
              <input
                class="w-full bg-gray-900 bg-opacity-30 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div class="mt-8">
              <span class="text-sm font-medium">Email</span>
              <input
                class="w-full bg-gray-900 bg-opacity-30 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div class="mt-8">
              <span class="text-sm font-medium">Message</span>
              <textarea class="w-full h-32 bg-gray-900 bg-opacity-30 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div class="mt-8 flex justify-center">
              <button class="w-[50%] self-center font-bold tracking-wide bg-slate-900 bg-opacity-90 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline hover:bg-opacity-70">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="flex items-center justify-center mt-auto mb-3 hover:scale-110 transition-all">
        <a href="#home">
          <AiOutlineUpCircle size={44} className="text-gray-300" />
        </a>
      </button>
    </div>
  );
}

export default Contact;
