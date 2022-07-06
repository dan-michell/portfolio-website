import React, { useState, useEffect, useRef } from "react";
import HeaderThree from "./components/HeaderThree";
import LandingContent from "./components/LandingContent";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import WAVES from "vanta/src/vanta.waves";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          shininess: 16.0,
          waveHeight: 25.0,
          waveSpeed: 0.35,
          zoom: 0.7,
          color: 0x010b19,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="bg-gradient-to-b from-[#010b19] to-[#01163258] h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section ref={myRef} className="h-screen w-screen snap-center snap-always">
        <div className="h-screen flex items-center flex-col justify-start" id="home">
          <HeaderThree />
          <LandingContent />
        </div>
      </section>
      <section className="h-screen w-screen snap-center snap-always" id="about">
        <About />
      </section>
      <section className="h-screen w-screen snap-center snap-always" id="about">
        <Work />
      </section>
      <section className="h-screen w-screen snap-center snap-always" id="about">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
