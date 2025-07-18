import React from "react";
import HomePage from "./pages/homePage/homePage";
import About from "./pages/aboutMe/aboutMe";
import SkillsMe from "./pages/skillsMe/skillsMe";
import ProjectsMe from "./pages/projectsMe/projectsMe";
import ContactMe from "./pages/contactMe/contactMe";
import Navbar from "./components/navBar/navBar";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      <Navbar />
      <HomePage />
      <About />
      <SkillsMe />
      <ProjectsMe />
      <ContactMe />
    </div>
  );
};

export default App;