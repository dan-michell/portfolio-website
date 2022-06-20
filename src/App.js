import HeaderTwo from "./components/HeaderTwo";
import LandingContent from "./components/LandingContent";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-gradient-to-b from-slate-900 to-slate-700 scroll-smooth">
      <section className="h-screen w-screen snap-center" id="home">
        <div className="h-screen flex items-center flex-col justify-start">
          <HeaderTwo />
          <LandingContent />
        </div>
      </section>
      <section className="h-screen w-screen snap-center" id="about">
        <About />
      </section>
      <section className="h-screen w-screen snap-center" id="work">
        <Work />
      </section>
      <section className="h-screen w-screen snap-center" id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
