import React, { useState, useEffect, useRef } from "react";
import HeaderThree from "./components/HeaderThree";
import LandingContent from "./components/LandingContent";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import NET from "vanta/src/vanta.net";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          backgroundColor: 0x010718,
          color: 0x4f5564,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="bg-[#010718] h-screen overflow-y-scroll snap-y snap-mandatory">
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
