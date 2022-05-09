import Header from "./components/Header";
import HeaderTwo from "./components/HeaderTwo";
import Timeline from "./components/Timeline";
import LandingContent from "./components/LandingContent";

function App() {
  return (
    <div>
      <div className="h-screen overflow-y-scroll snap-y">
        <section className="h-screen w-screen snap-center bg-gradient-to-b from-slate-600 to-slate-900">
          <div className="h-screen flex items-center flex-col justify-start bg-gradient-to-b from-slate-900 to-slate-600">
            <HeaderTwo />
            <LandingContent />
          </div>
        </section>
        <section className="h-screen w-screen snap-center bg-gradient-to-b from-slate-900 to-slate-600">
          <h2>Section 2</h2>
        </section>
        <section className="h-screen w-screen snap-center bg-gradient-to-b from-slate-600 to-slate-900">
          <h2>Section 3</h2>
        </section>
        <section className="h-screen w-screen snap-center bg-gradient-to-b from-slate-900 to-slate-600">
          <h2>Section 4</h2>
        </section>
      </div>
    </div>
  );
}

export default App;
