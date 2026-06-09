import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Education from "../components/education";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Community from "../components/community";
import Contact from "../components/contact";
import CursorTrail from "../components/cursorTrail";
import ScrollProgressBar from "../components/scrollProgressBar";


const Home: React.FC = () => {
  return (
    <>
    <CursorTrail />
    <ScrollProgressBar  />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Community />
      <Contact />
      
    </>
  );
};

export default Home;