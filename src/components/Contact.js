import { AiOutlineUpCircle } from "react-icons/ai";

function Contact() {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="text-gray-200 md:mt-[12vh] mt-[4vh]">
        <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 md:gap-28 md:px-12 lg:px-16">
          <div className="flex flex-col text-gray-300">
            <h2 className="text-4xl md:text-7xl font-medium">Contact me!</h2>
            <div className="text-gray-400 md:mt-5 md:text-2xl mt-2 text-xl">
              Hate forms? Send me a direct <br /> message on{" "}
              <span className="underline">
                <a href="https://www.linkedin.com/in/dan-michell/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </span>
              .
            </div>
          </div>
          <form className="mt-3" netlify name="contact-form">
            <div>
              <span className="text-sm font-medium">Full Name</span>
              <input
                className="w-full bg-gray-900 bg-opacity-30 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mt-8">
              <span className="text-sm font-medium">Email</span>
              <input
                className="w-full bg-gray-900 bg-opacity-30 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="mt-8">
              <span className="text-sm font-medium">Message</span>
              <textarea className="w-full h-32 bg-gray-900 bg-opacity-30 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="w-[50%] self-center font-bold tracking-wide bg-slate-900 bg-opacity-90 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline hover:bg-opacity-70"
              >
                Send
              </button>
            </div>
          </form>
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
