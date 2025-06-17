import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import MyWork from "./sections/MyWork";
import Projects from "./sections/Projects";
import DSAJourney from "./components/DSAJourney";
import ProblemStats from "./sections/ProblemStats";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Projects />
      <DSAJourney />
      <ProblemStats />
      {/* <Clients /> */}
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
