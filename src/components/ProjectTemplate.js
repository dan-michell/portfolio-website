function ProjectTemplate(props) {
  const { name, description, briefDesc, technologies, githubFrontend, githubBackend, deployed, images } =
    props.projectInfo;
  return (
    <div class="carousel-item w-full">
      <div className="text-gray-200 w-full h-full flex flex-col sm:justify-center items-center sm:items-start sm:gap-12 gap-5 mt-5 sm:mt-0">
        <div className="sm:ml-[10%] flex flex-col items-center sm:items-start mx-3 sm:mx-0">
          <h1 className="font-semibold sm:text-5xl text-3xl text-center">{name}</h1>
          <h3 className="font-light text-gray-400 sm:text-2xl text-lg text-center sm:text-left">{briefDesc}</h3>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:h-[60%] w-[95%] sm:w-auto">
          <div className="sm:w-[35%] w-full flex flex-col gap-2">
            <div class="carousel rounded-box bg-gray-900 bg-opacity-20 border-2 border-slate-700">
              <div class="carousel-item w-full">
                <img src={images[0]} alt={name} />
              </div>
              <div class="carousel-item w-full">
                <img src={images[1]} alt={name} />
              </div>
              <div class="carousel-item w-full">
                <img src={images[2]} alt={name} />
              </div>
            </div>
            <div className="flex sm:self-end self-center gap-5 text-gray-400">
              {deployed ? (
                <a href={deployed} className="hover:scale-110 transition-all" target="_blank" rel="noreferrer">
                  Link
                </a>
              ) : (
                ""
              )}
              <a href={githubFrontend} className="hover:scale-110 transition-all" target="_blank" rel="noreferrer">
                Frontend Repo
              </a>
              {githubBackend ? (
                <a href={githubBackend} className="hover:scale-110 transition-all" target="_blank" rel="noreferrer">
                  Backend Repo
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="sm:w-[35%] sm:ml-[6%] flex flex-col gap-2 mt-5">
            <p className="font-semibold text-center">{technologies}</p>
            <p class="sm:text-xl font-light sm:leading-relaxed text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTemplate;
