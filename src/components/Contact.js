import { AiOutlineUpCircle } from "react-icons/ai";

function Contact() {
  return (
    <div className="flex flex-col items-center h-full border-2 border-white">
      <div class="text-gray-200 mt-[8%]">
        <div class="max-w-screen-xl grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 mx-auto text-gray-200 rounded-lg shadow-lg">
          <div class="flex flex-col justify-between">
            <div>
              <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
              <div class="text-gray-400 mt-8">
                Hate forms? Send us an <span class="underline">email</span> instead.
              </div>
            </div>
          </div>
          <div class="">
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
