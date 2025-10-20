import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Education from "../components/education";
import Experience from "../components/experience";
import Projects from "../components/projects";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      
    </>
  );
};

export default Home;