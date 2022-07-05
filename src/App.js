import React, { useState, useEffect, useRef } from "react";
import HeaderTwo from "./components/HeaderTwo";
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
          color: 0x30d18,
          waveSpeed: 0.45,
          waveHeight: 16.0,
          shininess: 5.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[#04111f] scroll-smooth">
      <section ref={myRef} className="h-screen w-screen snap-center snap-always" id="home">
        <div className="h-screen flex items-center flex-col justify-start">
          <HeaderTwo />
          <LandingContent />
        </div>
      </section>
      <section className="h-screen w-screen snap-center snap-always" id="about">
        <About />
      </section>
      <section className="h-screen w-screen snap-center snap-always" id="work">
        <Work />
      </section>
      <section className="h-screen w-screen snap-center snap-always" id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
