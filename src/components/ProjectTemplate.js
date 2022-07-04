function ProjectTemplate(props) {
  const { name, description, briefDesc, technologies, githubFrontend, githubBackend, deployed, images, width } =
    props.projectInfo;
  return (
    <div class="carousel-item w-full">
      <div className="text-gray-200 w-full h-full flex flex-col md:justify-center items-center md:items-start md:gap-12 gap-5 mt-5 md:mt-0">
        <div className="md:ml-[10%] flex flex-col items-center md:items-start mx-3 md:mx-0">
          <h1 className="font-semibold md:text-5xl text-3xl text-center">{name}</h1>
          <h3 className="font-light text-gray-400 md:text-2xl text-lg text-center md:text-left">{briefDesc}</h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:h-[60%] w-[95%] md:w-auto">
          <div className={`md:w-[${width}%] max-w-[90%] flex flex-col gap-2`}>
            <div class="carousel rounded-box bg-gray-900 bg-opacity-20 border-2 border-slate-700">
              {images.map((image) => {
                return (
                  <div class="carousel-item w-full">
                    <img src={image} alt={name} />
                  </div>
                );
              })}
            </div>
            <div className="flex md:self-end self-center gap-5 text-gray-400">
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
          <div className="md:w-[45%] md:ml-[4%] flex flex-col gap-2 mt-5 md:mt-0">
            <p className="font-semibold text-center md:text-left">{technologies}</p>
            <p class="md:text-xl font-light md:leading-relaxed text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTemplate;
