function ProjectTemplate(props) {
  const { name, description, briefDesc, technologies, githubFrontend, githubBackend, deployed, images } =
    props.projectInfo;
  return (
    <div class="carousel-item w-full">
      <div className="text-gray-200 w-full h-full">
        <div className="mt-[12vh] ml-[10%]">
          <h1 className="font-semibold text-5xl">{name}</h1>
          <h3 className="font-light text-gray-400 text-2xl">{briefDesc}</h3>
        </div>
        <div className="flex justify-center mt-10 h-[60%]">
          <div className="w-[30%] mr-[6%] flex flex-col gap-2">
            <p className="font-semibold">{technologies}</p>
            <p class="text-xl font-light leading-relaxed text-gray-300">{description}</p>
          </div>
          <div className="w-[40%] h-full flex flex-col gap-2">
            <div class="w-full h-[80%] carousel rounded-box bg-gray-900 bg-opacity-20">
              <div class="carousel-item w-full">1</div>
              <div class="carousel-item w-full">2</div>
              <div class="carousel-item w-full">3</div>
            </div>
            <div className="flex self-end gap-5 text-gray-400">
              <a href={deployed} className="hover:scale-110 transition-all" target="_blank" rel="noreferrer">
                Link
              </a>
              <a href={githubFrontend} className="hover:scale-110 transition-all" target="_blank" rel="noreferrer">
                Frontend Repo
              </a>
              <a href={githubBackend} className="hover:scale-110 transition-all" target="_blank" rel="noreferrer">
                Backend Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTemplate;
