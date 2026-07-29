import "./App.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";

import "./index.css";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;