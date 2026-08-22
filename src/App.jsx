import BackgroundEffects from "./components/layout/BackgroundEffects";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0b0f] text-[#f2f3f6]">
      <BackgroundEffects />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;