import { AiOutlineUpCircle } from "react-icons/ai";

function Contact() {
  return (
    <div className="flex flex-col items-center h-full">
      <div class="text-gray-200 md:mt-[12vh] mt-[4vh]">
        <div class="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 md:gap-28 md:px-12 lg:px-16">
          <div class="flex flex-col">
            <h2 class="text-4xl md:text-7xl font-medium">Contact me!</h2>
            <div class="text-gray-400 md:mt-5 md:text-2xl mt-2 text-xl">
              Hate forms? Send me a direct <span class="underline">email</span>
              <br /> or message me on <span class="underline">linkedin</span>.
            </div>
          </div>
          <div className="mt-3">
            <div>
              <span class="uppercase text-sm font-medium">Full Name</span>
              <input
                class="w-full bg-gray-400 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm font-medium">Email</span>
              <input
                class="w-full bg-gray-400 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm font-medium">Message</span>
              <textarea class="w-full h-32 bg-gray-400 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div class="mt-8">
              <button class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
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
