function AboutMe() {
  return (
    <div className="carousel-item w-full flex flex-col gap-8" id="about-me">
      <div className="mt-[12vh] ml-[10%] text-gray-200">
        <h1 className="font-medium text-7xl mb-3">About me.</h1>
      </div>
      <div className="w-[80%] flex justify-center items-center self-center">
        <div className="flex w-[25%] min-w-[200px] justify-center items-center mx-10">
          <img
            className="rounded-full"
            alt="Dan Michell"
            src="https://drive.google.com/uc?export=view&id=1wucOFHiV3wLZX-bM4HAz_4fbqjOL4SPJ"
          />
        </div>
        <div className="flex items-center w-[60%]">
          <p className="text-xl font-light leading-relaxed text-gray-300">
            Thank you for taking the time to look at my website! I'm Dan, a junior fullstack software engineer based
            near London. .take a look at a brief overview of my{" "}
            <span>
              <a href="#skills" className="font-semibold hover:underline">
                skills
              </a>
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
