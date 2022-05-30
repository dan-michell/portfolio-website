import Header from "./components/Header";
import HeaderTwo from "./components/HeaderTwo";
import Timeline from "./components/Timeline";
import LandingContent from "./components/LandingContent";
import Footer from "./components/Footer";
import About from "./components/About";
import { useRef } from "react";

function App() {
  return (
    <div>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-gradient-to-r from-slate-900 to-blue-900">
        <section className="h-screen w-screen snap-center">
          <div className="h-screen flex items-center flex-col justify-start">
            <HeaderTwo />
            <LandingContent />
          </div>
        </section>
        <section className="h-screen w-screen snap-center ">
          <About />
        </section>
        <section className="h-screen w-screen snap-center">
          <h2>Section 3</h2>
        </section>
        <section className="h-screen w-screen snap-center">
          <h2>Section 4</h2>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
