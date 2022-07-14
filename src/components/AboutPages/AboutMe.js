function AboutMe() {
  return (
    <div className="carousel-item w-full flex flex-col justify-start sm:justify-center" id="about-me">
      <div className="sm:ml-[10%] text-gray-200 flex flex-col items-center sm:items-start">
        <h1 className="font-medium text-6xl sm:text-7xl mb-1 mt-3 sm:mb-3 sm:mt-0">About me.</h1>
        <h3 className="font-light text-gray-400 text-xl w-[80%] text-center sm:text-left sm:text-3xl sm:w-auto">
          A bit about my background and experience.
        </h3>
      </div>
      <div className="sm:w-[85%] flex flex-col justify-center items-center self-center sm:mt-[6vh] sm:flex-row">
        <div className="flex sm:w-[25%] sm:min-w-[150px] sm:max-w-[300px] max-w-[200px] justify-center items-center mx-16  my-5 sm:my-0">
          <img
            className="rounded-full"
            alt="Dan Michell"
            src="https://drive.google.com/uc?export=view&id=1wucOFHiV3wLZX-bM4HAz_4fbqjOL4SPJ"
          />
        </div>
        <div className="flex items-center sm:w-[60%] w-[90%]">
          <p className="text-xl font-light leading-relaxed text-gray-300">
            Thank you for taking the time to look at my website! I'm Dan, a junior fullstack software engineer based
            near London. Having recently entered the world of Software Development from a background in Mechanical
            Engineering I have naturally taken to the problem solving and logical aspect that coding offers.
            <br />
            <br />
            Upon completing the 3 month training program @{" "}
            <span className="font-semibold hover:underline" target="_blank" rel="noreferrer">
              <a href="https://www.sigmalabs.co.uk/">Sigma Labs</a>
            </span>{" "}
            I have had experience with a variety of technologies to facilitate full-stack development along with working
            as part of an agile team. I am extremely excited to put these into practice in industry and also expand my
            knowledge into the vast world of exciting technologies to come up with creative and innovative solutions to
            problems.
            <br />
            <br />
            Take a look at a{" "}
            <span>
              <a href="#skills" className="font-semibold hover:underline">
                brief overview
              </a>
            </span>{" "}
            of some technologies I have been working with recently.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
