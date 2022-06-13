function LinkShortenerProj(props) {
  return (
    <div className="text-gray-200 w-full h-full">
      <div className="mt-[10vh] ml-[10vw]">
        <h1 className="font-semibold text-5xl">Link Shortener Website</h1>
      </div>
      <div className="flex justify-center mt-10 h-[60%]">
        <div className="w-[40%]">
          <p class="text-xl font-light leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero iste quod quibusdam maxime
            recusandae odit eveniet, aspernatur culpa provident error molestiae vitae corporis in vero est! Beatae,
            ipsum voluptatibus.
            <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero iste quod quibusdam maxime
            recusandae odit eveniet, aspernatur culpa provident error molestiae vitae corporis in vero est! Beatae,
            ipsum voluptatibus.
          </p>
        </div>
        <div class="w-[45%] carousel rounded-box bg-gray-900 bg-opacity-20">
          <div class="carousel-item w-full">1</div>
          <div class="carousel-item w-full">2</div>
          <div class="carousel-item w-full">3</div>
        </div>
      </div>
    </div>
  );
}

export default LinkShortenerProj;
