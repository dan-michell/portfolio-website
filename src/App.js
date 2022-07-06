import React, { useState, useEffect, useRef } from "react";
import HeaderTwo from "./components/HeaderTwo";
import LandingContent from "./components/LandingContent";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import TOPOLOGY from "vanta/src/vanta.topology";
function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TOPOLOGY({
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
    <div ref={myRef} className="bg-[#010718] ">
      <div className="h-screen flex items-center flex-col justify-start" id="home">
        <HeaderTwo />
        <LandingContent />
      </div>
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
