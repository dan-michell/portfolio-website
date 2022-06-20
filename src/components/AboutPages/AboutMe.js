function AboutMe() {
  return (
    <div className="carousel-item w-full flex flex-col justify-center" id="about-me">
      <div className="ml-[10%] text-gray-200">
        <h1 className="font-medium text-7xl mb-3">About me.</h1>
        <h3 className="font-light text-gray-400 text-3xl">A bit about my background and experience.</h3>
      </div>
      <div className="w-[85%] flex justify-center items-center self-center mt-[6vh]">
        <div className="flex w-[25%] min-w-[150px] max-w-[300px] justify-center items-center mx-16">
          <img
            className="rounded-full"
            alt="Dan Michell"
            src="https://drive.google.com/uc?export=view&id=1wucOFHiV3wLZX-bM4HAz_4fbqjOL4SPJ"
          />
        </div>
        <div className="flex items-center w-[60%]">
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
            of some technologies I have been working with.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
