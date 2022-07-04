import { AiOutlineUpCircle } from "react-icons/ai";

function Contact() {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="text-gray-200 h-full flex items-center">
        <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 sm:gap-28 sm:px-12 lg:px-16">
          <div className="flex flex-col text-gray-300">
            <h2 className="text-4xl sm:text-7xl font-medium">Contact me!</h2>
            <div className="text-gray-400 sm:text-2xl mt-2">
              Hate forms? Send me a direct <br /> message on{" "}
              <span className="underline">
                <a href="https://www.linkedin.com/in/dan-michell/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </span>
              .
            </div>
          </div>
          <form className="mt-5 sm:mt-0" name="contact-form" method="post">
            <input type="hidden" name="form-name" value="contact-form" />
            <div>
              <span className="text-sm font-medium">Full Name</span>
              <input
                className="w-full bg-gray-900 bg-opacity-30 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
                name="name-input"
              />
            </div>
            <div className="mt-8">
              <span className="text-sm font-medium">Email</span>
              <input
                className="w-full bg-gray-900 bg-opacity-30 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                name="email-input"
              />
            </div>
            <div className="mt-8">
              <span className="text-sm font-medium">Message</span>
              <textarea
                name="message-input"
                className="w-full h-32 bg-gray-900 bg-opacity-30 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="w-[50%] self-center font-bold tracking-wide bg-slate-900 bg-opacity-90 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline hover:bg-opacity-70"
              >
                Submit
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
